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

import { authReducer } from './auth/slice';
import { searchReducer } from './search/searchSlice';
import { shoppingListReducer } from './shoppingList.js/slice';
import { themeReducer } from './theme/themeSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'accessToken', 'user'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['darkTheme'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    search: searchReducer,
    shoppingList: shoppingListReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
