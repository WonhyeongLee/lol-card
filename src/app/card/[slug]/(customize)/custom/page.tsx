'use client';

import CustomizeChampionList from '~/src/containers/card/CustomizeChampionList';
import CustomizeLane from '~/src/containers/customize/CustomizeLane';
import CustomizeTendency from '~/src/containers/customize/CustomizeTendency';
import { useSlide } from '~/src/hooks/useSlide';

const SECTION_HEIGHT = 640;
const NUM_SECTIONS = 3;

function Custom() {
  const { containerRef, slideUp, slideDown } = useSlide({
    sectionHeight: SECTION_HEIGHT,
    numSections: NUM_SECTIONS
  });

  return (
    <>
      <div className="relative -mx-4 flex h-full min-h-[640px] flex-wrap overflow-hidden bg-red-200 p-4 text-center">
        <div
          ref={containerRef}
          className="absolute left-0 top-0 flex h-[1920px] w-full flex-col gap-12"
        >
          <CustomizeChampionList />

          <div className="h-[640px] w-full">
            <CustomizeLane lanes={['middle', 'utility']} />
          </div>

          <div className="h-[640px] w-full">
            <CustomizeTendency />
          </div>
        </div>
      </div>
      <button
        onClick={slideUp}
        className="absolute bottom-0 left-0 m-4 rounded bg-white p-2"
      >
        Up
      </button>
      <button
        onClick={slideDown}
        className="absolute bottom-0 right-0 m-4 rounded bg-white p-2"
      >
        Down
      </button>
    </>
  );
}

export default Custom;
