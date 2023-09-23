'use client';
import LaneSvg from '~/src/components/LaneImage';
import { LaneType } from '~/src/types/types';

type CustomizeLaneProps = {
  lanes: LaneType[];
};

const allLanes: LaneType[] = [
  'fill',
  'bottom',
  'jungle',
  'middle',
  'utility',
  'top'
];

const CustomizeLane: React.FC<CustomizeLaneProps> = ({ lanes }) => {
  const handleLaneClick = () => {
    console.log('lane clicked');
  };

  return (
    <div className="h-full w-full">
      <div className="flex">
        {lanes.map((lane, index) => (
          <div key={index}>
            <LaneSvg lane={lane} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {allLanes.map((lane, index) => (
          <div key={index} onClick={() => handleLaneClick()}>
            <LaneSvg lane={lane} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizeLane;
