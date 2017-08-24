import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';

import { reducer as toastrReducer } from 'react-redux-toastr'

// Utility
import { ObjectHelper } from '../Utility/Helpers';

import { ActionTypes } from './ActionTypes';
import { IAppState } from './IAppState';

const initialState = (): IAppState => {
    return {
        project: {
            project: null,
            projects: null,
            projectTools: null,
            projectUpsert: null
        },
        task: {
            task: null,
            tasks: null,
            taskTools: null,
            taskUpsert: null
        }
    };
}

const actionWrapper = (state: IAppState,
    action: Action<any>,
    func: (newState: IAppState, action: Action<any>) => void) => {

    const newState = ObjectHelper.deepClone(state);
    func(newState, action);
    return newState;
};

const areaStateReducer = handleActions<IAppState>({

    [ActionTypes.project.receiveCollection]: (state: IAppState, action: Action<any>): IAppState => {

        return actionWrapper(state, action, (newState: IAppState) => {
            newState.project.projects = action.payload;
        });
    },

    [ActionTypes.project.receiveUpsert]: (state: IAppState, action: Action<any>): IAppState => {

        return actionWrapper(state, action, (newState: IAppState) => {
            newState.project.projectUpsert = action.payload;
        });
    },

    [ActionTypes.task.receiveCollection]: (state: IAppState, action: Action<any>): IAppState => {

        return actionWrapper(state, action, (newState: IAppState) => {
            newState.task.tasks = action.payload;
        });
    },

    [ActionTypes.task.receiveUpsert]: (state: IAppState, action: Action<any>): IAppState => {

        return actionWrapper(state, action, (newState: IAppState) => {
            newState.task.taskUpsert = action.payload;
        });
    }

}, initialState());

export const rootReducer = combineReducers({
    appState: areaStateReducer,
    toastr: toastrReducer
});
