'use client';
import { useQuery } from '@apollo/client';

import SummonerCard from '~/src/containers/card/SummonerCard';
import CardNav from '~/src/containers/nav/CardNav';
import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';
import { useAppSelector } from '~/src/redux/hooks';

type Information = {
  summonerName: string;
  summonerLevel: number;
  summonerIcon: string;
};

type Champion = {
  name: string;
  winRate: number;
  gamesPlayed: number;
  KDA: number;
};
type Summoner = {
  id: number;
  information: Information;
  season: string[];
  tendency: string[];
  lanes: string[];
  champions: Champion[];
};

export default function Card({ params }: { params: { slug: string } }) {
  const uuid = params.slug;
  const summonerName = useAppSelector(
    state => state.summonerReducer.summonerNames[uuid]
  );

  const { loading, error, data } = useQuery<{ summoner: Summoner[] }>(
    GET_CARD_DATA,
    {
      variables: { name: summonerName },
      skip: !summonerName
    }
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredSummoner = data?.summoner?.filter(
    summoner => summoner.information.summonerName === summonerName
  );

  return (
    <>
      <section className="relative flex h-full w-full max-w-[600px] flex-col items-center">
        {filteredSummoner?.map(summoner => (
          <SummonerCard key={summoner.id} summoner={summoner} />
        ))}
        <CardNav />
      </section>
    </>
  );
}