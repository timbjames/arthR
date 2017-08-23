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
    createProjectAsync: () => void;
    getProjectsAsync: () => void;
    getProjectTemplateAsync: () => void;
}

class AreaActions implements IAreaActions {

    private onFailure = (): void => {
        
    }

    public  createProjectAsync = () => (dispatch: any): void => {

        const data: Project = {
            alreadyBilled: false,
            completed: false,
            dateCompleted: null,
            deadline: null,
            deleted: false,
            hideFromTimesheet: false,
            masterSiteId: 1,
            name: 'Test',
            onGoing: true,
            plannedStart: new Date(),
            quoted: 500,
            username: 'tim'
        } as Project;

        const onSuccess = (result: boolean) => {
            alert('success');
        };

        Api(null).call(ProjectService.post(), data, onSuccess, (error) => {
            console.log(error);
        });
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
    private receiveProjectUpsert = createAction(ActionTypes.project.receiveUpsert, (upsert: ProjectUpsertViewModel) => upsert);
}

const actionsDispatcherFactory = (dispatch: any): IAreaActions => {

    const localActions = new AreaActions();

    return {
        createProjectAsync: () => {
            dispatch(localActions.createProjectAsync());
        },
        getProjectsAsync: () => {
            dispatch(localActions.getProjectsAsync());
        },
        getProjectTemplateAsync: () => {
            dispatch(localActions.getProjectTemplateAsync());
        }
    }
}

export {
    actionsDispatcherFactory as ActionsDispatcherFactory
}
