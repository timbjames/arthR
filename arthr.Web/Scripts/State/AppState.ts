// 3rd Party
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

// Models
import {
    AnthRTask,
    MasterSite,
    MasterSiteUpsertViewModel,
    Note,
    NoteUpsertViewModel,
    Project,
    ProjectToolsViewModel,
    ProjectUpsertViewModel,
    Staff,
    StaffUpsertViewModel,
    TaskToolsViewModel,
    TaskUpsertViewModel,
    User
} from '../Models';

// Reducers
import { MasterSiteReducer } from './MasterSite/State';
import { NoteReducer } from './Note/State';
import { PageReducer } from './Page/State';
import { ProjectReducer } from './Project/State';
import { StaffReducer } from './Staff/State';
import { TaskReducer } from './Task/State';
import { UserReducer } from './User/State';

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
    page: {
        processing: boolean,
        threadCount: number
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
    },
    user: {
        loggedInUser: User
    }
}

const areaStateReducer = combineReducers({
    masterSite: MasterSiteReducer,
    note: NoteReducer,
    page: PageReducer,
    project: ProjectReducer,
    staff: StaffReducer,
    task: TaskReducer,
    user: UserReducer
});

const rootReducer = combineReducers({
    appState: areaStateReducer,
    toastr: toastrReducer
});

export {
    rootReducer as RootReducer
}
