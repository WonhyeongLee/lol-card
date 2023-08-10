'use client';
import React from 'react';

import { useQuery } from '@apollo/client';

import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';

const LolCard = () => {
  const { loading, error, data } = useQuery(GET_CARD_DATA);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { summonerName, summonerLevel, summonerIcon } =
    data.summoner.information;

  return (
    <article className="text-center w-full">
      <p className="text-xl font-semibold mb-2">최근 작성한 롤카드 목록</p>
      <div className="bg-white p-4 rounded-lg shadow w-1/2 overflow-x-auto whitespace-nowrap m-auto">
        <p>소환사명: {summonerName}</p>
        <p>소환사 레벨: {summonerLevel}</p>
        <p>소환사 아이콘: {summonerIcon}</p>
        {/* <ul className="list-none flex">
          <li className="mb-1 mr-4">1</li>
          <li className="mb-1 mr-4">2</li>
          <li className="mb-1 mr-4">3</li>
          <li className="mb-1 mr-4">4</li>
          <li className="mb-1">5</li>
        </ul> */}
      </div>
    </article>
  );
};

export default LolCard;
