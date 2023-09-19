import React from 'react';

import CustomizeChampionList from '~/src/containers/card/CustomizeChampionList';
function Custom() {
  return (
    <div className="-mx-4 -mb-10 flex min-h-[640px] flex-wrap bg-red-200 p-4 text-center">
      <div className="absolute left-8 flex flex-col justify-between">
        <span>챔피언</span>
        <span>라인</span>
        <span>성향</span>
      </div>
      <CustomizeChampionList />
    </div>
  );
}

export default Custom;
