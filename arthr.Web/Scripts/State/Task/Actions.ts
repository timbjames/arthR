// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { IApiProgressFunctions } from '../../Utility';

// Models
import { AnthRTask, TaskUpsertViewModel } from '../../Models'

// Services
import { TaskService } from '../../Services'

// Page Actions
import { PageDispatcherFactory } from '../Page/Actions';

// Base
import { Actions } from '../Base/Actions';

// State
import { ActionTypes, ITaskState } from './State';

export interface ITaskActions {
    completeTaskAsync: (taskId: number, callback: Function) => void;
    createTaskAsync: (task: AnthRTask) => void;
    deleteTaskAsync: (task: AnthRTask, callback: Function) => void;
    editTaskAsync: (task: AnthRTask) => void;
    getTaskAsync: (taskId: number) => void;
    getTasksAsync: () => void;
    getTaskTemplateAsync: (projectId?: number) => void;
    receiveTaskUpsert: (upsert: TaskUpsertViewModel) => void;
    reset: () => void;
}

class TaskActions extends Actions implements ITaskActions {

    private onFailure = (error: any): void => {
        console.log(error);
    }

    public completeTaskAsync = (taskId: number, callback: Function) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = () => {
            toastr.success('Tasks', 'Task Completed');
            dispatch(this.getTasksAsync());
        };

        this.api.call(TaskService.complete(taskId), null, onSuccess, this.onFailure);
    }

    public createTaskAsync = (task: AnthRTask) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Task Creation', 'Task Created');
            createHashHistory().push('/tasks');
        };
        this.api.call(TaskService.post(), task, onSuccess, this.onFailure);
    }

    public deleteTaskAsync = (task: AnthRTask, callback: Function) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = () => {
            toastr.success('Task Deletion', 'Task Deleted');
            callback();
            dispatch(this.getTasksAsync());
        };

        this.api.call(TaskService.delete(task.anthRTaskId), null, onSuccess, this.onFailure);
    }

    public editTaskAsync = (task: AnthRTask) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Task Edit', 'Task Updated');
            createHashHistory().push('/tasks');
        };

        this.api.call(TaskService.put(), task, onSuccess, this.onFailure);
    }

    public getTaskAsync = (taskId: number) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (upsert: TaskUpsertViewModel) => {
            dispatch(this.receiveTaskUpsert(upsert));
        };

        this.api.call(TaskService.getById(taskId), null, onSuccess, this.onFailure);
    }

    public getTasksAsync = () => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (Tasks: AnthRTask[]) => {
            dispatch(this.receiveTasks(Tasks));
        };

        this.api.call(TaskService.get(), null, onSuccess, this.onFailure);
    }

    public getTaskTemplateAsync = (projectId?: number) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (upsert: TaskUpsertViewModel) => {
            dispatch(this.receiveTaskUpsert(upsert));
        };

        // TODOxTJ: Need to try and get our Typewriter to generate API layer so we can pass null ids
        if (!projectId) {
            projectId = 0;
        }

        this.api.call(TaskService.getTemplate(projectId), null, onSuccess, this.onFailure);
    }

    private receiveTasks = createAction(ActionTypes.task.receiveCollection, (tasks: AnthRTask[]) => tasks);
    public receiveTaskUpsert = createAction(ActionTypes.task.receiveUpsert, (upsert: TaskUpsertViewModel) => upsert);
    public reset = () => (dispatch: Dispatch<ITaskState>): void => {
        dispatch(this.receiveTasks(null));
    }
}

const dispatcherFactory = (dispatch: Dispatch<ITaskState>, progressFunctions: IApiProgressFunctions): ITaskActions => {

    const actions = new TaskActions(progressFunctions);

    return {
        completeTaskAsync: (taskId: number, callback: Function) => {
            dispatch(actions.completeTaskAsync(taskId, callback));
        },
        createTaskAsync: (task: AnthRTask) => {
            dispatch(actions.createTaskAsync(task));
        },
        deleteTaskAsync: (task: AnthRTask, callback: Function) => {
            dispatch(actions.deleteTaskAsync(task, callback));
        },
        editTaskAsync: (task: AnthRTask) => {
            dispatch(actions.editTaskAsync(task));
        },
        getTaskAsync: (taskId: number) => {
            dispatch(actions.getTaskAsync(taskId));
        },
        getTasksAsync: () => {
            dispatch(actions.getTasksAsync());
        },
        getTaskTemplateAsync: (projectId?: number) => {
            dispatch(actions.getTaskTemplateAsync(projectId));
        },
        receiveTaskUpsert: (upsert: TaskUpsertViewModel) => {
            dispatch(actions.receiveTaskUpsert(upsert));
        },
        reset: () => {
            dispatch(actions.reset());
        }
    }
}

export { dispatcherFactory as TaskDispatcherFactory }
