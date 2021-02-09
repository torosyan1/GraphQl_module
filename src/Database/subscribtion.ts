import mongodb from 'mongodb'
import { pubsub } from '../server'

export const subscribeDB = async () => {
  
  const client = await mongodb.MongoClient.connect(process.env.DB_URL);

  const db = client.db('<dbname>');

  db.collection('users').watch().on('change', (data) => {
      switch (data.operationType) {
        case "insert":
          return pubsub.publish('userTopic', { Subscription: data.fullDocument });
        case "replace":
          return pubsub.publish('userTopic', { Subscription: data.fullDocument });
        case "update":
          return pubsub.publish('userTopic', { Subscription: data.updateDescription.updatedFields });
        case "delete":
          return pubsub.publish('userTopic', { Subscription: data.documentKey });
        default:
            break;
      }
    });

}