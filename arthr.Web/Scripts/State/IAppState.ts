import { Project, ProjectToolsViewModel, ProjectUpsertViewModel, AnthRTask, TaskToolsViewModel, TaskUpsertViewModel } from '../Models';

export interface IAppState {
    project: {
        project: Project,
        projects: Project[],
        projectTools: ProjectToolsViewModel,
        projectUpsert: ProjectUpsertViewModel
    },
    task: {
        task: AnthRTask,
        tasks: AnthRTask[],
        taskTools: TaskToolsViewModel,
        taskUpsert: TaskUpsertViewModel
    }
}
