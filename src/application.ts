import { createApplication } from 'graphql-modules';
import  {myModule} from './modules/module';

export const application = createApplication({
  modules: [myModule],
});

const mySchema = application.schema;
