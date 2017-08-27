import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';
import { Staff } from '../Models/Staff';
import { StaffUpsertViewModel } from '../Models/StaffUpsertViewModel';

const appConfig = AppService().config;

const staffService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `${appConfig.apiUrl}/api/staff/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, Staff[]> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/staff`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, StaffUpsertViewModel> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/staff/${id}`
        };
    }, 
    post: (): IApiCallWithPayload<Staff, boolean> => {

        return {
            method: 'post',
            url: `${appConfig.apiUrl}/api/staff`
        };
    }, 
    put: (): IApiCallWithPayload<Staff, boolean> => {

        return {
            method: 'put',
            url: `${appConfig.apiUrl}/api/staff`
        };
    }
}

export { staffService as StaffService }
/*
    Debug Info:
    , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.StaffUpsertViewModel), , /api/staff, typeof(bool), , /api/staff, typeof(bool) Unknown Types: Staff, StaffUpsertViewModel
*/
