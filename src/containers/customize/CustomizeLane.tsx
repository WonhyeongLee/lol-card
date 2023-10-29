'use client';
import LaneSvg from '~components/LaneImage';
import { LaneType } from '~types/types';

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
  return (
    <>
      <div className="flex">
        {lanes.map((lane, index) => (
          <div key={index}>
            <LaneSvg lane={lane} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {allLanes.map((lane, index) => (
          <div key={index}>
            <LaneSvg lane={lane} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomizeLane;
