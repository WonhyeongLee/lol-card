import LolCard from '~containers/card/card-title/CardTitle';
import SummonerSearchFormContainer from '~containers/main/SummonerSearchFormContainer';

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <section className="mx-20 flex w-full max-w-screen-lg flex-col items-center justify-center p-8">
        <div className="mb-4 text-center text-4xl font-extrabold">LOL-CARD</div>
        <SummonerSearchFormContainer />
        <span>최근 작성한 롤카드</span>
        <LolCard />
      </section>
    </main>
  );
}
