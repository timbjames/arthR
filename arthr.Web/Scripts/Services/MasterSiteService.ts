import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';
import { MasterSite } from '../Models/MasterSite';
import { MasterSiteUpsertViewModel } from '../Models/MasterSiteUpsertViewModel';

const appConfig = AppService().config;

const masterSiteService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `${appConfig.apiUrl}/api/mastersite/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, MasterSite[]> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/mastersite`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, MasterSiteUpsertViewModel> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/mastersite/${id}`
        };
    }, 
    post: (): IApiCallWithPayload<MasterSite, boolean> => {

        return {
            method: 'post',
            url: `${appConfig.apiUrl}/api/mastersite`
        };
    }, 
    put: (): IApiCallWithPayload<MasterSite, boolean> => {

        return {
            method: 'put',
            url: `${appConfig.apiUrl}/api/mastersite`
        };
    }
}

export { masterSiteService as MasterSiteService }
/*
    Debug Info:
    , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.StaffUpsertViewModel), , /api/staff, typeof(bool), , /api/staff, typeof(bool), , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/timesheet/{id:int}, typeof(bool), , /api/timesheet, typeof(System.Collections.Generic.List<arthr.Models.arTask.Timesheet>), , /api/timesheet/{id:int}, typeof(arthr.Models.arTask.Timesheet), , /api/timesheet, typeof(bool), , /api/timesheet, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSiteUpsertViewModel), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSiteUpsertViewModel), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool) Unknown Types: MasterSite, MasterSiteUpsertViewModel
*/
