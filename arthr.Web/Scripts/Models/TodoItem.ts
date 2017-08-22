import { MasterSite } from './MasterSite';
import { Status } from './Status';

export class TodoItem {
    deadline: Date;
    description: string;
    isDone: boolean;
    masterSite: MasterSite;
    masterSiteId: number;
    priority: number;
    status: Status;
    statusId: number;
    title: string;
    todoItemId: number;
}
/*
    Debug Info:
    Unknown Types: MasterSite, Status
*/
