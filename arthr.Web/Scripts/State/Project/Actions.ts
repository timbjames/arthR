// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { Api } from '../../Utility';

// Models
import { Project, ProjectUpsertViewModel, AnthRTask, TaskUpsertViewModel } from '../../Models'

// Services
import { ProjectService } from '../../Services'

// State
import { ActionTypes, IProjectState } from './State';

export interface IProjectActions {
    createProjectAsync: (project: Project) => void;
    editProjectAsync: (project: Project) => void;
    getProjectAsync: (projectId: number) => void;
    getProjectsAsync: () => void;
    getProjectTemplateAsync: () => void;
    receiveProjectUpsert: (upsert: ProjectUpsertViewModel) => void;
}

class ProjectActions implements IProjectActions {

    private onFailure = (error): void => {
        console.log(error);
    }

    public createProjectAsync = (project: Project) => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Project Creation', 'Project Created');
            createHashHistory().push('/projects');
        };
        Api(dispatch).call(ProjectService.post(), project, onSuccess, this.onFailure);
    }

    public editProjectAsync = (project: Project) => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Project Edit', 'Project Updated');
            createHashHistory().push('/projects');
        };

        Api(dispatch).call(ProjectService.put(), project, onSuccess, this.onFailure);
    }

    public getProjectAsync = (projectId: number) => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (upsert: ProjectUpsertViewModel) => {
            dispatch(this.receiveProjectUpsert(upsert));
        };

        Api(dispatch).call(ProjectService.getById(projectId), null, onSuccess, this.onFailure);
    }

    public getProjectsAsync = () => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (projects: Project[]) => {
            dispatch(this.receiveProjects(projects));
        };

        Api(dispatch).call(ProjectService.get(false, ''), null, onSuccess, this.onFailure);
    }

    public getProjectTemplateAsync = () => (dispatch: Dispatch<IProjectState>): void => {

        const onSuccess = (upsert: ProjectUpsertViewModel) => {
            dispatch(this.receiveProjectUpsert(upsert));
        };

        Api(dispatch).call(ProjectService.getTemplate(), null, onSuccess, this.onFailure);
    }

    private receiveProjects = createAction(ActionTypes.receiveCollection, (projects: Project[]) => projects);
    public receiveProjectUpsert = createAction(ActionTypes.receiveUpsert, (upsert: ProjectUpsertViewModel) => upsert);
}

const dispatcherFactory = (dispatch: Dispatch<IProjectState>): IProjectActions => {

    const actions = new ProjectActions();

    return {
        createProjectAsync: (project: Project) => {
            dispatch(actions.createProjectAsync(project));
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
        }
    }
}

export { dispatcherFactory as ProjectDispatcherFactory }
