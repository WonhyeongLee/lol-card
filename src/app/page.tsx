'use client';
import { useState, useCallback, FormEvent, ChangeEvent } from 'react';

import _ from 'lodash';
import { useRouter } from 'next/navigation';

import LolCard from '../containers/card/card-title/CardTitle';
import { useAppDispatch } from '../redux/hooks';
import { navigateToPage } from '../redux/thunks/navigationToPage';

export default function Home() {
  const [inputSummonerName, setInputSummonerName] = useState<string>('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const debouncedSearch = useCallback(
    _.debounce((query: string) => {
      console.log(`소환자검색 :  ${query}`);
    }, 1000),
    []
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputSummonerName(value);

    if (value.trim() === '') {
      debouncedSearch.cancel();
    } else {
      debouncedSearch(value);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    dispatch(navigateToPage({ summonerName: inputSummonerName, router }));
    // dispatch(setSummonerName(inputSummonerName));
    // const href = `/card?uuid=${uuid}`;
    // router.push(href);
    // router.push(`/card?summonerName=${inputSummonerName}`);
  };

  return (
    <main className="flex min-h-screen justify-center">
      <section className="mx-[220px] flex w-full max-w-screen-lg flex-col items-center justify-center p-8">
        <p className="mb-4 text-center text-4xl font-extrabold">LOL-CARD</p>
        <form className="w-full text-center" onSubmit={handleSubmit}>
          <input
            className="m-auto mb-4 w-2/3 min-w-[200px] rounded-lg border p-2 text-center placeholder-opacity-0 focus:placeholder-opacity-0"
            placeholder="소환사명을 입력해주세요"
            value={inputSummonerName}
            onChange={handleInputChange}
          />
          <button type="submit" className="hidden">
            Submit
          </button>
        </form>
        <span>최근 작성한 롤카드</span>
        <LolCard />
      </section>
    </main>
  );
}
