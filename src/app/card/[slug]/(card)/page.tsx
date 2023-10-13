'use client';
import { useQuery } from '@apollo/client';

import SummonerCard from '~/src/containers/card/SummonerCard';
import CardNav from '~/src/containers/nav/CardNav';
import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';
import { setCardData } from '~/src/redux/features/summonerSlice';
import { useAppSelector, useAppDispatch } from '~/src/redux/hooks';
import { Summoner } from '~/src/types/types';

export default function Card({ params }: { params: { slug: string } }) {
  const uuid = params.slug;
  const summonerName = useAppSelector(
    state => state.summonerReducer.summonerNames[uuid]
  );
  const dispatch = useAppDispatch();

  const { loading, error, data } = useQuery<{ summoner: Summoner[] }>(
    GET_CARD_DATA,
    {
      variables: { name: summonerName },
      skip: !summonerName
    }
  );
  if (data) {
    console.log(data);
    dispatch(setCardData({ uuid, data: data.summoner }));
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section className="relative flex h-auto min-h-[70vh] w-full max-w-[600px] flex-col items-center rounded-md bg-slate-100 p-4 shadow-lg">
        {data?.summoner.map(summoner => (
          <SummonerCard key={summoner.id} summoner={summoner} />
        ))}
        <CardNav />
      </section>
    </>
  );
}
