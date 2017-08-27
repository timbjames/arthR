﻿import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';
import { AnthRTask } from '../Models/AnthRTask';
import { TaskUpsertViewModel } from '../Models/TaskUpsertViewModel';

const appConfig = AppService().config;

const taskService = {
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `${appConfig.apiUrl}/api/task/${id}`
        };
    }, 
    get: (): IApiCallWithPayload<void, AnthRTask[]> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/task`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, TaskUpsertViewModel> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/task/${id}`
        };
    }, 
    getTemplate: (projectId: number): IApiCallWithPayload<number, TaskUpsertViewModel> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/task/template/${projectId}`
        };
    }, 
    post: (): IApiCallWithPayload<AnthRTask, boolean> => {

        return {
            method: 'post',
            url: `${appConfig.apiUrl}/api/task`
        };
    }, 
    put: (): IApiCallWithPayload<AnthRTask, boolean> => {

        return {
            method: 'put',
            url: `${appConfig.apiUrl}/api/task`
        };
    }
}

export { taskService as TaskService }
/*
    Debug Info:
    , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/note/{id:int}, typeof(bool), , /api/note, typeof(System.Collections.Generic.List<arthr.Models.Notes.Note>), , /api/note/{id:int}, typeof(arthr.Models.Notes.NoteUpsertViewModel), , /api/note, typeof(bool), , /api/note, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.StaffUpsertViewModel), , /api/staff, typeof(bool), , /api/staff, typeof(bool), , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool) Unknown Types: AnthRTask, TaskUpsertViewModel
*/
