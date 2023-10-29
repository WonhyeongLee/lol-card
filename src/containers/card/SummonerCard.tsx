'use client';
import { useSuspenseQuery } from '@apollo/client';
import { usePathname } from 'next/navigation';

import ChampionCardList from '~containers/card/ChampionCardList';
import SummonerInfo from '~containers/card/SummonerInfo';
import SummonerTendency from '~containers/card/SummonerTendency';
import { GET_CARD_DATA } from '~graphql/queries/cardQuery';
import { setCardData } from '~redux/features/summonerSlice';
import { useAppSelector, useAppDispatch } from '~redux/hooks';
import { Summoner } from '~types/types';

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
