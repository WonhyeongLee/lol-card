import LaneSvg from '~components/LaneImage';
import { useCardData } from '~hooks/useCardData';
import { LaneType } from '~types/types';

const SummonerLane = () => {
  const summonerLaneData: LaneType[] | null = useCardData<LaneType[]>('lanes');
  return (
    <div className="max-w-[440px]:space-x-1 flex space-x-2">
      {summonerLaneData?.map((lane, index) => (
        <div key={index} className="max-[440px]:h-12 max-[440px]:w-12">
          <LaneSvg lane={lane} />
        </div>
      ))}
    </div>
  );
};

export default SummonerLane;
