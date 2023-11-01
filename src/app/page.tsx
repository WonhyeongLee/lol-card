import { gql } from '@apollo/client';

import RecentCard from '~/containers/main/recentCard/RecentCard';
import { CardTitleFragment } from '~/graphql/fragments';
import { getClient } from '~/lib/apolloClient';
import SummonerSearchFormContainer from '~containers/main/SummonerSearchFormContainer';

const GET_CARD_DATA = gql`
  query GetCardData($name: String) {
    summoner(name: $name) {
      id
      information {
        ...CardTitleFragment
      }
    }
  }
  ${CardTitleFragment}
`;

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { data } = await getClient().query({ query: GET_CARD_DATA });

  return (
    <main className="flex min-h-screen justify-center">
      <section className="mx-20 flex w-full max-w-screen-lg flex-col items-center justify-center p-8">
        <div className="mb-4 text-center text-4xl font-extrabold">LOL-CARD</div>
        <SummonerSearchFormContainer />
        <span>최근 작성한 롤카드</span>
        <RecentCard recentCardData={data.summoner} />
      </section>
    </main>
  );
}
