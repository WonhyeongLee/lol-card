'use client';
import { useRouter } from 'next/navigation';

import SummonerCardSummary from './SummonerCardSummary';

import { deleteSummonerNameFromCookie } from '~/app/_util/deleteSummonerNameFromCookie';
import { useSlide } from '~/hooks/useSlide';
import { useAppDispatch } from '~redux/hooks';
import { navigateToPage } from '~redux/thunks/navigationToPage';
import { Summoner } from '~types/types';

const SECTION_WIDTH = 420;
const NUM_HORIZONTAL_SECTIONS = 3;

type RecentCardProps = {
  recentCardData: Summoner[];
};

const RecentCard: React.FC<RecentCardProps> = ({ recentCardData }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const numSections = recentCardData.length || NUM_HORIZONTAL_SECTIONS;

  const { containerRef, slideRight, slideLeft } = useSlide({
    sectionWidth: SECTION_WIDTH,
    numHorizontalSections: numSections
  });

  const handleCardClick = (summonerName: string) => {
    dispatch(navigateToPage({ summonerName, router }));
  };
  return (
    <>
      <div className="relative mx-auto w-1/2 min-w-[420px] p-4 text-center">
        <button
          onClick={() => slideLeft()}
          className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 transform"
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
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex min-w-[1260px] flex-row overflow-hidden"
          >
            {recentCardData.map(summoner => (
              <>
                <SummonerCardSummary
                  key={summoner.id}
                  information={summoner.information}
                  onCardClick={handleCardClick}
                />
                <div
                  className="absolute right-0 h-6 w-6"
                  onClick={() => {
                    deleteSummonerNameFromCookie(
                      summoner.information.summonerName
                    );
                    router.refresh();
                  }}
                >
                  <button>X</button>
                </div>
              </>
            ))}
          </div>
        </div>
        <button
          onClick={() => slideRight()}
          className="absolute -right-6 top-1/2 z-10 -translate-y-1/2 transform"
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
    </>
  );
};

export default RecentCard;
