import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
// import { print } from 'graphql';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { NextApiRequest } from 'next';
// import { NextResponse } from 'next/server';

import { typeDefs } from '../../../graphql/schema';
import { mocks, mockData } from '../../../tests/mocks/card/mocks';

import { apiToInternalMapping, Champion } from '~/src/types/types';
// import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';

type SummonerArgs = {
  name?: string;
};

let globalData = [...mockData];

const searchedData = {
  id: 4,
  information: {
    summonerName: '말비나33',
    summonerLevel: 33,
    summonerIcon: '4122'
  },
  season: ['2020', '2021', '2022'],
  tendency: ['갱킹선호', '초중반지향', '캐리형'],
  lanes: ['MID', 'TOP'],
  champions: [
    { name: 'Yasuo', winRate: 55.5, gamesPlayed: 120, KDA: 3.2 },
    { name: 'Zed', winRate: 60.0, gamesPlayed: 100, KDA: 4.1 },
    { name: 'Aatrox', winRate: 50.0, gamesPlayed: 90, KDA: 2.8 }
  ]
};

const convertLanes = (lanes: string[]): string[] => {
  return lanes.map(lane => apiToInternalMapping[lane.toUpperCase()]);
};

const sortChampionsByGamesPlayed = (champions: Champion[]) => {
  return champions.sort((a, b) => b.gamesPlayed - a.gamesPlayed);
};

const resolvers = {
  Query: {
    summoner: (_: any, args: SummonerArgs) => {
      if (
        args.name === '말비나33' &&
        !globalData.some(data => data.id === searchedData.id)
      ) {
        globalData = [searchedData, ...globalData];
      }

      if (!args.name) {
        globalData.forEach(summoner => {
          if (summoner.champions) {
            sortChampionsByGamesPlayed(summoner.champions);
          }
        });
        return globalData;
      }

      return globalData
        .filter(summoner => summoner.information.summonerName === args.name)
        .map(summoner => ({
          ...summoner,
          lanes: summoner.lanes ? convertLanes(summoner.lanes) : [],
          champions: summoner.champions
            ? sortChampionsByGamesPlayed(summoner.champions)
            : []
        }));
    }
  }
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true
  })
});

// export async function POST(req: Request) {
//   const data = await req.json();
//   console.log(data.variables.name);

//   const query =
//     typeof GET_CARD_DATA === 'string' ? GET_CARD_DATA : print(GET_CARD_DATA);

//   try {
//     const response = await server.executeOperation({
//       query: query,
//       variables: { name: data.variables.name }
//     });
//     console.log(response);

//     return NextResponse.json(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
