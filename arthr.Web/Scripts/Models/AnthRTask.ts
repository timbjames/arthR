import { Project } from './Project';
import { StaffOnTask } from './StaffOnTask';
import { Status } from './Status';
import { Timesheet } from './Timesheet';

export class AnthRTask {
    agreedWith: string;
    anthRTaskId: number;
    dateCompleted: Date;
    deadline: Date;
    description: string;
    hideFromTimesheet: boolean;
    name: string;
    plannedStart: Date;
    priority: number;
    project: Project;
    projectId: number;
    requestedBy: string;
    staffOnTasks: StaffOnTask[];
    status: Status;
    statusId: number;
    timesheet: Timesheet[];
    username: string;
}
/*
    Debug Info:
    Unknown Types: Project, StaffOnTask, Status, Timesheet
*/
