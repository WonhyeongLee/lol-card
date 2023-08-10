export const typeDefs = `
  type Information {
    summonerName: String!
    summonerLevel: Int!
    summonerIcon: String!
  }

  type Champion {
    name: String!
    winRate: Float!
    gamesPlayed: Int!
    KDA: Float!
  }

  type Summoner {
    information: Information!
    season: [String!]!
    tendency: [String!]!
    lanes: [String!]!
    champions: [Champion!]!
  }

  type Query {
    summoner: Summoner!
  }
`;
