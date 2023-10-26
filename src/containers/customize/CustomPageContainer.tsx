'use client';
import CustomizeCard from '~/src/containers/customize/CustomizeCard';
import { useSlide } from '~/src/hooks/useSlide';

const SECTION_HEIGHT = 640;
const NUM_SECTIONS = 3;

const CustomPageContainer = () => {
  const { containerRef, slideUp, slideDown } = useSlide({
    sectionHeight: SECTION_HEIGHT,
    numSections: NUM_SECTIONS
  });

  return (
    <CustomizeCard
      containerRef={containerRef}
      slideUp={slideUp}
      slideDown={slideDown}
    />
  );
};

export default CustomPageContainer;
