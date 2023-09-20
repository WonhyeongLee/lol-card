import React from 'react';

type SummonerTendencyProps = {
  tendency?: string[];
};

const SummonerTendency: React.FC<SummonerTendencyProps> = ({
  tendency = []
}) => {
  return (
    <div className="mb-4 flex w-full flex-wrap gap-2 max-[440px]:mb-0">
      {tendency.map((tend, index) => (
        <span key={index} className="rounded bg-gray-200 px-2 py-1">
          {tend}
        </span>
      ))}
    </div>
  );
};

export default SummonerTendency;
