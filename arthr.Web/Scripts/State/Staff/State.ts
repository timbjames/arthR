// 3rd Party
import { handleActions, Action } from 'redux-actions';

// Utility
import { ReduxHelper } from '../../Utility';

// Models
import { Staff, StaffUpsertViewModel } from '../../Models';

const actionTypes = {
    receiveCollection: 'staff.receive.collection',
    receiveUpsert: 'staff.receive.upsert'
};

export interface IStaffState {
    staffs: Staff[],
    staffUpsert: StaffUpsertViewModel;
}

const initialState = (): IStaffState => {

    return {
        staffs: null,
        staffUpsert: null
    };
}

const actionWrapper = ReduxHelper.actionWrapper;

const staffReducer = handleActions<IStaffState>({

    [actionTypes.receiveCollection]: (state: IStaffState, action: Action<Staff[]>): IStaffState => {

        return actionWrapper(state, action, (newState: IStaffState) => {
            newState.staffs = action.payload;
        });
    },

    [actionTypes.receiveUpsert]: (state: IStaffState, action: Action<StaffUpsertViewModel>): IStaffState => {

        return actionWrapper(state, action, (newState: IStaffState) => {
            newState.staffUpsert = action.payload;
        });
    }

}, initialState());

export {
    actionTypes as ActionTypes,
    staffReducer as StaffReducer
}
