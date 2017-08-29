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
    , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool) Unknown Types: Note, NoteUpsertViewModel
*/
