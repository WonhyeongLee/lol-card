import Cookies from 'js-cookie';

export const deleteSummonerNameFromCookie = (
  summonerNameToRemove: string
): void => {
  const summonerNameValue = Cookies.get('summonerName');
  if (!summonerNameValue) {
    return;
  }

  const summonerNames = summonerNameValue.split(',');

  const updatedSummonerNames = summonerNames.filter(
    name => name !== summonerNameToRemove
  );

  Cookies.set('summonerName', updatedSummonerNames.join(','), { path: '/' });
};
