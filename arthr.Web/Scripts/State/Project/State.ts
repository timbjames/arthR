// 3rd Party
import { handleActions, Action } from 'redux-actions';

// Utility
import { ReduxHelper } from '../../Utility';

// Models
import { Project, ProjectUpsertViewModel } from '../../Models';

const actionTypes = {
    receiveCollection: 'project.receive.collection',
    receiveUpsert: 'project.receive.upsert'
};

export interface IProjectState {
    projects: Project[],
    projectUpsert: ProjectUpsertViewModel;
}

const initialState = (): IProjectState => {

    return {
        projects: null,
        projectUpsert: null
    };
}

const actionWrapper = ReduxHelper.actionWrapper;

const projectReducer = handleActions<IProjectState>({

    [actionTypes.receiveCollection]: (state: IProjectState, action: Action<Project[]>): IProjectState => {

        return actionWrapper(state, action, (newState: IProjectState) => {
            newState.projects = action.payload;
        });
    },

    [actionTypes.receiveUpsert]: (state: IProjectState, action: Action<ProjectUpsertViewModel>): IProjectState => {

        return actionWrapper(state, action, (newState: IProjectState) => {
            newState.projectUpsert = action.payload;
        });
    }

}, initialState());

export {
    actionTypes as ActionTypes,
    projectReducer as ProjectReducer
}
