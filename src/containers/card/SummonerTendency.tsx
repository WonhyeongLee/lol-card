'use client';
import { useCardData } from '~hooks/useCardData';
import { Summoner } from '~types/types';

const SummonerTendency = () => {
  const SummonerTendencyData: Summoner['tendency'] | null =
    useCardData<Summoner['tendency']>('tendency');
  return (
    <div className="mb-4 flex w-full flex-wrap gap-2 max-[440px]:mb-0">
      {SummonerTendencyData?.map((tend, index) => (
        <span key={index} className="rounded bg-gray-200 px-2 py-1">
          {tend}
        </span>
      ))}
    </div>
  );
};

export default SummonerTendency;
