import { MasterSite } from './MasterSite';
import { Status } from './Status';

export class TodoItemEditModel {
    deadline: Date;
    description: string;
    isDone: boolean;
    mastersiteId: number;
    masterSites: MasterSite[];
    priority: number;
    status: Status[];
    statusId: number;
    title: string;
}
/*
    Debug Info:
    Unknown Types: MasterSite, Status
*/
