// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { Api, IApiCallWithPayload } from '../../Utility';

// Models
import { Project, ProjectUpsertViewModel, AnthRTask, TaskUpsertViewModel } from '../../Models'

// Services
import { ProjectService, TaskService } from '../../Services'

// State
import { ActionTypes, ITaskState } from './State';

export interface ITaskActions {
    createTaskAsync: (task: AnthRTask) => void;
    editTaskAsync: (task: AnthRTask) => void;
    getTaskAsync: (taskId: number) => void;
    getTasksAsync: () => void;
    getTaskTemplateAsync: (projectId?: number) => void;
    receiveTaskUpsert: (upsert: TaskUpsertViewModel) => void;
}

class TaskActions implements ITaskActions {

    private onFailure = (error): void => {
        console.log(error);
    }

    public createTaskAsync = (task: AnthRTask) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Task Creation', 'Task Created');
            createHashHistory().push('/tasks');
        };
        Api(dispatch).call(TaskService.post(), task, onSuccess, this.onFailure);
    }

    public editTaskAsync = (task: AnthRTask) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Task Edit', 'Task Updated');
            createHashHistory().push('/tasks');
        };

        Api(dispatch).call(TaskService.put(), task, onSuccess, this.onFailure);
    }

    public getTaskAsync = (taskId: number) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (upsert: TaskUpsertViewModel) => {
            dispatch(this.receiveTaskUpsert(upsert));
        };

        Api(dispatch).call(TaskService.getById(taskId), null, onSuccess, this.onFailure);
    }

    public getTasksAsync = () => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (Tasks: AnthRTask[]) => {
            dispatch(this.receiveTasks(Tasks));
        };

        Api(dispatch).call(TaskService.get(), null, onSuccess, this.onFailure);
    }

    public getTaskTemplateAsync = (projectId?: number) => (dispatch: Dispatch<ITaskState>): void => {

        const onSuccess = (upsert: TaskUpsertViewModel) => {
            dispatch(this.receiveTaskUpsert(upsert));
        };

        // TODOxTJ: Need to try and get our Typewriter to generate API layer so we can pass null ids
        if (!projectId) {
            projectId = 0;
        }

        Api(dispatch).call(TaskService.getTemplate(projectId), null, onSuccess, this.onFailure);
    }

    private receiveTasks = createAction(ActionTypes.task.receiveCollection, (tasks: AnthRTask[]) => tasks);
    public receiveTaskUpsert = createAction(ActionTypes.task.receiveUpsert, (upsert: TaskUpsertViewModel) => upsert);
}

const dispatcherFactory = (dispatch: Dispatch<ITaskState>): ITaskActions => {

    const actions = new TaskActions();

    return {
        createTaskAsync: (task: AnthRTask) => {
            dispatch(actions.createTaskAsync(task));
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
        }
    }
}

export { dispatcherFactory as TaskDispatcherFactory }
