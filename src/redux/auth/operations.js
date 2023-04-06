import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


// axios.defaults.baseURL = 'https://so-yummy-app-backend.onrender.com/api/';

const instance = axios.create({
  baseURL: 'https://so-yummy-app-backend.onrender.com/api/',
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}; 

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
}; 

instance.interceptors.response.use(response => response, async (error) => {
  if (error.response.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      const { data } = await instance.post('/users/refresh', { refreshToken });
      setToken(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return instance(error.config);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
})

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('/users/register', credentials);
      toast.success('You successfully registered!')
      return response.data.user;
    } catch (error) {
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
      localStorage.setItem('refreshToken', data.refreshToken)
      toast.success(`Welcome back, ${data.user.name}!`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    clearAuthHeader();
    toast.success('You successfully logged out!');
    return; 
  } catch (error) {
    toast.warn('You logged out, please login again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, ThunkAPI) => {
    const state = ThunkAPI.getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return ThunkAPI.rejectWithValue();
  }
    try {
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUserInfo = createAsyncThunk(
  'auth/update',
  async (user, ThunkAPI) => {
    try {
      const data = await instance.patch('/users/update');
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
