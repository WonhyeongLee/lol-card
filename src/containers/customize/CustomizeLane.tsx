'use client';
import LaneSvg from '~/src/components/LaneImage';

type LaneType = 'fill' | 'bottom' | 'jungle' | 'middle' | 'utility' | 'top';

type CustomizeLaneProps = {
  lanes: LaneType[];
};

const allLanes: LaneType[] = [
  'fill',
  'top',
  'jungle',
  'middle',
  'bottom',
  'utility'
];

const CustomizeLane: React.FC<CustomizeLaneProps> = ({ lanes }) => {
  const handleLaneClick = () => {
    console.log('lane clicked');
  };

  return (
    <div>
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
