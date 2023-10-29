'use client';
import { useParams } from 'next/navigation';

import { useAppSelector } from '~redux/hooks';
import { Summoner } from '~types/types';

export const useCardData = <T>(filterKey: keyof Summoner): T | null => {
  const params = useParams();
  const uuid = params.slug as string;

  const cardData: Summoner[] | undefined = useAppSelector(
    state => state.summonerReducer.cardData[uuid]
  );

  const filteredData: T | null = cardData
    ? (cardData[0][filterKey] as T)
    : null;

  return filteredData;
};
