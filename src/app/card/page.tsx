'use client';
import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';

export default function Card() {
  const searchParams = useSearchParams();
  const summonerName = searchParams.get('summonerName');
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_CARD_DATA, {
    variables: { name: summonerName },
    skip: !summonerName
  });

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

  return (
    <div>
      Card Page {summonerName} <div></div>
      <button onClick={() => router.push('/')}> 뒤로가기</button>
    </div>
  );
}
