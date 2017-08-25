import { Note } from './Note';
import { StaffOnProjects } from './StaffOnProjects';
import { StaffOnTask } from './StaffOnTask';
import { User } from './User';
import { Person } from './Person';

export class Staff extends Person {
    staffId: number;
    notes: Note[];
    staffOnProjects: StaffOnProjects[];
    staffOnTasks: StaffOnTask[];
    user: User;
    userId: number;
}
/*
    Debug Info:
    Unknown Types: Note, StaffOnProjects, StaffOnTask, User
*/
