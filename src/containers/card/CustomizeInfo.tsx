import React from 'react';

type Information = {
  summonerName: string;
  summonerLevel: number;
  summonerIcon: string;
};

type Lane = string;

type CustomizeInfoProps = {
  information?: Information;
  lanes?: Lane[];
};

const CustomizeInfo: React.FC<CustomizeInfoProps> = ({
  information = { summonerName: '', summonerLevel: 0, summonerIcon: '' },
  lanes = []
}) => {
  return (
    <div className="mb-4 flex w-full items-center justify-between max-[440px]:mb-2">
      <div className="flex flex-shrink-0 items-center md:mb-0">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/${information?.summonerIcon}.png`}
          alt={`${information?.summonerName}'s icon`}
          className="mr-4 h-20 w-20 max-[440px]:h-12 max-[440px]:w-12"
        />
        <div className="mt-3 flex flex-col items-start max-[440px]:mt-0">
          <span className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white max-[440px]:px-2 max-[440px]:text-xs">
            {information?.summonerLevel}
          </span>
          <span className="mt-1 text-2xl font-bold max-[440px]:text-base">
            {information?.summonerName}
          </span>
        </div>
      </div>
      {/* 라인 section */}
      <div className="max-w-[440px]:space-x-1 flex space-x-2">
        {lanes?.map((lane, index) => (
          <div
            key={index}
            className="h-20 w-20 rounded max-[440px]:h-12 max-[440px]:w-12"
          >
            <img
              src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${lane.toLowerCase()}.png`}
              alt={`${lane.toLowerCase()} position icon`}
              className="h-auto w-full max-[440px]:h-12 max-[440px]:w-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizeInfo;
