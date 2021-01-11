import { ApolloServer } from 'apollo-server';

import { application } from './application';
import {Database} from './Database'

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
  schema,
});

Database()

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});