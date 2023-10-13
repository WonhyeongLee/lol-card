import { configureStore, Middleware } from '@reduxjs/toolkit';

import summonerReducer from './features/summonerSlice';

const logger: Middleware = storeAPI => next => action => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('New state:', storeAPI.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    summonerReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
