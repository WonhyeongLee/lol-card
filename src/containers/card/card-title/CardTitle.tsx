'use client';
import React, { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import useEmblaCarousel from 'embla-carousel-react';

import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';

type Information = {
  summonerName: string;
  summonerLevel: number;
  summonerIcon: string;
};

type Summoner = {
  information: Information;
};
const LolCard = () => {
  const { loading, error, data } = useQuery<{ summoner: Summoner[] }>(
    GET_CARD_DATA
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });

  useEffect(() => {
    if (emblaApi) {
      // 슬라이드가 변경될 때마다 호출되는 콜백을 설정합니다.
      emblaApi.on('select', () => {
        console.log(`Current slide index: ${emblaApi.selectedScrollSnap()}`);
      });
      emblaApi.reInit();
    }
  }, [emblaApi, data]);

  const scrollPrev = () => {
    console.log('prev');

    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data?.summoner || data.summoner.length === 0) {
    return <p>작성된 롤카드가 없습니다.</p>;
  }

  return (
    <div className="max-w-screen-lg mx-[220px]">
      <div className="embla p-4 overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex ml-[calc(var(--slide-spacing)*-1)]">
          {data?.summoner?.map((summoner, index) => (
            <div
              className="embla__slide flex-none pl-[var(--slide-spacing)] relative w-full"
              key={index}
            >
              <p>소환사명: {summoner.information.summonerName}</p>
              <p>소환사 레벨: {summoner.information.summonerLevel}</p>
              <p>소환사 아이콘: {summoner.information.summonerIcon}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollPrev}>Prev</button>
      <button onClick={scrollNext}>Next</button>
    </div>
  );
};

export default LolCard;
