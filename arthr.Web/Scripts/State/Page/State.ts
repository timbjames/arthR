// 3rd Party
import { handleActions, Action } from 'redux-actions';

// Utility
import { ReduxHelper } from '../../Utility';

const actionTypes = {
    increment: 'page.increment',
    decrement: 'page.decrement'
};

export interface IPageState {
    processing: boolean;
    threadCount: number;
}

const initialState = () => {
    return {
        processing: true,
        threadCount: 0
    };
};

const actionWrapper = ReduxHelper.actionWrapper;

const pageReducer = handleActions<IPageState>({

    [actionTypes.decrement]: (state: IPageState, action: Action<void>): IPageState => {

        return actionWrapper(state, action, (newState: IPageState) => {
            newState.threadCount--;
            newState.processing = newState.threadCount > 0;
        });
    },

    [actionTypes.increment]: (state: IPageState, action: Action<void>): IPageState => {

        return actionWrapper(state, action, (newState: IPageState) => {
            newState.threadCount++;
            newState.processing = newState.threadCount > 0;
        });
    }

}, initialState());

export {
    actionTypes as ActionTypes,
    pageReducer as PageReducer
}
