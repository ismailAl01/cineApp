import 'reflect-metadata';
import 'dotenv-safe/config';

import express from 'express';
import bodyParser from 'body-parser';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

import { MovieResolver } from './resolvers/Movie';


const main = async () => {
  const app = express();
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));



  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [MovieResolver],
      validate: false,
    })
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('🚀  Server ready at port 4000');
  });
};

main().catch((err) => {
  console.error(err);
});
