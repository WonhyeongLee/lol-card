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
      emblaApi.on('select', () => {
        console.log(`Current slide index: ${emblaApi.selectedScrollSnap()}`);
      });
      emblaApi.reInit();
    }
  }, [emblaApi, data]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data?.summoner?.length) {
    return <p>작성된 롤카드가 없습니다.</p>;
  }

  return (
    <div className="embla relative w-2/3">
      <div className="embla__viewport rounded-md w-3/4 m-auto" ref={emblaRef}>
        <div className="embla__container h-44 gap-1">
          {data?.summoner?.map((summoner, index) => (
            <div
              className="embla__slide border-4 items-center p-4 justify-center"
              key={index}
            >
              <div className="flex flex-row">
                <img
                  src={summoner.information.summonerIcon}
                  alt={`${summoner.information.summonerName}'s icon`}
                  className="mr-4 w-36 h-36 inline-block flex-shrink-0"
                />
                <div className="flex-grow">
                  {' '}
                  <p className="mb-2 text-xl">
                    {summoner.information.summonerLevel}
                  </p>
                  <p className="mb-2 text-4xl font-extrabold">
                    {summoner.information.summonerName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 18L8 12L16 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 6L16 12L8 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LolCard;
