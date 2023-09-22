'use client';
import React from 'react';

import ChampionCardList from './ChampionCardList';
import SummonerInfo from './SummonerInfo';
import SummonerTendency from './SummonerTendency';

import { Summoner } from '~/src/types/types';

type SummonerProps = Pick<
  Summoner,
  'id' | 'information' | 'season' | 'tendency' | 'lanes' | 'champions'
>;

const SummonerCard: React.FC<{ summoner?: SummonerProps }> = ({ summoner }) => {
  return (
    <>
      <SummonerInfo
        information={summoner?.information}
        lanes={summoner?.lanes}
      />
      <SummonerTendency tendency={summoner?.tendency || []} />
      <ChampionCardList champions={summoner?.champions} />
    </>
  );
};

export default SummonerCard;
