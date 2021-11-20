import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground,  } from 'apollo-server-core'
import { schema } from '../../schema';
import { context } from '../../schema/context';


const server = new ApolloServer({
  schema,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
})

const startServer = server.start();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

  await startServer;
  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};