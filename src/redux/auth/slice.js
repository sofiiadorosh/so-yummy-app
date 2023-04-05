import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, refreshUser } from './operations';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatarURL: null },
    refreshToken: null,
    accessToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    updateDataUser(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.user.avatarURL = payload.user.avatarURL;
    },
    updateTokens(state, { payload }) {
      state.refreshToken = payload.refreshToken;
      state.accessToken = payload.accessToken;
    },
    clearTokens(state, { _ }) {
      state.refreshToken = null;
      state.accessToken = null;
    },
    updateUserName(state, { payload }) {
      state.user.name = payload;
    },
    updateUserAvatar(state, { payload }) {
      state.user.avatarURL = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        return {
          ...state,
          user: { ...action.payload.user },
          token: action.payload.token,
          isLoggedIn: true,
        };
      })
      .addCase(login.fulfilled, (state, action) => {
        return {
          ...state,
          user: { ...action.payload.user },
          token: action.payload.token,
          isLoggedIn: true,
        };
      })
      .addCase(login.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
        };
      })
      .addCase(logout.fulfilled, (state, action) => {
        return {
          ...state,
          user: { name: null, email: null },
          token: null,
          isLoggedIn: false,
        };
      })
      .addCase(refreshUser.pending, state => {
        return { ...state, isRefreshing: true };
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: { ...action.payload },
          isLoggedIn: true,
          isRefreshing: false,
        };
      })
      .addCase(refreshUser.rejected, state => {
        return { ...state, isRefreshing: false };
      }),
});

export const authReducer = authSlice.reducer;
