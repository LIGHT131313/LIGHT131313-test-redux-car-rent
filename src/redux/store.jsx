import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertsSlice';
import { favoritesReducer } from './adverts/favoritesSlice';
// import { filterReducer } from './adverts/filterSlice';

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

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    // filter: filterReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
