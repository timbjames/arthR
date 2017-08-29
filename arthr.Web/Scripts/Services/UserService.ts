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
    , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/task/complete, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/user/getloggedin, typeof(arthr.Models.Core.User) Unknown Types: User
*/
