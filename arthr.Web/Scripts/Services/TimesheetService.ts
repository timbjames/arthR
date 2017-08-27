import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';
import { Timesheet } from '../Models/Timesheet';

const appConfig = AppService().config;

const timesheetService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `${appConfig.apiUrl}/api/timesheet/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, Timesheet[]> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/timesheet`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, Timesheet> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/timesheet/${id}`
        };
    }, 
    post: (): IApiCallWithPayload<Timesheet, boolean> => {

        return {
            method: 'post',
            url: `${appConfig.apiUrl}/api/timesheet`
        };
    }, 
    put: (): IApiCallWithPayload<Timesheet, boolean> => {

        return {
            method: 'put',
            url: `${appConfig.apiUrl}/api/timesheet`
        };
    }
}

export { timesheetService as TimesheetService }
/*
    Debug Info:
    , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.StaffUpsertViewModel), , /api/staff, typeof(bool), , /api/staff, typeof(bool), , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/timesheet/{id:int}, typeof(bool), , /api/timesheet, typeof(System.Collections.Generic.List<arthr.Models.arTask.Timesheet>), , /api/timesheet/{id:int}, typeof(arthr.Models.arTask.Timesheet), , /api/timesheet, typeof(bool), , /api/timesheet, typeof(bool) Unknown Types: Timesheet
*/
