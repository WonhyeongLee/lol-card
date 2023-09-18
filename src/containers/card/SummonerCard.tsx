'use client';
import React from 'react';

import ChampionCardList from './ChampionCardList';

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
    <div className="relative m-4 flex h-full w-full flex-col items-start justify-start rounded-md bg-white p-4 shadow-lg">
      {/* Section 1: 소환사 아이콘, 레벨, 소환사명, 라인(이미지로) */}
      <div className="mb-4 flex w-full items-center justify-between max-[440px]:mb-2">
        <div className="flex flex-shrink-0 items-center md:mb-0">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/${summoner?.information.summonerIcon}.png`}
            alt={`${summoner?.information.summonerName}'s icon`}
            className="mr-4 h-20 w-20 max-[440px]:h-12 max-[440px]:w-12"
          />
          <div className="mt-3 flex flex-col items-start max-[440px]:mt-0">
            <span className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white max-[440px]:px-2 max-[440px]:text-xs">
              {summoner?.information.summonerLevel}
            </span>
            <span className="mt-1 text-2xl font-bold max-[440px]:text-base">
              {summoner?.information.summonerName}
            </span>
          </div>
        </div>
        {/* 라인 section */}
        <div className="max-w-[440px]:space-x-1 flex space-x-2">
          {summoner?.lanes.map((lane, index) => (
            <div
              key={index}
              className="h-20 w-20 rounded max-[440px]:h-12 max-[440px]:w-12"
            >
              <img
                src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${lane.toLowerCase()}.png`}
                alt={`${lane.toLowerCase()} position icon`}
                className="h-auto w-full max-[440px]:h-12 max-[440px]:w-12"
              />
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
};

export default SummonerCard;
