'use client';
import React from 'react';

import ChampionCardList from './ChampionCardList';
import CustomizeInfo from './CustomizeInfo';

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
      <CustomizeInfo
        information={summoner?.information}
        lanes={summoner?.lanes}
      />
      {/* Section 2: 성향 */}
      <div className="mb-4 flex w-full flex-wrap gap-2 max-[440px]:mb-0">
        {summoner?.tendency.map((tend, index) => (
          <span key={index} className="rounded bg-gray-200 px-2 py-1">
            {tend}
          </span>
        ))}
      </div>

      {/* Section 3: 챔피언 카드 리스트 , 카드형태로 변경해야함 */}
      <ChampionCardList champions={summoner?.champions} />
    </>
  );
};

export default SummonerCard;
