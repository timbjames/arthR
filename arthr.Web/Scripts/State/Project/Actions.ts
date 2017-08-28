// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utils
import { IApiProgressFunctions } from '../../Utility';

// Models
import { Project, ProjectUpsertViewModel } from '../../Models'

// Services
import { ProjectService } from '../../Services'

// Page Actions
import { PageDispatcherFactory } from '../Page/Actions';

// Base
import { Actions } from '../Base/Actions';

// State
import { ActionTypes, IProjectState } from './State';

export interface IProjectActions {
    createProjectAsync: (project: Project) => void;
    deleteProjectAsync: (project: Project, callback: Function) => void;
    editProjectAsync: (project: Project) => void;
    getProjectAsync: (projectId: number) => void;
    getProjectsAsync: () => void;
    getProjectTemplateAsync: () => void;
    receiveProjectUpsert: (upsert: ProjectUpsertViewModel) => void;
    reset: () => void;
}

class ProjectActions extends Actions implements IProjectActions {

    private onFailure = (error): void => {
        console.log(error);
    }

    public createProjectAsync = (project: Project) => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Project Creation', 'Project Created');
            createHashHistory().push('/projects');
        };

        this.api.call(ProjectService.post(), project, onSuccess, this.onFailure);
    }

    public deleteProjectAsync = (project: Project, callback: Function) => (dispatch: Dispatch<IProjectState>): void => {

        const onSucces = () => {
            toastr.success('Project Deletion', 'Project Deleted');
            callback();
            dispatch(this.getProjectsAsync());
        };

        this.api.call(ProjectService.delete(project.projectId), null, onSucces, this.onFailure);
    }

    public editProjectAsync = (project: Project) => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Project Edit', 'Project Updated');
            createHashHistory().push('/projects');
        };

        this.api.call(ProjectService.put(), project, onSuccess, this.onFailure);
    }

    public getProjectAsync = (projectId: number) => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (upsert: ProjectUpsertViewModel) => {
            dispatch(this.receiveProjectUpsert(upsert));
        };

        this.api.call(ProjectService.getById(projectId), null, onSuccess, this.onFailure);
    }

    public getProjectsAsync = () => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (projects: Project[]) => {
            dispatch(this.receiveProjects(projects));
        };

        this.api.call(ProjectService.get(false, ''), null, onSuccess, this.onFailure);
    }

    public getProjectTemplateAsync = () => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (upsert: ProjectUpsertViewModel) => {
            dispatch(this.receiveProjectUpsert(upsert));
        };

        this.api.call(ProjectService.getTemplate(), null, onSuccess, this.onFailure);
    }

    private receiveProjects = createAction(ActionTypes.receiveCollection, (projects: Project[]) => projects);
    public receiveProjectUpsert = createAction(ActionTypes.receiveUpsert, (upsert: ProjectUpsertViewModel) => upsert);

    public reset = () => (dispatch: Dispatch<IProjectState>): void => {
        dispatch(this.receiveProjects(null));
    }
}

const dispatcherFactory = (dispatch: Dispatch<IProjectState>, progressFunctions: IApiProgressFunctions): IProjectActions => {

    const actions = new ProjectActions(progressFunctions);

    return {
        createProjectAsync: (project: Project) => {
            dispatch(actions.createProjectAsync(project));
        },
        deleteProjectAsync: (project: Project, callback: Function) => {
            dispatch(actions.deleteProjectAsync(project, callback));
        },
        editProjectAsync: (project: Project) => {
            dispatch(actions.editProjectAsync(project));
        },
        getProjectAsync: (projectId: number) => {
            dispatch(actions.getProjectAsync(projectId));
        },
        getProjectsAsync: () => {
            dispatch(actions.getProjectsAsync());
        },
        getProjectTemplateAsync: () => {
            dispatch(actions.getProjectTemplateAsync());
        },
        receiveProjectUpsert: (upsert: ProjectUpsertViewModel) => {
            dispatch(actions.receiveProjectUpsert(upsert));
        },
        reset: () => {
            dispatch(actions.reset());
        }
    }
}

export { dispatcherFactory as ProjectDispatcherFactory }
