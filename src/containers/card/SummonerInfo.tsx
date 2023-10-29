'use client';
import SummonerLane from '~containers/card/SummonerLane';
import { useCardData } from '~hooks/useCardData';
import { Information } from '~types/types';

const SummonerInfo = () => {
  const summonerInfoData: Information | null =
    useCardData<Information>('information');

  const imgUrl: string = `https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/${summonerInfoData?.summonerIcon}.png`;
  const imgAlt: string = `${summonerInfoData?.summonerName}'s icon`;

  return (
    <div className="mb-4 flex w-full items-center justify-between max-[440px]:mb-2">
      <div className="flex flex-shrink-0 items-center md:mb-0">
        <img
          src={imgUrl}
          alt={imgAlt}
          className="mr-4 h-20 w-20 max-[440px]:h-12 max-[440px]:w-12"
        />
        <div className="mt-3 flex flex-col items-start max-[440px]:mt-0">
          <span className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white max-[440px]:px-2 max-[440px]:text-xs">
            {summonerInfoData?.summonerLevel}
          </span>
          <span className="mt-1 text-2xl font-bold max-[440px]:text-base">
            {summonerInfoData?.summonerName}
          </span>
        </div>
      </div>
      <SummonerLane />
    </div>
  );
};

export default SummonerInfo;
