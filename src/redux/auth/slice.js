import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, getCurrentUser  } from './operations';

const handlerPending = state => {
  state.error = null;
  state.loadind = true;
};

const handlerRejected = (state, { payload }) => {
  state.error = payload;
  state.loadind = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatarURL: null },
    refreshToken: null,
    accessToken: null,
    loading: false,
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
       .addCase(register.pending, handlerPending)
       .addCase(register.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.avatarURL = payload.avatarURL;
        state.loading = false;
       })
      .addCase(register.rejected, handlerRejected)

      .addCase(login.pending, handlerPending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.avatarURL = payload.user.avatarURL;
        state.refreshToken = payload.refreshToken;
        state.accessToken = payload.accessToken;
        state.loading = false;
      })
      .addCase(login.rejected, handlerRejected)

      .addCase(logout.pending, handlerPending)
      .addCase(logout.fulfilled, (state, _) => {
        state.user.email = null;
        state.user.name = null;
        state.user.avatarURL = null;
        state.refreshToken = null;
        state.accessToken = null;
        state.loading = false;
      })
        .addCase(logout.rejected, (state, { payload }) => {
        state.user.email = '';
        state.user.name = '';
        state.user.avatarURL = '';
        state.refreshToken = '';
        state.accessToken = '';
        state.loading = false;
        state.error = payload;
      })

       .addCase(getCurrentUser.pending, handlerPending)
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.avatarURL = payload.avatarURL;
        state.loading = false;
      })
      .addCase(getCurrentUser.rejected, handlerRejected),
});

export const {
  updateDataUser,
  updateTokens,
  clearTokens,
  updateUserName,
  updateUserAvatar,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
