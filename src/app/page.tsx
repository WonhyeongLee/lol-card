'use client';
import { useState, useCallback, useEffect } from 'react';

import _ from 'lodash';

import LolCard from '../containers/card/card-title/CardTitle';

export default function Home() {
  const [summonerName, setSummonerName] = useState<string>('');

  const debouncedSearch = useCallback(
    _.debounce((query: string) => {
      console.log(`소환자검색 :  ${query}`);
    }, 1000),
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSummonerName(value);

    if (value.trim() === '') {
      debouncedSearch.cancel();
    } else {
      debouncedSearch(value);
    }
  };

  useEffect(() => {
    console.log(summonerName);
  }, [summonerName]);

  return (
    <main className="flex min-h-screen justify-center">
      <section className="mx-[220px] flex w-full max-w-screen-lg flex-col items-center justify-center p-8">
        <p className="mb-4 text-center text-4xl font-extrabold">LOL-CARD</p>
        <input
          className="mb-4 w-1/2 min-w-[200px] rounded-lg border p-2 text-center placeholder-opacity-0 focus:placeholder-opacity-0"
          placeholder="소환사명을 입력해주세요"
          value={summonerName}
          onChange={handleInputChange}
        />
        <span>최근 작성한 롤카드</span>
        <LolCard />
      </section>
    </main>
  );
}
