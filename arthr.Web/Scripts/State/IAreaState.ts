import { Project, ProjectToolsViewModel, ProjectUpsertViewModel } from '../Models';

export interface IAreaState {
    project: {
        project: Project,
        projectTools: ProjectToolsViewModel,
        projectUpsert: ProjectUpsertViewModel
    }
}
