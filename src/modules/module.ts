import { createModule } from 'graphql-modules';
import gql from 'graphql-tag';

import Mutation from '../Mutation';
import Query from '../Query'

export const myModule = createModule({
  id: 'my-module',
  dirname: __dirname,
  typeDefs: gql`

   type Query {
    hello: String!,
    getUser(id:String): getUsers,
    getAllUser: [getUsers]
   }

   type getUsers {
    id: ID,
    first_name: String,
    last_name:String,
    email: String,
   }
   
   type createUserType{
    first_name: String,
    last_name:String,
    email: String,
    password: String
    }

   type updateUserType{
    id: ID,
    first_name: String,
    last_name:String,
    email: String,
    password: String
   }

  type Mutation{
    createUser(first_name: String, last_name:String, email:String, password:String,):createUserType,
    updateUser(id:String!,first_name: String, last_name:String, email:String, password:String, ):updateUserType,
    deleteUser(id:String!):String!
  }`,

  resolvers: {
    Query,
    Mutation
  },
});