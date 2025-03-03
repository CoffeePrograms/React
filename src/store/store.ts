import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';

const store = configureStore({
  reducer: {
    api: apiSlice,
  },
});

// Определение типа RootState
export type RootState = ReturnType<typeof store.getState>;

// Определение типа Dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
