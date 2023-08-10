import { gql } from '@apollo/client';

export const CardTitleFragment = gql`
  fragment CardTitleFragment on Information {
    summonerName
    summonerLevel
    summonerIcon
  }
`;
