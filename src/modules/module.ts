import { createModule } from 'graphql-modules';

export const myModule = createModule({
  id: 'my-module',
  dirname: __dirname,
  typeDefs: [
    `type Query {
      hello: String!
    }`,
  ],
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
});