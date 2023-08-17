'use client';
import LolCard from '../containers/card/card-title/CardTitle';

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <section className="mx-[220px] flex w-full max-w-screen-lg flex-col items-center justify-center p-8">
        <p className="mb-4 text-center text-4xl font-extrabold">LOL-CARD</p>
        <input
          className="mb-4 w-1/2 min-w-[200px] rounded-lg border p-2 text-center placeholder-opacity-0 focus:placeholder-opacity-0"
          placeholder="소환사명을 입력해주세요"
        />
        <span>최근 작성한 롤카드</span>
        <LolCard />
      </section>
    </main>
  );
}
