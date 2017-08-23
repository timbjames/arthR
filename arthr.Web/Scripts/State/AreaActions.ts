// 3rd Party
import { createAction } from 'redux-actions';

// Utility
import { Api, IApiCallWithPayload } from '../Utility';

// Models
import { Project, ProjectUpsertViewModel } from '../Models'

// Services
import { ProjectService } from '../Services'

// State
import { ActionTypes } from '../State';

export interface IAreaActions {
    createProjectAsync: (project: Project) => void;
    getProjectsAsync: () => void;
    getProjectTemplateAsync: () => void;
    receiveProjectUpsert: (upsert: ProjectUpsertViewModel) => void;
}

class AreaActions implements IAreaActions {

    private onFailure = (error): void => {
        console.log(error);
    }

    public  createProjectAsync = (project: Project) => (dispatch: any): void => {

        const onSuccess = (result: boolean) => {
            alert('success');
        };
        Api(dispatch).call(ProjectService.post(), project, onSuccess, this.onFailure);
    }

    public getProjectsAsync = () => (dispatch: any): void => {

        const onSuccess = (projects: Project[]) => {
            dispatch(this.receiveProjects(projects));
        };

        Api(dispatch).call(ProjectService.get(false, ''), null, onSuccess, this.onFailure);
    }

    public getProjectTemplateAsync = () => (dispatch: any): void => {

        const onSuccess = (upsert: ProjectUpsertViewModel) => {
            dispatch(this.receiveProjectUpsert(upsert));
        };

        Api(dispatch).call(ProjectService.getTemplate(), null, onSuccess, this.onFailure);
    }

    private receiveProjects = createAction(ActionTypes.project.receiveProjects, (projects: Project[]) => projects);
    public receiveProjectUpsert = createAction(ActionTypes.project.receiveUpsert, (upsert: ProjectUpsertViewModel) => upsert);
}

const actionsDispatcherFactory = (dispatch: any): IAreaActions => {

    const localActions = new AreaActions();

    return {
        createProjectAsync: (project: Project) => {
            dispatch(localActions.createProjectAsync(project));
        },
        getProjectsAsync: () => {
            dispatch(localActions.getProjectsAsync());
        },
        getProjectTemplateAsync: () => {
            dispatch(localActions.getProjectTemplateAsync());
        },
        receiveProjectUpsert: (upsert: ProjectUpsertViewModel) => {
            dispatch(localActions.receiveProjectUpsert(upsert));
        }
    }
}

export {
    actionsDispatcherFactory as ActionsDispatcherFactory
}
