'use client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { v4 as uuidv4 } from 'uuid';

import { setSummonerName } from '../features/summonerSlice';

export const navigateToPage = createAsyncThunk<
  void,
  { summonerName: string; router: AppRouterInstance }
>('summoner/navigateToPage', async ({ summonerName, router }, { dispatch }) => {
  const uuid = uuidv4();
  dispatch(setSummonerName({ uuid, summonerName }));
  router.push(`/card?${uuid}`);
});
