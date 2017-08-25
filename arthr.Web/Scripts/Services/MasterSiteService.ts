import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';
import { MasterSite } from '../Models/MasterSite';

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
    getById: (id: number): IApiCallWithPayload<number, MasterSite> => {

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
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool) Unknown Types: MasterSite
*/
