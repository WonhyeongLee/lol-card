import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

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
    setSummonerName: (state, action: PayloadAction<string>) => {
      const uuid = uuidv4();
      state.summonerNames[uuid] = action.payload;
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
