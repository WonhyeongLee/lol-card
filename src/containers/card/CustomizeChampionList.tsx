import React from 'react';

import ChampionCardList from './ChampionCardList';

const CustomizeChampionList = () => {
  return (
    <div className="flex w-full">
      <div className="flex h-full items-center justify-center sm:w-1/3">
        <div className="mx-auto box-content grid grid-cols-3 grid-rows-5 justify-items-center gap-3 ">
          <div className="h-16 w-16 overflow-hidden border-solid border-black">
            <img className="h-full w-full object-cover object-center" />
          </div>
          <div className="h-16 w-16 border-solid border-black">
            <img className="h-full w-full object-cover object-center" />
          </div>
          <div className="h-16 w-16 border-solid border-black">
            <img className="h-full w-full object-cover object-center" />
          </div>
          <div className="h-16 w-16 border-solid border-black">
            <img className="h-full w-full object-cover object-center" />
          </div>
          <div className="h-16 w-16 border-solid border-black">
            <img className="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex h-full w-full items-center justify-center px-4 sm:w-2/3">
        <ChampionCardList />
      </div>
    </div>
  );
};

export default CustomizeChampionList;
