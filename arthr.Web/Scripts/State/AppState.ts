// 3rd Party
import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';
import { reducer as toastrReducer } from 'react-redux-toastr'

// Models
import { AnthRTask, Project, ProjectToolsViewModel, ProjectUpsertViewModel, Staff, StaffUpsertViewModel, TaskToolsViewModel, TaskUpsertViewModel } from '../Models';

// Reducers
import { ProjectReducer } from './Project/State';
import { StaffReducer } from './Staff/State';
import { TaskReducer } from './Task/State';

export interface IAppState {
    project: {
        project: Project,
        projects: Project[],
        projectTools: ProjectToolsViewModel,
        projectUpsert: ProjectUpsertViewModel
    },
    staff: {
        staffs: Staff[],
        staffUpsert: StaffUpsertViewModel
    },
    task: {
        task: AnthRTask,
        tasks: AnthRTask[],
        taskTools: TaskToolsViewModel,
        taskUpsert: TaskUpsertViewModel
    }
}

const areaStateReducer = combineReducers({
    project: ProjectReducer,
    staff: StaffReducer,
    task: TaskReducer
});

const rootReducer = combineReducers({
    appState: areaStateReducer,
    toastr: toastrReducer
});

export {
    rootReducer as RootReducer
}
