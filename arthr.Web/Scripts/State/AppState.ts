// 3rd Party
import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';
import { reducer as toastrReducer } from 'react-redux-toastr'

// Models
import { AnthRTask, MasterSite, MasterSiteUpsertViewModel, Note, NoteUpsertViewModel, Project, ProjectToolsViewModel, ProjectUpsertViewModel, Staff, StaffUpsertViewModel, TaskToolsViewModel, TaskUpsertViewModel } from '../Models';

// Reducers
import { MasterSiteReducer } from './MasterSite/State';
import { NoteReducer } from './Note/State';
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
    masterSite: {
        masterSites: MasterSite[],
        masterSiteUpsert: MasterSiteUpsertViewModel
    },
    note: {
        notes: Note[],
        noteUpsert: NoteUpsertViewModel
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
    masterSite: MasterSiteReducer,
    note: NoteReducer,
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
