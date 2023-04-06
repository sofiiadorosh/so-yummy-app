import { persistor } from 'redux/store';

const updateLocalStorage = store => next => action => {
  const previousRefreshToken = store.getState().auth.refreshToken;
  const result = next(action);
  const currentRefreshToken = store.getState().auth.refreshToken;

  if (previousRefreshToken !== currentRefreshToken) {
    persistor.flush().then(() => {});
  }

  return result;
};

export default updateLocalStorage; 