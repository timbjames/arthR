// 3rd Party
import { handleActions, Action } from 'redux-actions';

// Utility
import { ReduxHelper } from '../../Utility';

// Models
import { Timesheet, TimesheetUpsertViewModel } from '../../Models';

const actionTypes = {
    timesheet: {
        receiveCollection: 'timesheet.receive.collection',
        receiveUpsert: 'timesheet.receive.upsert'
    }
};

export interface ITimesheetState {
    timesheets: Timesheet[];
    timesheetUpsert: TimesheetUpsertViewModel;
}

const initialState = (): ITimesheetState => {

    return {
        timesheets: null,
        timesheetUpsert: null
    };
}

const actionWrapper = ReduxHelper.actionWrapper;

const timesheetReducer = handleActions<ITimesheetState>({

    [actionTypes.timesheet.receiveCollection]: (state: ITimesheetState, action: Action<Timesheet[]>): ITimesheetState => {

        return actionWrapper(state, action, (newState: ITimesheetState) => {
            newState.timesheets = action.payload;
        });
    },

    [actionTypes.timesheet.receiveUpsert]: (state: ITimesheetState, action: Action<TimesheetUpsertViewModel>): ITimesheetState => {

        return actionWrapper(state, action, (newState: ITimesheetState) => {
            newState.timesheetUpsert = action.payload;
        });
    }

}, initialState());

export {
    actionTypes as ActionTypes,
    timesheetReducer as TimesheetReducer
}
