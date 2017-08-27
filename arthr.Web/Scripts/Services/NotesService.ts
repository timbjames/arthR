import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';
import { Note } from '../Models/Note';
import { NoteUpsertViewModel } from '../Models/NoteUpsertViewModel';

const appConfig = AppService().config;

const notesService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `${appConfig.apiUrl}/api/note/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, Note[]> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/note`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, NoteUpsertViewModel> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/note/${id}`
        };
    }, 
    post: (): IApiCallWithPayload<Note, boolean> => {

        return {
            method: 'post',
            url: `${appConfig.apiUrl}/api/note`
        };
    }, 
    put: (): IApiCallWithPayload<Note, boolean> => {

        return {
            method: 'put',
            url: `${appConfig.apiUrl}/api/note`
        };
    }
}

export { notesService as NotesService }
/*
    Debug Info:
    , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.StaffUpsertViewModel), , /api/staff, typeof(bool), , /api/staff, typeof(bool), , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/timesheet/{id:int}, typeof(bool), , /api/timesheet, typeof(System.Collections.Generic.List<arthr.Models.arTask.Timesheet>), , /api/timesheet/{id:int}, typeof(arthr.Models.arTask.Timesheet), , /api/timesheet, typeof(bool), , /api/timesheet, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool) Unknown Types: Note, NoteUpsertViewModel
*/
