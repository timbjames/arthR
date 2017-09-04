import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';
import { Timesheet } from '../Models/Timesheet';
import { TimesheetUpsertViewModel } from '../Models/TimesheetUpsertViewModel';

const appConfig = AppService().config;

const timesheetService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `${appConfig.apiUrl}/api/timesheet/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, Timesheet[]> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/timesheet`
        };
    }, 
    getById: (id: number, taskId: number): IApiCallWithPayload<number, TimesheetUpsertViewModel> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/timesheet/${id}?taskId=${taskId}`
        };
    }, 
    post: (): IApiCallWithPayload<Timesheet, boolean> => {

        return {
            method: 'post',
            url: `${appConfig.apiUrl}/api/timesheet`
        };
    }, 
    put: (): IApiCallWithPayload<Timesheet, boolean> => {

        return {
            method: 'put',
            url: `${appConfig.apiUrl}/api/timesheet`
        };
    }
}

export { timesheetService as TimesheetService }
/*
    Debug Info:
    , /api/timesheet/{id:int}, typeof(bool), , /api/timesheet, typeof(System.Collections.Generic.List<arthr.Models.arTask.Timesheet>), , /api/timesheet/{id:int}, typeof(arthr.Models.arTask.TimesheetUpsertViewModel), , /api/timesheet, typeof(bool), , /api/timesheet, typeof(bool) Unknown Types: Timesheet, TimesheetUpsertViewModel
*/
