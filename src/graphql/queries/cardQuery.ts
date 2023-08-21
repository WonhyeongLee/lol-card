import { gql } from '@apollo/client';

import { CardTitleFragment } from '../fragments';

export const GET_CARD_DATA = gql`
  query GetCardData($name: String) {
    summoner(name: $name) {
      id
      information {
        __typename
        ...CardTitleFragment
      }
      season
      tendency
      lanes
      champions {
        name
        winRate
        gamesPlayed
        KDA
      }
    }
  }
  ${CardTitleFragment}
`;
