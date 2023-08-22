import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterSlice from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === 'development'
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
