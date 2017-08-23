import { IApiCallWithPayload } from '../Utility';
import { Project } from '../Models/Project';
import { ProjectUpsertViewModel } from '../Models/ProjectUpsertViewModel';

const projectService = {
    complete: (): IApiCallWithPayload<Project, boolean> => {

        return {
            method: 'patch',
            url: `http://localhost:5001/api/project/complete`
        };
    }, 
    delete: (id: number): IApiCallWithPayload<number, boolean> => {

        return {
            method: 'delete',
            url: `http://localhost:5001/api/project/delele/${id}`
        };
    }, 
    get: (completed: boolean, all: string): IApiCallWithPayload<boolean, Project[]> => {

        return {
            method: 'get',
            url: `http://localhost:5001/api/project?completed=${completed}&all=${encodeURIComponent(all)}`
        };
    }, 
    getById: (id: number): IApiCallWithPayload<number, Project> => {

        return {
            method: 'get',
            url: `http://localhost:5001/api/project/getbyid/${id}`
        };
    }, 
    getTemplate: (): IApiCallWithPayload<void, ProjectUpsertViewModel> => {

        return {
            method: 'get',
            url: `http://localhost:5001/api/project/template`
        };
    }, 
    post: (): IApiCallWithPayload<Project, boolean> => {

        return {
            method: 'post',
            url: `http://localhost:5001/api/project`
        };
    }, 
    put: (): IApiCallWithPayload<Project, boolean> => {

        return {
            method: 'put',
            url: `http://localhost:5001/api/project`
        };
    }
}

export { projectService as ProjectService }
/*
    Debug Info:
    , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool) Unknown Types: Project, ProjectUpsertViewModel
*/
