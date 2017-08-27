import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';

const appConfig = AppService().config;

const staffOnTaskService = {
}

export { staffOnTaskService as StaffOnTaskService }
/*
    Debug Info:
    , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.StaffUpsertViewModel), , /api/staff, typeof(bool), , /api/staff, typeof(bool), , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool) Unknown Types: 
*/
