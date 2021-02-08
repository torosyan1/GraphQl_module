import { GraphQLError } from 'graphql';
import { pubsub } from '../server'
import { User } from '../Database/models/user';

export const createUser = async (_, arg:any) : Promise<object> => {
    try {

        const user:object = await User.findOne({ email: arg.email });
        
        if (user) return new GraphQLError('User alredy registred!');
        
        const newUser:object = await User.create(arg);
        pubsub.publish('userTopic', {
            User: newUser
        });
        return newUser;

    } catch (e) {
        return e;
    }
};