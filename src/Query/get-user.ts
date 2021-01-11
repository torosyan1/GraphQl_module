import { GraphQLError } from 'graphql';
import { User } from '../Database/models/user';

export const getUser = async (_, arg ): Promise<object> => {
    try {
        const user:object = await User.findOne({ _id: arg.id });
        
        if (!user) return new GraphQLError('User not found!');
        
        return user;

    } catch (e) {
        return e;
    }
};