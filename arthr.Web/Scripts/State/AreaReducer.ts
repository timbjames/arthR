import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';

import { IAreaState } from './IAreaState';

const initialState = (): IAreaState => {
    return {
        name: ''
    };
}

const areaStateReducer = handleActions<IAreaState>({

    'TEST': (state: IAreaState, action: Action<string>): IAreaState => {

        return { name: action.payload };
    }

}, initialState());

export const rootReducer = combineReducers({
    areaState: areaStateReducer
});
