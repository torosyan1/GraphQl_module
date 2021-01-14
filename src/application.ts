import { createApplication } from 'graphql-modules';
import  { myModules } from './modulesValidation';

export const application = createApplication({
  modules: [myModules()],
});

const mySchema = application.schema;
