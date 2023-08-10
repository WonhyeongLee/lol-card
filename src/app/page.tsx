'use client';
import LolCard from '../containers/card/card-title/CardTitle';

export default function Home() {
  return (
    <main className="bg-[#37474F] min-h-screen flex justify-center">
      <section className="bg-[#f1f3f5] max-w-screen-lg w-full mx-[220px] p-8 flex flex-col items-center">
        <p className="text-4xl font-extrabold mb-4 text-center">LOL-CARD</p>
        <input
          className="border p-2 rounded-lg w-1/2 mb-4"
          placeholder="소환사명을 입력해주세요"
        />
        <LolCard />
      </section>
    </main>
  );
}
