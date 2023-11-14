import { Suspense } from 'react';

import Loading from './Loading';

import SummonerCard from '~containers/card/SummonerCard';

export default function Card() {
  return (
    <>
      <section className="relative flex h-auto min-h-[70vh] w-full max-w-[600px] flex-col items-center rounded-md bg-slate-100 p-4 shadow-lg">
        <Suspense fallback={<Loading />}>
          <SummonerCard />
        </Suspense>
      </section>
    </>
  );
}
