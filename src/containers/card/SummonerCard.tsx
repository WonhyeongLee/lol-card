'use client';
import { useSuspenseQuery } from '@apollo/client';
import { usePathname } from 'next/navigation';

import ChampionCardList from './ChampionCardList';
import SummonerInfo from './SummonerInfo';
import SummonerTendency from './SummonerTendency';

import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';
import { setCardData } from '~/src/redux/features/summonerSlice';
import { useAppSelector, useAppDispatch } from '~/src/redux/hooks';
import { Summoner } from '~/src/types/types';

const SummonerCard = () => {
  const pathname = usePathname();
  const uuid = pathname.split('/').pop() as string;

  const summonerName = useAppSelector(
    state => state.summonerReducer.summonerNames[uuid]
  );
  const dispatch = useAppDispatch();

  const { data } = useSuspenseQuery<{ summoner: Summoner[] }>(GET_CARD_DATA, {
    variables: { name: summonerName }
  });

  if (data) {
    dispatch(setCardData({ uuid, data: data.summoner }));
  }

  return (
    <>
      <SummonerInfo />
      <SummonerTendency />
      <ChampionCardList />
    </>
  );
};

export default SummonerCard;
