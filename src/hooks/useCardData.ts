'use client';
import { useParams } from 'next/navigation';

import { useAppSelector } from '~/src/redux/hooks';

export const useCardData = (filterKey: string) => {
  const params = useParams();
  const uuid = params.slug as string;

  const cardData = useAppSelector(
    state => state.summonerReducer.cardData[uuid]
  );

  const filteredData = cardData ? cardData[0][filterKey] : null;

  return filteredData;
};
