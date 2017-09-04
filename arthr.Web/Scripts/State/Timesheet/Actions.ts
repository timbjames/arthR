// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { IApiProgressFunctions } from '../../Utility';

// Models
import { Timesheet, TimesheetUpsertViewModel } from '../../Models'

// Services
import { TimesheetService } from '../../Services'

// Page Actions
import { PageDispatcherFactory } from '../Page/Actions';

// Base
import { Actions } from '../Base/Actions';

// State
import { ActionTypes, ITimesheetState } from './State';

export interface ITimesheetActions {
    createTaskAsync: (task: Timesheet) => void;
    deleteTaskAsync: (task: Timesheet, callback: Function) => void;
    editTaskAsync: (task: Timesheet) => void;
    getTaskAsync: (taskId: number) => void;
    getTasksAsync: () => void;
    receiveTaskUpsert: (upsert: TimesheetUpsertViewModel) => void;
    reset: () => void;
}

class TimesheetActions extends Actions implements ITimesheetActions {

    private onFailure = (error: any): void => {
        console.log(error);
    }

    public createTaskAsync = (task: Timesheet) => (dispatch: Dispatch<ITimesheetState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Timesheet Creation', 'Timesheet Created');
            createHashHistory().push('/Timesheets');
        };
        this.api.call(TimesheetService.post(), task, onSuccess, this.onFailure);
    }

    public deleteTaskAsync = (task: Timesheet, callback: Function) => (dispatch: Dispatch<ITimesheetState>): void => {

        const onSuccess = () => {
            toastr.success('Timesheet Deletion', 'Timesheet Deleted');
            callback();
            dispatch(this.getTasksAsync());
        };

        this.api.call(TimesheetService.delete(task.anthRTaskId), null, onSuccess, this.onFailure);
    }

    public editTaskAsync = (task: Timesheet) => (dispatch: Dispatch<ITimesheetState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Timesheet Edit', 'Timesheet Updated');
            createHashHistory().push('/Timesheets');
        };

        this.api.call(TimesheetService.put(), task, onSuccess, this.onFailure);
    }

    public getTaskAsync = (taskId: number) => (dispatch: Dispatch<ITimesheetState>): void => {

        const onSuccess = (upsert: TimesheetUpsertViewModel) => {
            dispatch(this.receiveTaskUpsert(upsert));
        };

        this.api.call(TimesheetService.getById(taskId, 0), null, onSuccess, this.onFailure);
    }

    public getTasksAsync = () => (dispatch: Dispatch<ITimesheetState>): void => {

        const onSuccess = (Tasks: Timesheet[]) => {
            dispatch(this.receiveTasks(Tasks));
        };

        this.api.call(TimesheetService.get(), null, onSuccess, this.onFailure);
    }

    private receiveTasks = createAction(ActionTypes.timesheet.receiveCollection, (tasks: Timesheet[]) => tasks);
    public receiveTaskUpsert = createAction(ActionTypes.timesheet.receiveUpsert, (upsert: TimesheetUpsertViewModel) => upsert);
    public reset = () => (dispatch: Dispatch<ITimesheetState>): void => {
        dispatch(this.receiveTasks(null));
    }
}

const dispatcherFactory = (dispatch: Dispatch<ITimesheetState>, progressFunctions: IApiProgressFunctions): ITimesheetActions => {

    const actions = new TimesheetActions(progressFunctions);

    return {
        createTaskAsync: (task: Timesheet) => {
            dispatch(actions.createTaskAsync(task));
        },
        deleteTaskAsync: (task: Timesheet, callback: Function) => {
            dispatch(actions.deleteTaskAsync(task, callback));
        },
        editTaskAsync: (task: Timesheet) => {
            dispatch(actions.editTaskAsync(task));
        },
        getTaskAsync: (taskId: number) => {
            dispatch(actions.getTaskAsync(taskId));
        },
        getTasksAsync: () => {
            dispatch(actions.getTasksAsync());
        },
        receiveTaskUpsert: (upsert: TimesheetUpsertViewModel) => {
            dispatch(actions.receiveTaskUpsert(upsert));
        },
        reset: () => {
            dispatch(actions.reset());
        }
    }
}

export { dispatcherFactory as TimesheetDispatcherFactory }
