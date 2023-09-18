'use client';
import React, { useRef } from 'react';

import Image from 'next/image';

import useCardAnimation from '~/src/hooks/useCardAnimation';

type Champion = {
  name: string;
  winRate: number;
  gamesPlayed: number;
  KDA: number;
};

const ChampionCardList: React.FC<{ champions?: Champion[] }> = ({
  champions
}) => {
  const cardRef = useRef(null);
  useCardAnimation(cardRef);
  return (
    <ul
      ref={cardRef}
      className="relative mx-auto mb-4 h-full w-2/3 max-w-[365px] max-[440px]:mb-0 max-[440px]:h-[90%] max-[440px]:w-full"
    >
      {(champions || Array(3).fill(null)).map((champion, index) => (
        <li
          key={champion ? champion.name : index}
          className={`absolute mt-[-0.5rem] flex w-full transform flex-col rounded-md border p-1`}
        >
          <div className="fade-bottom relative rounded-t-md bg-gray-200 p-2 text-center">
            {champion ? (
              <>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.name}_0.jpg`}
                  alt={champion.name}
                  className="h-full w-full"
                />
                <div className="absolute bottom-4 left-0 right-0 z-10 flex items-end justify-center pb-2 text-xl font-black text-white">
                  Win Rate: {champion.winRate}%<br /> Games Played:{' '}
                  {champion.gamesPlayed}
                  <br /> KDA: {champion.KDA}
                </div>
              </>
            ) : (
              <div>
                <Image
                  src={`https://i.ibb.co/qBbP7bc/champion-default-Img.png`}
                  width={365}
                  height={609}
                  alt="default"
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
