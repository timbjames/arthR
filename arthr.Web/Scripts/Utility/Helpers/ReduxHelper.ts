import { Action } from 'redux-actions';

import { ObjectHelper } from '../../Utility/Helpers';
import { IAppState } from '../../State/AppState';

const actionWrapper = <TState>(state: TState,
    action: Action<any>,
    func: (newState: TState, action: Action<any>) => void) => {

    const newState = ObjectHelper.deepClone(state);
    func(newState, action);
    return newState;
};

const reduxHelper = {
    actionWrapper
};

export {
    reduxHelper as ReduxHelper
}
