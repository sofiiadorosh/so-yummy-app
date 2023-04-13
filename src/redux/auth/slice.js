import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, getCurrentUser, updateUserInfo  } from './operations';

const handlerPending = state => {
  state.loading = true;
};

const handlerRejected = (state) => {
  state.loading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatarURL: null },
    refreshToken: null,
    accessToken: null,
    isLoggedIn: false,
    loading: false,

  },
  reducers: {
    updateDataUser(state, { payload }) {
      state.refreshToken = payload.refreshToken;
      state.accessToken = payload.accessToken;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.user.avatarURL = payload.user.avatarURL;
    },
    updateUserName(state, { payload }) {
      state.user.name = payload;
      state.isLoggedIn = true;
    },
    updateUserAvatar(state, { payload }) {
      state.user.avatarURL = payload;
      state.isLoggedIn = true;
    },
    setIsLoggedIn(state, { payload }) {
      state.isLoggedIn = payload;
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
        state.isLoggedIn = false;
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
        state.isLoggedIn = true;
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
        state.isLoggedIn = false;
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
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.user.avatarURL = payload.user.avatarURL;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.rejected, handlerRejected)
      
      .addCase(updateUserInfo.pending, handlerPending)
      .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.avatarURL = payload.user.avatarURL;
        state.isLoggedIn = true;
      })
      .addCase(updateUserInfo.rejected, handlerRejected),
}); 

export const {
  updateUserName,
  updateUserAvatar,
  setIsLoggedIn,
  updateDataUser,
} = authSlice.actions; 
export const authReducer = authSlice.reducer;
