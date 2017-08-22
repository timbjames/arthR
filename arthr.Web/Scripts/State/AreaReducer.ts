import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';

import { ActionTypes } from './ActionTypes';
import { IAreaState } from './IAreaState';

const initialState = (): IAreaState => {
    return {
        project: {
            project: null,
            projectTools: null,
            projectUpsert: null
        }
    };
}

const areaStateReducer = handleActions<IAreaState>({

    [ActionTypes.project.receiveUpsert, (state: IAreaState, action: Action) =>
{
    
}]

}, initialState());

export const rootReducer = combineReducers({
    areaState: areaStateReducer
});
