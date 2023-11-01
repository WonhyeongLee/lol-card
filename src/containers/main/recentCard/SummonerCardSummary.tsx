// 'use client';
import { Information } from '~types/types';

type SummonerCardSummaryProps = {
  information: Information;
  onCardClick: (summonerName: string) => void;
};

const SummonerCardSummary: React.FC<SummonerCardSummaryProps> = ({
  information,
  onCardClick
}) => {
  return (
    <>
      <section
        className="flex min-w-[420px] flex-row"
        onClick={() => onCardClick(information.summonerName)}
      >
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/${information.summonerIcon}.png`}
          alt={`${information.summonerName}'s icon`}
          className="mr-4 inline-block h-36 w-36 flex-shrink-0"
        />
        <div className="flex-grow">
          <div className="mb-2 text-xl">{information.summonerName}</div>
          <div className="mb-2 text-4xl font-extrabold">
            {information.summonerLevel}
          </div>
        </div>
      </section>
    </>
  );
};

export default SummonerCardSummary;
