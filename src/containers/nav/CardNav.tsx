'use client';
import React from 'react';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const CardNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <article className="absolute bottom-16 z-20 flex-row gap-4 rounded-md rounded-b-md bg-red-100 px-2 py-2 shadow-lg ">
      <div className="flex justify-center gap-4">
        <Link href="/" onClick={handleRefresh}>
          홈으로
        </Link>
        <Link href={`${pathname}/custom`}>커스텀</Link>
      </div>
    </article>
  );
};

export default CardNav;
