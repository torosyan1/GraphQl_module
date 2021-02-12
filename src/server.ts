import './env'
import { ApolloServer } from 'apollo-server';
import { PubSub } from 'graphql-subscriptions';

import { application } from './application';
import { Database } from './Database'
import { subscribeDB } from './Database/subscribtion'

export const pubsub = new PubSub();

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
  schema,
  context: async ({ req, connection }) => {
    if (connection) {
      return connection.context;
    } else {
      return { pubsub };
    }
  },
});

Database()

subscribeDB()

server.listen().then(async ({ url }) => {
  console.log(`🚀 Server ready at ${url}`);

});