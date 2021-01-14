import { createModule } from 'graphql-modules';
import gql from 'graphql-tag';

export const Admin = createModule({
  id: 'my-module',
  dirname: __dirname,
  typeDefs:gql`
    type Query {
    hello: String!
  }`,
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
});