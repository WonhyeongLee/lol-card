import { gql } from '@apollo/client';

import { getSummonerNameValue } from '~/app/_util/getSummonerNameValue';
import RecentCard from '~/containers/main/recentCard/RecentCard';
import { CardTitleFragment } from '~/graphql/fragments';
import { getClient } from '~/lib/apolloClient';
import SummonerSearchFormContainer from '~containers/main/SummonerSearchFormContainer';

const GET_CARD_DATA = gql`
  query GetCardData($names: [String]) {
    summoner(names: $names) {
      id
      information {
        ...CardTitleFragment
      }
    }
  }
  ${CardTitleFragment}
`;

async function fetchRecentCardData() {
  const summonerName = getSummonerNameValue('summonerName');
  const res = await getClient().query({
    query: GET_CARD_DATA,
    variables: { names: summonerName }
  });

  return res;
}
export default async function Home() {
  const { data } = await fetchRecentCardData();

  return (
    <main className="flex min-h-screen justify-center">
      <section className="mx-20 flex w-full max-w-screen-lg flex-col items-center justify-center p-8">
        <div className="mb-4 text-center text-4xl font-extrabold">LOL-CARD</div>
        <div className="relative mb-4 flex w-1/2 min-w-[324px] flex-col">
          <SummonerSearchFormContainer />
        </div>
        {data && data.summoner && data.summoner.length > 0 ? (
          <>
            <span>최근 작성한 롤카드</span>
            <RecentCard recentCardData={data.summoner} />
          </>
        ) : null}
      </section>
    </main>
  );
}
