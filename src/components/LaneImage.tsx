'use client';
import Image from 'next/image';

type LaneSvgProps = {
  lane: string;
};

const LaneSvg: React.FC<LaneSvgProps> = ({ lane }) => {
  const src = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${lane.toLowerCase()}.png`;
  return <Image src={src} alt={lane} width={60} height={60} />;
};

export default LaneSvg;
