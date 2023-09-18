import React from 'react';

import ChampionCardList from '~/src/containers/card/ChampionCardList';
function Custom() {
  return (
    <div className="-mx-4 -mb-10 flex min-h-[640px] flex-wrap bg-red-200 p-4 text-center">
      <div className="absolute left-8 flex flex-col justify-between">
        <span>챔피언</span>
        <span>라인</span>
        <span>성향</span>
      </div>
      <div className="flex items-center justify-center sm:w-1/3">
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
      <div className="flex w-full justify-center px-4 sm:w-2/3">
        <ChampionCardList />
      </div>
    </div>
  );
}

export default Custom;
