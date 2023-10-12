'use client';
import React, { useRef, useState } from 'react';

import gsap from 'gsap';

import CustomizeChampionList from '~/src/containers/card/CustomizeChampionList';
import CustomizeLane from '~/src/containers/customize/CustomizeLane';
import CustomizeTendency from '~/src/containers/customize/CustomizeTendency';
function Custom() {
  const containerRef = useRef(null);
  const sectionHeight = 640; // 섹션 높이
  const numSections = 3; // 섹션 개수
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 인덱스

  // 섹션 이동 함수
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
