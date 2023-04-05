import axios from 'axios';

import { clearTokens, updateTokens } from 'redux/auth/slice';
import { startTokenRefreshInterval, stopTokenRefreshInterval } from './autoRefreshTokens';
import { refreshTokens } from './refreshTokens';

let isRefreshing = false;
let failedRequests = [];

const getAccessToken = (store) => {
  return store.getState().auth.accessToken;
}

const setAuthorizationHeader = (config, token) => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

const handleTokenRefreshError = async (error, store) => {
  console.error('Error refreshing token:', error);
  stopTokenRefreshInterval();
  store.dispatch(clearTokens());
  return Promise.reject(error);
}

const refreshToken = async (store) => {
    const refreshToken = store.getState().auth.refreshToken;
    try {
        const data = await refreshTokens(refreshToken);
        store.dispatch(updateTokens(data));
        startTokenRefreshInterval(store.dispatch, data.refreshToken);
        return data.accessToken;
    } catch (error) {
        return handleTokenRefreshError(error, store);
    }
};

const handle401Error = async (store, failedRequests, error) =>  {
  const originalRequest = error.config;
  if (!originalRequest._retry) {
    originalRequest._retry = true;
    if (!isRefreshing) {
      isRefreshing = true;
      refreshToken(store)
        .then(accessToken => {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          processFailedRequests(failedRequests, accessToken);
          return axios(originalRequest);
        })
        .catch(error => {
          processFailedRequests(failedRequests, null);
          return handleTokenRefreshError(error, store);
        })
        .finally(() => {
          isRefreshing = false;
        });
    } else {
      return new Promise((resolve, reject) => {
        failedRequests.push({ resolve, reject });
      })
        .then(accessToken => {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        })
        .catch(error => {
          return handleTokenRefreshError(error, store);
        });
    }
  } else {
    return Promise.reject(error);
  }
};

const processFailedRequests = (failedRequests, accessToken) => {
  for (const request of failedRequests) {
    request.resolve(accessToken);
  }
  failedRequests = [];
}

export const setupInterceptors = (store) => {
    axios.interceptors.request.use(
    config => setAuthorizationHeader(config, getAccessToken(store)),
    error => Promise.reject(error),
    );
    
    axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        return handle401Error(store, failedRequests, error);
      } else {
        return Promise.reject(error);
      }
    },
  );
};