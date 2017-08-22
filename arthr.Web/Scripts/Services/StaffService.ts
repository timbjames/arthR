import { IApiCallWithPayload } from '../Utility';
import { Staff } from '../Models/Staff';

const staffService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `http://localhost:5002/api/staff/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, Staff[]> => {

        return {
            method: 'get',
            url: `http://localhost:5002/api/staff`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, Staff> => {

        return {
            method: 'get',
            url: `http://localhost:5002/api/staff/${id}`
        };
    }, 
    post: (): IApiCallWithPayload<Staff, boolean> => {

        return {
            method: 'post',
            url: `http://localhost:5002/api/staff`
        };
    }, 
    put: (): IApiCallWithPayload<Staff, boolean> => {

        return {
            method: 'put',
            url: `http://localhost:5002/api/staff`
        };
    }
}

export { staffService as StaffService }
/*
    Debug Info:
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.Staff), , /api/staff, typeof(bool), , /api/staff, typeof(bool) Unknown Types: Staff
*/
