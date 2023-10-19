import React from 'react';

import ChampionCardList from './ChampionCardList';
import SummonerInfo from './SummonerInfo';
import SummonerTendency from './SummonerTendency';

const SummonerCard = () => {
  return (
    <>
      <SummonerInfo />
      <SummonerTendency />
      <ChampionCardList />
    </>
  );
};

export default SummonerCard;
