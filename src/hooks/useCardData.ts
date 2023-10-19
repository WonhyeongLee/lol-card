'use client';
import { useParams } from 'next/navigation';

import { Summoner } from '../types/types';

import { useAppSelector } from '~/src/redux/hooks';

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
