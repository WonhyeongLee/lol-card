import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { setSummonerName } from '~redux/features/summonerSlice';
import { RootState } from '~redux/store';

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
    uuid = self.crypto.randomUUID();
    thunkAPI.dispatch(setSummonerName({ uuid, summonerName }));
  }
  router.push(`/card/${uuid}`);
});
