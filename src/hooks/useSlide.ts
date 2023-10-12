import { useRef, useState } from 'react';

import gsap from 'gsap';

type UseSlideProps = {
  sectionHeight: number;
  numSections: number;
};

export const useSlide = ({ sectionHeight, numSections }: UseSlideProps) => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);

  const moveToSection = (sectionIndex: number) => {
    const yValue = -sectionHeight * sectionIndex;
    gsap.to(containerRef.current, { y: `${yValue}px`, duration: 1 });
    setCurrentSection(sectionIndex);
  };

  const slideUp = () => {
    if (currentSection > 0) {
      moveToSection(currentSection - 1);
    }
  };

  const slideDown = () => {
    if (currentSection < numSections - 1) {
      moveToSection(currentSection + 1);
    }
  };

  return {
    containerRef,
    slideUp,
    slideDown
  };
};
