import { MasterSite } from './MasterSite';
import { StaffOnProjects } from './StaffOnProjects';
import { AnthRTask } from './AnthRTask';

export class Project {
    alreadyBilled: boolean;
    completed: boolean;
    dateCompleted: Date;
    deadline: Date;
    deleted: boolean;
    hideFromTimesheet: boolean;
    isDeleted: boolean;
    projectId: number;
    masterSite: MasterSite;
    masterSiteId: number;
    name: string;
    onGoing: boolean;
    plannedStart: Date;
    quoted: number;
    staffOnProjects: StaffOnProjects[];
    tasks: AnthRTask[];
    username: string;
}
/*
    Debug Info:
    Unknown Types: MasterSite, StaffOnProjects, AnthRTask
*/
