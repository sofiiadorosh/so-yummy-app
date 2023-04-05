import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import updateLocalStorage from 'services/auth/updateLocalStorage';
import { authReducer } from './auth/slice';
import { searchReducer } from './search/searchSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(updateLocalStorage),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'accessToken', 'user'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    search: searchReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
