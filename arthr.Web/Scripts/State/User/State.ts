// 3rd Party
import { handleActions, Action } from 'redux-actions';

// Utility
import { ReduxHelper } from '../../Utility';

// Models
import { User } from '../../Models';

const actionTypes = {
    user: {
        receive: 'user.receive.user'
    }
};

export interface IUserState {
    loggedInUser: User;
}

const initialState = (): IUserState => {

    return {
        loggedInUser: null
    };
}

const actionWrapper = ReduxHelper.actionWrapper;

const userReducer = handleActions<IUserState>({

    [actionTypes.user.receive]: (state: IUserState, action: Action<User>): IUserState => {

        return actionWrapper(state, action, (newState: IUserState) => {
            newState.loggedInUser = action.payload;
        });
    }

}, initialState());

export {
    actionTypes as ActionTypes,
    userReducer as UserReducer
}
