import { IApiCallWithPayload } from '../Utility';
import { AnthRTask } from '../Models/AnthRTask';
import { TaskUpsertViewModel } from '../Models/TaskUpsertViewModel';

const taskService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `http://localhost:5001/api/task/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, AnthRTask[]> => {

        return {
            method: 'get',
            url: `http://localhost:5001/api/task`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, TaskUpsertViewModel> => {

        return {
            method: 'get',
            url: `http://localhost:5001/api/task/${id}`
        };
    }, 
    getTemplate: (projectId: number): IApiCallWithPayload<number, TaskUpsertViewModel> => {

        return {
            method: 'get',
            url: `http://localhost:5001/api/task/template/${projectId}`
        };
    }, 
    post: (): IApiCallWithPayload<AnthRTask, boolean> => {

        return {
            method: 'post',
            url: `http://localhost:5001/api/task`
        };
    }, 
    put: (): IApiCallWithPayload<AnthRTask, boolean> => {

        return {
            method: 'put',
            url: `http://localhost:5001/api/task`
        };
    }
}

export { taskService as TaskService }
/*
    Debug Info:
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.Staff), , /api/staff, typeof(bool), , /api/staff, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int?}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/timesheet/{id:int}, typeof(bool), , /api/timesheet, typeof(System.Collections.Generic.List<arthr.Models.arTask.Timesheet>), , /api/timesheet/{id:int}, typeof(arthr.Models.arTask.Timesheet), , /api/timesheet, typeof(bool), , /api/timesheet, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool) Unknown Types: AnthRTask, TaskUpsertViewModel
*/
