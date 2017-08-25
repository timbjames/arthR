import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';

const appConfig = AppService().config;

const staffOnProjectService = {
}

export { staffOnProjectService as StaffOnProjectService }
/*
    Debug Info:
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.Staff), , /api/staff, typeof(bool), , /api/staff, typeof(bool) Unknown Types: 
*/
