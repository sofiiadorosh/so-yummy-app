import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { startTokenRefreshInterval, stopTokenRefreshInterval } from 'services/auth/autoRefreshTokens'; 

axios.defaults.baseURL = 'https://so-yummy-app-backend.onrender.com/api/';


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', credentials);
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
      const {data} = await axios.post('/users/login', credentials);
      startTokenRefreshInterval(thunkAPI.dispatch, data.refreshToken);
      toast.success(`Welcome back, ${data.user.name}!`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    stopTokenRefreshInterval();
    toast.success('You successfully logged out!');
    return; 
  } catch (error) {
    stopTokenRefreshInterval();
    toast.warn('You logged out, please login again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, ThunkAPI) => {
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to get user!');
//     }
//     try {
//       setAuthHeader(persistedToken);
//       const response = await axios.get('users/current');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
