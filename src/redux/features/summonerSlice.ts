import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  summonerNames: Record<string, string>;
  cardData: Record<string, any>;
}

const initialState: InitialState = {
  summonerNames: {},
  cardData: {}
};

export const summonerSlice = createSlice({
  name: 'summoner',
  initialState,
  reducers: {
    setSummonerName: (
      state,
      action: PayloadAction<{ uuid: string; summonerName: string }>
    ) => {
      const { uuid, summonerName } = action.payload;
      state.summonerNames[uuid] = summonerName;
    },
    setCardData: (
      state,
      action: PayloadAction<{ uuid: string; data: any }>
    ) => {
      const { uuid, data } = action.payload;
      state.cardData[uuid] = data;
    }
  }
});

export const { setSummonerName, setCardData } = summonerSlice.actions;
export default summonerSlice.reducer;
