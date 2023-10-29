'use client';
import React, { useRef } from 'react';

import Image from 'next/image';

import useCardAnimation from '~hooks/useCardAnimation';
import { useCardData } from '~hooks/useCardData';
import { Champion } from '~types/types';

const ChampionCardList = () => {
  const ChampionListData: Champion[] | null =
    useCardData<Champion[]>('champions');
  const cardRef = useRef(null);
  useCardAnimation(cardRef);

  const displayedChampions = ChampionListData
    ? ChampionListData.slice(0, 3)
    : Array(3).fill(null);

  return (
    <ul
      ref={cardRef}
      className="relative mx-auto mb-4 h-[60vh] min-h-[60vh] w-2/3 max-w-[365px] max-[440px]:my-2 max-[440px]:mb-0 max-[440px]:h-[90%] max-[440px]:w-full"
    >
      {displayedChampions?.map((champion, index) => (
        <li
          key={champion ? champion.name : index}
          className={`absolute mt-[-0.5rem] flex w-full transform flex-col rounded-md border p-1`}
        >
          <div className="relative h-auto rounded-md bg-gray-200 p-2 text-center">
            {champion ? (
              <div className="relative h-[499px] overflow-hidden">
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.name}_0.jpg`}
                  alt={champion.name}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="empty"
                />
                <div className="absolute bottom-4 left-0 right-0 z-10 flex items-end justify-center pb-2 text-xl font-black text-white">
                  Win Rate: {champion.winRate}%<br /> Games Played:{' '}
                  {champion.gamesPlayed}
                  <br /> KDA: {champion.KDA}
                </div>
              </div>
            ) : (
              <div className="relative h-[499px] overflow-hidden">
                <Image
                  src={`https://i.ibb.co/qBbP7bc/champion-default-Img.png`}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  alt="no_data"
                />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChampionCardList;
