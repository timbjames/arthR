import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';
import { User } from '../Models/User';

const appConfig = AppService().config;

const userService = {
    getLoggedInUser: (): IApiCallWithPayload<void, User> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/user/getloggedin`
        };
    }
}

export { userService as UserService }
/*
    Debug Info:
    , /api/user/getloggedin, typeof(arthr.Models.Core.User) Unknown Types: User
*/
