import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { v4 as uuidv4 } from 'uuid';

import { setSummonerName } from '../features/summonerSlice';
import { RootState } from '../store';

export const navigateToPage = createAsyncThunk<
  void,
  { summonerName: string; router: AppRouterInstance }
>('summoner/navigateToPage', async ({ summonerName, router }, thunkAPI) => {
  const state: RootState = thunkAPI.getState() as RootState;
  const summonerNames = state.summonerReducer.summonerNames;

  let uuid = Object.keys(summonerNames).find(
    key => summonerNames[key] === summonerName
  );

  if (!uuid) {
    uuid = uuidv4();
    thunkAPI.dispatch(setSummonerName({ uuid, summonerName }));
  }
  router.push(`/card/${uuid}`);
});
