import { cookies } from 'next/headers';

export const getSummonerNameValue = (key: string): string[] => {
  const summonerNameValue = cookies().get(key)?.value;
  return summonerNameValue ? summonerNameValue.split(',') : [];
};
