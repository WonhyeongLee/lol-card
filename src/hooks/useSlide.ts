'use client';
import { useRef, useState } from 'react';

import gsap from 'gsap';

type UseSlideProps = {
  sectionHeight?: number;
  sectionWidth?: number;
  numSections?: number;
  numHorizontalSections?: number;
};

export const useSlide = ({
  sectionHeight = 0,
  sectionWidth = 0,
  numSections = 0,
  numHorizontalSections = 0
}: UseSlideProps) => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentHorizontalSection, setCurrentHorizontalSection] = useState(0);

  const moveToSection = (
    sectionIndex: number,
    isHorizontal: boolean = false
  ) => {
    if (isHorizontal) {
      const xValue = -sectionWidth * sectionIndex;
      gsap.to(containerRef.current, {
        x: `${xValue}px`,
        duration: 1
      });
      setCurrentHorizontalSection(sectionIndex);
    } else {
      const yValue = -sectionHeight * sectionIndex;
      gsap.to(containerRef.current, { y: `${yValue}px`, duration: 1 });
      setCurrentSection(sectionIndex);
    }
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

  const slideLeft = () => {
    if (currentHorizontalSection > 0) {
      moveToSection(currentHorizontalSection - 1, true);
    }
  };

  const slideRight = () => {
    if (currentHorizontalSection < numHorizontalSections - 1) {
      moveToSection(currentHorizontalSection + 1, true);
    }
  };

  return {
    containerRef,
    slideUp,
    slideDown,
    slideLeft,
    slideRight
  };
};
