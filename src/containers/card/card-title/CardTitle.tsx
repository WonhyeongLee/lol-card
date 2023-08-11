'use client';
import React from 'react';

import { useQuery } from '@apollo/client';

import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';

type Information = {
  summonerName: string;
  summonerLevel: number;
  summonerIcon: string;
};

type Summoner = {
  information: Information;
};
const LolCard = () => {
  const { loading, error, data } = useQuery<{ summoner: Summoner[] }>(
    GET_CARD_DATA
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <article className="text-center w-full">
      <p className="text-xl font-semibold mb-2">최근 작성한 롤카드 목록</p>
      <div className="bg-white p-4 rounded-lg shadow w-1/2 overflow-x-auto whitespace-nowrap m-auto">
        {data?.summoner.map((summoner, index) => (
          <div key={index} className="mb-4">
            <p>소환사명: {summoner.information.summonerName}</p>
            <p>소환사 레벨: {summoner.information.summonerLevel}</p>
            <p>소환사 아이콘: {summoner.information.summonerIcon}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default LolCard;
