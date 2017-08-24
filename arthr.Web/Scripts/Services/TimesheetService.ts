import { IApiCallWithPayload } from '../Utility';
import { Timesheet } from '../Models/Timesheet';

const timesheetService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `http://localhost:5001/api/timesheet/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, Timesheet[]> => {

        return {
            method: 'get',
            url: `http://localhost:5001/api/timesheet`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, Timesheet> => {

        return {
            method: 'get',
            url: `http://localhost:5001/api/timesheet/${id}`
        };
    }, 
    post: (): IApiCallWithPayload<Timesheet, boolean> => {

        return {
            method: 'post',
            url: `http://localhost:5001/api/timesheet`
        };
    }, 
    put: (): IApiCallWithPayload<Timesheet, boolean> => {

        return {
            method: 'put',
            url: `http://localhost:5001/api/timesheet`
        };
    }
}

export { timesheetService as TimesheetService }
/*
    Debug Info:
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.Staff), , /api/staff, typeof(bool), , /api/staff, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int?}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/timesheet/{id:int}, typeof(bool), , /api/timesheet, typeof(System.Collections.Generic.List<arthr.Models.arTask.Timesheet>), , /api/timesheet/{id:int}, typeof(arthr.Models.arTask.Timesheet), , /api/timesheet, typeof(bool), , /api/timesheet, typeof(bool) Unknown Types: Timesheet
*/
