import { mockServer } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { print } from 'graphql';
// import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { typeDefs } from '../../../graphql/schema';
import { mocks } from '../../../tests/mocks/card/mocks';

import { GET_CARD_DATA } from '~/src/graphql/queries/cardQuery';

const schema = makeExecutableSchema({ typeDefs });
const preserveResolvers = false;
const server = mockServer(schema, mocks, preserveResolvers);

export async function POST() {
  const query =
    typeof GET_CARD_DATA === 'string' ? GET_CARD_DATA : print(GET_CARD_DATA);
  const variables = {};
  // console.log('API Request');
  try {
    const response = await server.query(query, variables);
    // console.log(response);

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
  }
}
