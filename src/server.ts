import './env'
import { ApolloServer } from 'apollo-server';
import { PubSub } from 'graphql-subscriptions';
import mongodb, { MongoClient } from 'mongodb'

import { application } from './application';
import { Database } from './Database'

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

const subscribeDB = async () => {
  const client = await mongodb.MongoClient.connect(process.env.DB_URL);
  const db = client.db('<dbname>');
  db.collection('users').watch().
    on('change', (data) => {
      console.log(data['fullDocument'])
      pubsub.publish('userTopic', {
        User: data['fullDocument']
      });
    });

}
subscribeDB()

server.listen().then(async ({ url }) => {
  console.log(`🚀 Server ready at ${url}`);

});