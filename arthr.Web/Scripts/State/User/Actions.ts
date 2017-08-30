// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { IApiProgressFunctions } from '../../Utility';

// Models
import { User } from '../../Models'

// Services
import { UserService } from '../../Services'

// Page Actions
import { PageDispatcherFactory } from '../Page/Actions';

// Base
import { Actions } from '../Base/Actions';

// State
import { ActionTypes, IUserState } from './State';

export interface IUserActions {
    getUserAsync: () => void;
}

class UserActions extends Actions implements IUserActions {

    private onFailure = (error: any): void => {
        console.log(error);
    }

    public getUserAsync = () => (dispatch: Dispatch<IUserState>): void => {

        const onSuccess = (user: User) => {
            dispatch(this.receiveUser(user));
        };

        this.api.call(UserService.getLoggedInUser(), null, onSuccess, this.onFailure);
    }

    private receiveUser = createAction(ActionTypes.user.receive, (user: User) => user);
}

const dispatcherFactory = (dispatch: Dispatch<IUserState>, progressFunctions: IApiProgressFunctions): IUserActions => {

    const actions = new UserActions(progressFunctions);

    return {
        getUserAsync: () => {
            dispatch(actions.getUserAsync());
        }
    }
}

export { dispatcherFactory as UserDispatcherFactory }
