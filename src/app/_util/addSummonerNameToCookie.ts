import Cookies from 'js-cookie';

export const addSummonerNameToCookie = (summonerName: string): void => {
  const summonerNames = Cookies.get('summonerName');
  const summonerNameArray = summonerNames ? summonerNames.split(',') : [];
  summonerNameArray.unshift(summonerName);
  Cookies.set('summonerName', summonerNameArray.join(','));
};
