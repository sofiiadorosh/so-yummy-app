const selectUserName = state => state.auth.user.name;
const selectUserEmail = state => state.auth.user.email;
const selectUserAvatar = state => state.auth.user.avatarURL;
const selectRefreshToken = state => state.auth.refreshToken;
const selectAccessToken = state => state.auth.accessToken;
const selectLoading = state => state.auth.loading;
const selectIsLoggedIn = state => state.isLoggedIn;

export { selectUserName, selectUserEmail, selectUserAvatar, selectRefreshToken, selectAccessToken, selectLoading,  selectIsLoggedIn };
