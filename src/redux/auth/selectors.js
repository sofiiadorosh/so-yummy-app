const selectUserName = state => state.auth.user.name;
const selectUserEmail = state => state.auth.user.email;
const selectUserAvatar = state => state.auth.user.avatarURL;
// const selectRefreshToken = state => state.auth.refreshToken;
const selectToken = state => state.auth.token;
const selectLoading = state => state.auth.loading;
const selectIsLoggedIn = state => state.auth.isLoggedIn;

export { selectUserName, selectUserEmail, selectUserAvatar, selectToken, selectLoading,  selectIsLoggedIn };
