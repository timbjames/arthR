import { AnthRTask } from './AnthRTask';
import { Project } from './Project';
import { TodoItem } from './TodoItem';

export class Status {
    anthRTasks: AnthRTask[];
    description: string;
    glyphicon: string;
    hexColor: string;
    statusId: number;
    name: string;
    projects: Project[];
    showIcon: boolean;
    todoItems: TodoItem[];
}
/*
    Debug Info:
    Unknown Types: AnthRTask, Project, TodoItem
*/
