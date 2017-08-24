// 3rd Party
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { Api, IApiCallWithPayload } from '../Utility';

// Models
import { Project, ProjectUpsertViewModel, AnthRTask, TaskUpsertViewModel } from '../Models'

// Services
import { ProjectService, TaskService } from '../Services'

// State
import { ActionTypes } from '../State';

export interface IAppActions {

    // Project
    createProjectAsync: (project: Project) => void;
    editProjectAsync: (project: Project) => void;
    getProjectAsync: (projectId: number) => void;
    getProjectsAsync: () => void;
    getProjectTemplateAsync: () => void;
    receiveProjectUpsert: (upsert: ProjectUpsertViewModel) => void;

    // Task
    createTaskAsync: (task: AnthRTask) => void;
    editTaskAsync: (task: AnthRTask) => void;
    getTaskAsync: (taskId: number) => void;
    getTasksAsync: () => void;
    getTaskTemplateAsync: (projectId?: number) => void;
    receiveTaskUpsert: (upsert: TaskUpsertViewModel) => void;
}

class AppActions implements IAppActions {

    private onFailure = (error): void => {
        console.log(error);
    }

    // Project

    public createProjectAsync = (project: Project) => (dispatch: any): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Project Creation', 'Project Created');
            createHashHistory().push('/projects');
        };
        Api(dispatch).call(ProjectService.post(), project, onSuccess, this.onFailure);
    }

    public editProjectAsync = (project: Project) => (dispatch: any): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Project Edit', 'Project Updated');
            createHashHistory().push('/projects');
        };

        Api(dispatch).call(ProjectService.put(), project, onSuccess, this.onFailure);
    }

    public getProjectAsync = (projectId: number) => (dispatch: any): void => {

        const onSuccess = (upsert: ProjectUpsertViewModel) => {
            dispatch(this.receiveProjectUpsert(upsert));
        };

        Api(dispatch).call(ProjectService.getById(projectId), null, onSuccess, this.onFailure);
    }

    public getProjectsAsync = () => (dispatch: any): void => {

        const onSuccess = (projects: Project[]) => {
            dispatch(this.receiveProjects(projects));
        };

        Api(dispatch).call(ProjectService.get(false, ''), null, onSuccess, this.onFailure);
    }

    public getProjectTemplateAsync = () => (dispatch: any): void => {

        const onSuccess = (upsert: ProjectUpsertViewModel) => {
            dispatch(this.receiveProjectUpsert(upsert));
        };

        Api(dispatch).call(ProjectService.getTemplate(), null, onSuccess, this.onFailure);
    }

    private receiveProjects = createAction(ActionTypes.project.receiveCollection, (projects: Project[]) => projects);
    public receiveProjectUpsert = createAction(ActionTypes.project.receiveUpsert, (upsert: ProjectUpsertViewModel) => upsert);

    // Task
    public createTaskAsync = (task: AnthRTask) => (dispatch: any): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Task Creation', 'Task Created');
            createHashHistory().push('/tasks');
        };
        Api(dispatch).call(TaskService.post(), task, onSuccess, this.onFailure);
    }

    public editTaskAsync = (task: AnthRTask) => (dispatch: any): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Task Edit', 'Task Updated');
            createHashHistory().push('/tasks');
        };

        Api(dispatch).call(TaskService.put(), task, onSuccess, this.onFailure);
    }

    public getTaskAsync = (taskId: number) => (dispatch: any): void => {

        const onSuccess = (upsert: TaskUpsertViewModel) => {
            dispatch(this.receiveTaskUpsert(upsert));
        };

        Api(dispatch).call(TaskService.getById(taskId), null, onSuccess, this.onFailure);
    }

    public getTasksAsync = () => (dispatch: any): void => {

        const onSuccess = (Tasks: AnthRTask[]) => {
            dispatch(this.receiveTasks(Tasks));
        };

        Api(dispatch).call(TaskService.get(), null, onSuccess, this.onFailure);
    }

    public getTaskTemplateAsync = (projectId?: number) => (dispatch: any): void => {

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

const actionsDispatcherFactory = (dispatch: any): IAppActions => {

    const localActions = new AppActions();

    return {
        // Projects
        createProjectAsync: (project: Project) => {
            dispatch(localActions.createProjectAsync(project));
        },
        editProjectAsync: (project: Project) => {
            dispatch(localActions.editProjectAsync(project));
        },
        getProjectAsync: (projectId: number) => {
            dispatch(localActions.getProjectAsync(projectId));
        },
        getProjectsAsync: () => {
            dispatch(localActions.getProjectsAsync());
        },
        getProjectTemplateAsync: () => {
            dispatch(localActions.getProjectTemplateAsync());
        },
        receiveProjectUpsert: (upsert: ProjectUpsertViewModel) => {
            dispatch(localActions.receiveProjectUpsert(upsert));
        },
        // Tasks
        createTaskAsync: (task: AnthRTask) => {
            dispatch(localActions.createTaskAsync(task));
        },
        editTaskAsync: (task: AnthRTask) => {
            dispatch(localActions.editTaskAsync(task));
        },
        getTaskAsync: (taskId: number) => {
            dispatch(localActions.getTaskAsync(taskId));
        },
        getTasksAsync: () => {
            dispatch(localActions.getTasksAsync());
        },
        getTaskTemplateAsync: (projectId?: number) => {
            dispatch(localActions.getTaskTemplateAsync(projectId));
        },
        receiveTaskUpsert: (upsert: TaskUpsertViewModel) => {
            dispatch(localActions.receiveTaskUpsert(upsert));
        }
    }
}

export {
    actionsDispatcherFactory as ActionsDispatcherFactory
}
