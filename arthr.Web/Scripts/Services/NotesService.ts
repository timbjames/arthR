import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';

const appConfig = AppService().config;

const notesService = {
}

export { notesService as NotesService }
/*
    Debug Info:
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool) Unknown Types: 
*/
