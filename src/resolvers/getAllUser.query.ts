import { GraphQLError } from 'graphql';
import { User } from '../Database/models/user';

export const getAllUser= async (_, arg) : Promise<object> => {
    try {
        const user:object = await User.find({ });
        
        if (!user) return new GraphQLError('User not found!');
console.log('aaa')
        return user;

    } catch (e) {
        return e;
    }
};