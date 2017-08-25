// 3rd Party
import { handleActions, Action } from 'redux-actions';

// Utility
import { ReduxHelper } from '../../Utility';

// Models
import { AnthRTask, TaskUpsertViewModel } from '../../Models';

const actionTypes = {
    task: {
        receiveCollection: 'task.receive.collection',
        receiveUpsert: 'task.receive.upsert'
    }
};

export interface ITaskState {
    tasks: AnthRTask[];
    taskUpsert: TaskUpsertViewModel;
}

const initialState = (): ITaskState => {

    return {
        tasks: null,
        taskUpsert: null
    };
}

const actionWrapper = ReduxHelper.actionWrapper;

const taskReducer = handleActions<ITaskState>({

    [actionTypes.task.receiveCollection]: (state: ITaskState, action: Action<AnthRTask[]>): ITaskState => {

        return actionWrapper(state, action, (newState: ITaskState) => {
            newState.tasks = action.payload;
        });
    },

    [actionTypes.task.receiveUpsert]: (state: ITaskState, action: Action<TaskUpsertViewModel>): ITaskState => {

        return actionWrapper(state, action, (newState: ITaskState) => {
            newState.taskUpsert = action.payload;
        });
    }

}, initialState());

export {
    actionTypes as ActionTypes,
    taskReducer as TaskReducer
}
