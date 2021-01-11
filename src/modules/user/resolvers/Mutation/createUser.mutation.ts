import { GraphQLError } from 'graphql';
import { User } from '../../../Database/models/user';

export const createUser = async (_, arg:any) : Promise<object> => {
    try {

        const user:object = await User.findOne({ email: arg.email });
        
        if (user) return new GraphQLError('User alredy registred!');
        
        const newUser:object = await User.create(arg);

        return newUser;

    } catch (e) {
        return e;
    }
};






modules/name/