import { Person } from './Person';

export class User extends Person {
    created: Date;
    deleted: boolean;
    lastLogin: Date;
    password: string;
    requiresPasswordReset: boolean;
    salt: string;
    userId: number;
    username: string;
}
/*
    Debug Info:
    Unknown Types: 
*/
