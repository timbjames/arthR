import { AnthRTask } from './AnthRTask';
import { Staff } from './Staff';

export class Timesheet {
    alreadyBilled: boolean;
    anthRTask: AnthRTask;
    anthRTaskId: number;
    dateRecorded: Date;
    hideFromTimesheet: boolean;
    hourlyRate: number;
    hours: number;
    timesheetId: number;
    mins: number;
    quoted: number;
    staff: Staff;
    staffId: number;
}
/*
    Debug Info:
    Unknown Types: AnthRTask, Staff
*/
