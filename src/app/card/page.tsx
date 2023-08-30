'use client';
import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
// import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import SummonerCard from '~/src/containers/card/SummonerCard';
import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';

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

export default function Card({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);

  // const searchParams = useSearchParams();
  // const summonerName = searchParams.get('summonerName') as string;
  const summonerName = '';
  const router = useRouter();

  const { loading, error, data } = useQuery<{ summoner: Summoner[] }>(
    GET_CARD_DATA,
    {
      variables: { name: summonerName },
      skip: !summonerName
    }
  );

  useEffect(() => {
    console.log(data?.summoner);
    console.log(summonerName);
  }, [data]);

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
    <section className="flex min-h-[800px] w-full max-w-[600px] flex-col items-center">
      {filteredSummoner?.map(summoner => (
        <SummonerCard key={summoner.id} summoner={summoner} />
      ))}
      <button onClick={() => router.push('/')}> 뒤로가기</button>
    </section>
  );
}
