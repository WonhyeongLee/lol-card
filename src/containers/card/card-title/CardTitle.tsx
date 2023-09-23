'use client';
import React, { useEffect } from 'react';

import { gql, useQuery } from '@apollo/client';
import useEmblaCarousel from 'embla-carousel-react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { CardTitleFragment } from '~/src/graphql/fragments';
import { useAppDispatch } from '~/src/redux/hooks';
import { navigateToPage } from '~/src/redux/thunks/navigationToPage';
import { Summoner } from '~/src/types/types';

const GET_CARD_DATA = gql`
  query GetCardData($name: String) {
    summoner(name: $name) {
      id
      information {
        ...CardTitleFragment
      }
    }
  }
  ${CardTitleFragment}
`;

type LolCardQueryResult = {
  summoner: Pick<Summoner, 'id' | 'information'>[];
};

const LolCard = () => {
  const { loading, error, data, refetch } =
    useQuery<LolCardQueryResult>(GET_CARD_DATA);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });

  useEffect(() => {
    refetch();
  }, [refetch, pathname]);

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
    <div className="embla relative min-w-[420px]">
      <div className="embla__viewport m-auto w-3/4 rounded-md" ref={emblaRef}>
        <div className="embla__container h-44 max-w-[520px] gap-1">
          {data?.summoner?.map((summoner, index) => (
            <div
              className="embla__slide items-center justify-center border-4 p-4"
              key={index}
              onClick={() =>
                dispatch(
                  navigateToPage({
                    summonerName: summoner.information.summonerName,
                    router
                  })
                )
              }
            >
              <div className="flex flex-row">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/${summoner.information.summonerIcon}.png`}
                  alt={`${summoner.information.summonerName}'s icon`}
                  className="mr-4 inline-block h-36 w-36 flex-shrink-0"
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
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 transform"
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
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 transform"
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

export default React.memo(LolCard);
