import React from 'react';

import ChampionCardList from './ChampionCardList';

const CustomizeChampionList = () => {
  return (
    <>
      <div className="flex h-1/5 sm:h-full sm:w-1/3">
        <div className="mx-auto box-content flex justify-items-center gap-3 overflow-x-auto sm:grid sm:grid-cols-3 sm:grid-rows-5 sm:items-center sm:justify-items-center sm:overflow-visible">
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
      <div className="mt-4 flex h-4/5 w-full items-center justify-center px-4 sm:h-full sm:w-2/3">
        <ChampionCardList />
      </div>
    </>
  );
};

export default CustomizeChampionList;
