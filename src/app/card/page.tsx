'use client';
import { useSearchParams } from 'next/navigation';

export default function Card() {
  const searchParams = useSearchParams();
  const summonerName = searchParams.get('summonerName');

  return <div>Card Page {summonerName}</div>;
}
