import { AppService } from './AppService';
import { IApiCallWithPayload } from '../Utility';
import { Project } from '../Models/Project';
import { ProjectUpsertViewModel } from '../Models/ProjectUpsertViewModel';

const appConfig = AppService().config;

const projectService = {
    complete: (): IApiCallWithPayload<Project, boolean> => {

        return {
            method: 'patch',
            url: `${appConfig.apiUrl}/api/project/complete`
        };
    }, 
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `${appConfig.apiUrl}/api/project/delele/${id}`
        };
    }, 
    get: (completed: boolean, all: string): IApiCallWithPayload<boolean, Project[]> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/project?completed=${completed}&all=${encodeURIComponent(all)}`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, ProjectUpsertViewModel> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/project/getbyid/${id}`
        };
    }, 
    getTemplate: (): IApiCallWithPayload<void, ProjectUpsertViewModel> => {

        return {
            method: 'get',
            url: `${appConfig.apiUrl}/api/project/template`
        };
    }, 
    post: (): IApiCallWithPayload<Project, boolean> => {

        return {
            method: 'post',
            url: `${appConfig.apiUrl}/api/project`
        };
    }, 
    put: (): IApiCallWithPayload<Project, boolean> => {

        return {
            method: 'put',
            url: `${appConfig.apiUrl}/api/project`
        };
    }
}

export { projectService as ProjectService }
/*
    Debug Info:
    , /api/user/getloggedin, typeof(arthr.Models.Core.User), , /api/task/complete, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/task/complete, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/task/complete, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/task/complete, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task/template/{projectId:int}, typeof(arthr.Models.arTask.TaskUpsertViewModel), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool) Unknown Types: Project, ProjectUpsertViewModel
*/
