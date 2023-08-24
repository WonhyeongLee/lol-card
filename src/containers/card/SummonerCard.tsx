import React, { useRef } from 'react';

import useCardAnimation from '~/src/hooks/useCardAnimation';

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

const SummonerCard: React.FC<{ summoner: SummonerProps }> = ({ summoner }) => {
  const cardRef = useRef(null);
  useCardAnimation(cardRef);

  return (
    <div className="m-4 flex h-full w-full flex-col items-start justify-start rounded-md bg-white p-4 shadow-lg">
      {/* Section 1: 소환사 아이콘, 레벨, 소환사명, 라인(이미지로) */}
      <div className="mb-4 flex w-full items-end justify-between">
        <div className="flex items-center">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/${summoner.information.summonerIcon}.png`}
            alt={`${summoner.information.summonerName}'s icon`}
            className="mr-4 h-20 w-20"
          />
          <div className="mt-3 flex flex-col items-start">
            <span className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
              {summoner.information.summonerLevel}
            </span>
            <span className="mt-1 text-2xl font-bold">
              {summoner.information.summonerName}
            </span>
          </div>
        </div>
        <div className="h-20 w-20 rounded border-2 border-gray-300"></div>{' '}
        {/* 라인 이미지를 넣을 공간 */}
      </div>

      {/* Section 2: 성향 */}
      <div className="mb-4 flex w-full flex-wrap gap-2">
        {summoner.tendency.map((tend, index) => (
          <span key={index} className="rounded bg-gray-200 px-2 py-1">
            {tend}
          </span>
        ))}
      </div>

      {/* Section 3: 챔피언 카드 리스트 , 카드형태로 변경해야함 */}
      <ul ref={cardRef} className="relative mb-4 ml-36 h-full w-2/3">
        {summoner.champions.map(champion => (
          <li
            key={champion.name}
            className={`absolute flex h-full w-full transform flex-col rounded-md border p-2`}
          >
            {/* 위쪽: 챔피언 이름 */}
            <div className="h-2/3 flex-1 rounded-t-md bg-gray-200 p-2 text-center">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.name}_0.jpg`}
                alt={champion.name}
                className="h-full w-full"
              />
            </div>

            {/* 아래쪽: 승률 및 나머지 정보 */}
            <div className="absolute bottom-0 right-0 flex-1 rounded-b-md bg-gray-300 p-2 text-center">
              Win Rate: {champion.winRate}%, Games Played:{' '}
              {champion.gamesPlayed}, KDA: {champion.KDA}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummonerCard;
