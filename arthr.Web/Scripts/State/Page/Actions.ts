// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';

// Utility
import { IApiProgressFunctions } from '../../Utility';

// State
import { ActionTypes, IPageState } from './State';

class PageActions implements IApiProgressFunctions {

    private decrement = createAction(ActionTypes.decrement);

    public decrementProgress = () => (dispatch: Dispatch<IPageState>) => {
        dispatch(this.decrement());
    }

    private increment = createAction(ActionTypes.increment);

    public incrementProgress = () => (dispatch: Dispatch<IPageState>) => {
        dispatch(this.increment());
    }
}

const dispatcherFactory = (dispatch: Dispatch<IPageState>): IApiProgressFunctions => {

    const actions = new PageActions();

    return {
        decrementProgress: () => {
            dispatch(actions.decrementProgress());
        },
        incrementProgress: () => {
            dispatch(actions.incrementProgress());
        }
    }
};

export { dispatcherFactory as PageDispatcherFactory }
