import './env';
import { User } from './modules/user.module';
import { Admin } from './modules/admin.module';

export const myModules = ()=>{
    switch (process.env.userModule) {
        case 'user':
          return User
        case "admin":
          return Admin
        default: User
      }      
}