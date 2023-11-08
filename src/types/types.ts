export type Information = {
  summonerName: string;
  summonerLevel: number;
  summonerIcon: string;
};

export type Champion = {
  name: string;
  winRate: number;
  gamesPlayed: number;
  KDA: number;
};

export type Summoner = {
  id: number;
  information: Information;
  season: string[];
  tendency: string[];
  lanes: string[];
  champions: Champion[];
};

export type LaneType =
  | 'fill'
  | 'bottom'
  | 'jungle'
  | 'middle'
  | 'utility'
  | 'top';

export const apiToInternalMapping: Record<string, string> = {
  ALL: 'fill',
  TOP: 'top',
  JUG: 'jungle',
  MID: 'middle',
  BOT: 'bottom',
  SUP: 'utility'
};
