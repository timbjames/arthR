import { IApiCallWithPayload } from '../Utility';
import { MasterSite } from '../Models/MasterSite';

const masterSiteService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `http://localhost:5002/api/mastersite/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, MasterSite[]> => {

        return {
            method: 'get',
            url: `http://localhost:5002/api/mastersite`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, MasterSite> => {

        return {
            method: 'get',
            url: `http://localhost:5002/api/mastersite/${id}`
        };
    }, 
    post: (): IApiCallWithPayload<MasterSite, boolean> => {

        return {
            method: 'post',
            url: `http://localhost:5002/api/mastersite`
        };
    }, 
    put: (): IApiCallWithPayload<MasterSite, boolean> => {

        return {
            method: 'put',
            url: `http://localhost:5002/api/mastersite`
        };
    }
}

export { masterSiteService as MasterSiteService }
/*
    Debug Info:
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool) Unknown Types: MasterSite
*/
