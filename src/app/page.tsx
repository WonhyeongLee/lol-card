'use client';
import LolCard from '../containers/card/card-title/CardTitle';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <section className="max-w-screen-lg w-full mx-[220px] p-8 flex flex-col items-center justify-center">
        <p className="text-4xl font-extrabold mb-4 text-center">LOL-CARD</p>
        <input
          className="border p-2 rounded-lg w-1/2 min-w-[200px] mb-4 text-center"
          placeholder="소환사명을 입력해주세요"
        />
        <span>최근 작성한 롤카드</span>
        <LolCard />
      </section>
    </main>
  );
}
