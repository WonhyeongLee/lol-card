'use client';
import React, { useRef } from 'react';

import gsap from 'gsap';

import CustomizeChampionList from '~/src/containers/card/CustomizeChampionList';
import CustomizeLane from '~/src/containers/customize/CustomizeLane';
function Custom() {
  const containerRef = useRef(null);

  const slideUp = () => {
    gsap.to(containerRef.current, { y: '0%', duration: 1 });
  };

  const slideDown = () => {
    gsap.to(containerRef.current, { y: '-100%', duration: 1 });
  };

  return (
    <>
      <div className="relative -mx-4 flex h-full min-h-[640px] flex-wrap overflow-hidden bg-red-200 p-4 text-center">
        <div
          ref={containerRef}
          className="absolute left-0 top-0 flex h-full w-full flex-col gap-12"
        >
          <CustomizeChampionList />
          <CustomizeLane lanes={['middle', 'utility']} />
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
