import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';

// Utility
import { ObjectHelper } from '../Utility/Helpers';

import { ActionTypes } from './ActionTypes';
import { IAreaState } from './IAreaState';

const initialState = (): IAreaState => {
    return {
        project: {
            project: null,
            projects: null,
            projectTools: null,
            projectUpsert: null
        }
    };
}

const actionWrapper = (state: IAreaState,
    action: Action<any>,
    func: (newState: IAreaState, action: Action<any>) => void) => {

    const newState = ObjectHelper.deepClone(state);
    func(newState, action);
    return newState;
};

const areaStateReducer = handleActions<IAreaState>({

    [ActionTypes.project.receiveProjects]: (state: IAreaState, action: Action<any>): IAreaState => {

        return actionWrapper(state, action, (newState: IAreaState) => {
            newState.project.projects = action.payload;
        });
    },

    [ActionTypes.project.receiveUpsert]: (state: IAreaState, action: Action<any>): IAreaState => {

        return actionWrapper(state, action, (newState: IAreaState) => {
            newState.project.projectUpsert = action.payload;
        });
    }

}, initialState());

export const rootReducer = combineReducers({
    areaState: areaStateReducer
});
