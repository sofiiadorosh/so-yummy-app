import { persistor } from 'redux/store';

const updateLocalStorage = store => next => action => {
  const result = next(action);

  if (store.getState().auth.refreshToken !== result.auth.refreshToken) {
    persistor.flush().then(() => {});
  }

  return result;
};

export default updateLocalStorage; 