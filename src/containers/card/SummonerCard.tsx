'use client';
import React from 'react';

import ChampionCardList from './ChampionCardList';
import SummonerInfo from './SummonerInfo';
import SummonerTendency from './SummonerTendency';

type Champion = {
  name: string;
  winRate: number;
  gamesPlayed: number;
  KDA: number;
};

type SummonerProps = {
  id: number;
  information: {
    summonerName: string;
    summonerLevel: number;
    summonerIcon: string;
  };
  season: string[];
  tendency: string[];
  lanes: string[];
  champions: Champion[];
};

const SummonerCard: React.FC<{ summoner?: SummonerProps }> = ({ summoner }) => {
  return (
    <>
      <SummonerInfo
        information={summoner?.information}
        lanes={summoner?.lanes}
      />
      <SummonerTendency tendency={summoner?.tendency} />
      <ChampionCardList champions={summoner?.champions} />
    </>
  );
};

export default SummonerCard;
