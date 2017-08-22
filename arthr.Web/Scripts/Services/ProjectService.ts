import { IApiCallWithPayload } from '../Utility';
import { Project } from '../Models/Project';

const projectService = {
    get: (completed: boolean, all: string): IApiCallWithPayload<boolean, Project[]> => {

        return {
            method: 'get',
            url: `/api/project?completed=${completed}&all=${encodeURIComponent(all)}`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, Project> => {

        return {
            method: 'get',
            url: `/api/project/getbyid/${id}`
        };
    }, 
    post: (): IApiCallWithPayload<Project, boolean> => {

        return {
            method: 'post',
            url: `/api/project`
        };
    }, 
    put: (): IApiCallWithPayload<Project, boolean> => {

        return {
            method: 'put',
            url: `/api/project`
        };
    }, 
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `/api/project/delele/${id}`
        };
    }, 
    complete: (): IApiCallWithPayload<Project, boolean> => {

        return {
            method: 'patch',
            url: `/api/project/complete`
        };
    }
}

export { projectService as ProjectService }
/*
    Debug Info:
    , /api/item/dosomething, typeof(arthr.Models.Core.Person), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project/complete, typeof(bool) Unknown Types: Project
*/
