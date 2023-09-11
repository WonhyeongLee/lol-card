import React from 'react';

import { useRouter } from 'next/navigation';

const CardNav = () => {
  const router = useRouter();

  return (
    <article className="absolute bottom-0 flex h-14 flex-row gap-4 rounded-md rounded-b-md bg-red-300 px-1 py-2 shadow-lg md:left-[-5rem] md:top-4 md:h-1/5 md:flex-col md:py-4 md:transition-all md:duration-300 md:ease-in-out">
      <button onClick={() => router.push('/')}> 뒤로가기</button>
      <button onClick={() => router.push('/')}> 뒤로가기</button>
      <button onClick={() => router.push('/')}> 뒤로가기</button>
    </article>
  );
};

export default CardNav;
