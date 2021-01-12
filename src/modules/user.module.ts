import { createModule } from 'graphql-modules';
import gql from 'graphql-tag';
import { mergeTypes, fileLoader } from "merge-graphql-schemas";
import * as path from "path";
import Mutation from '../resolvers/mutation'
import Query from '../resolvers/query'

const allTypes = fileLoader(path.join(__dirname, '../schema/**/*.graphql'));
const mergedTypes = mergeTypes(allTypes);

export const myModule = createModule({
  id: 'my-module',
  dirname: __dirname,
  typeDefs: gql`${mergedTypes}`,

  resolvers: {
    Query,
    Mutation
  },
});