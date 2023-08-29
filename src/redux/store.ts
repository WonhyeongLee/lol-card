import { configureStore } from '@reduxjs/toolkit';

import summonerReducer from './features/summonerSlice';

export const store = configureStore({
  reducer: {
    summonerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
