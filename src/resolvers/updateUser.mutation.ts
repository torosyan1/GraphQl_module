import { User } from '../Database/models/user';

export const updateUser = async (_, arg:any):Promise<object> => {
    try {
       const updateUser:object = await User.findByIdAndUpdate({ _id: arg.id}, {
            first_name: arg.first_name,
            last_name: arg.last_name,
            email: arg.email,
            password: arg.password
        });

        
        return updateUser
    } catch (e) {
        return e;
    }
}