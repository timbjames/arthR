import { combineReducers } from 'redux';
import { Action, createAction, handleActions } from 'redux-actions';

export interface IPersonViewModel {
    name: string;
}

export interface IPersonService {
    receivePerson: (person: IPersonViewModel) => void;
}

const actionTypes = {
    receivePerson: 'receivePerson'
};

class PersonService implements IPersonService {

    public receivePerson = createAction(actionTypes.receivePerson, (person: IPersonViewModel) => person);
}

export const PersonServiceFactory = (dispatch: any): IPersonService => {

    const actions = new PersonService();

    return {
        receivePerson: (person: IPersonViewModel) => {
            dispatch(actions.receivePerson(person));
        }
    };
}

const initialState = (): IPersonViewModel => {
    return {
        name: 'Tim'
    }
}

const personReducer = handleActions<IPersonViewModel>({

    [actionTypes.receivePerson]: (state: IPersonViewModel, action: Action<string>): IPersonViewModel => {

        return { name: action.payload };
    }

}, initialState());

const rootReducer = combineReducers({
    personState: personReducer
});
