import { Project, ProjectToolsViewModel, ProjectUpsertViewModel } from '../Models';

export interface IAreaState {
    project: {
        project: Project,
        projects: Project[],
        projectTools: ProjectToolsViewModel,
        projectUpsert: ProjectUpsertViewModel
    }
}
