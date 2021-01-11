import { createApplication } from 'graphql-modules';
import { myModule } from './modules/module';

// This is your application, it contains your GraphQL schema and the implementation of it.
export const application = createApplication({
  modules: [myModule],
});

// This is your actual GraphQL schema
const mySchema = application.schema;
