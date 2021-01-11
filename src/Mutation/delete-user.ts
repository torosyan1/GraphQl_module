import { User } from '../Database/models/user';

export const deleteUser = async (_, arg:any):Promise<string | object> => {
    try {
         await User.deleteOne({ _id : arg.id});
         return 'User Deleted'
    } catch (e) {
        return e;
    }
};