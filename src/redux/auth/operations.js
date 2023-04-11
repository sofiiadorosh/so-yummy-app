import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  position: 'center-top',
});

const instance = axios.create({
  baseURL: 'https://so-yummy-app-backend.onrender.com/api/',
});

const setToken = token => {
  // const accessToken = localStorage.getItem('accessToken');
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

// instance.interceptors.request.use(config => {
//   const accessToken = localStorage.getItem("accessToken");
//   config.headers.common.Authorization = `Bearer ${accessToken}`
//   return config;
// })

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('/users/refresh', {
          refreshToken,
        });
        setToken(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('accessToken', data.accessToken);
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('/users/register', credentials);
      Notify.success(
        'You successfully registered. You can log in to your account now!'
      );
      return response.data.user;
    } catch (error) {
      Notify.failure('Something went wrong, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/login', credentials);
      setToken(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('accessToken', data.accessToken);
      Notify.success(`Welcome back, ${data.user.name}`);
      return data;
    } catch (error) {
      Notify.failure('Your email or password is incorrect. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    clearAuthHeader();
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    Notify.success('You successfully logged out! Hope to see you soon again!');
    return;
  } catch (error) {
    Notify.warning('You logged out, please login again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const getCurrentUser = createAsyncThunk(
//   'auth/getCurrentUser',
//   async (_, ThunkAPI) => {
//     const state = ThunkAPI.getState();
//     const persistedAccessToken = state.auth.accessToken;
//     if (!persistedAccessToken) {
//       return ThunkAPI.rejectWithValue();
//     }
//     try {
//       setToken(persistedAccessToken);
//       const { data } = await instance.get('/users/current');
//       return data;
//     } catch (error) {
//       return ThunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const persistedAccessToken = localStorage.getItem('accessToken');
    if (!persistedAccessToken) {
      return thunkAPI.rejectWithValue();
    }
    setToken(persistedAccessToken);
    try {
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/update',
  async (user, ThunkAPI) => {
    try {
      const data = await instance.patch('/users/update');
      Notify.success('You successfully updated your profile');
      return data;
    } catch (error) {
      Notify.failure('error.response.data.message');
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export default instance;
