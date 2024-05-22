import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { eventsReducer } from './events/eventsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { participantsReducer } from './participants/participantsSlice';

const persistConfig = {
  key: 'events',
  storage,
  whitelist: ['sorting'],
};

const persistedEventsReducer = persistReducer(persistConfig, eventsReducer);

const reducer = {
  events: persistedEventsReducer,
  participants: participantsReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
