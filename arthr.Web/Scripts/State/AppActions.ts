// 3rd Party
import { Dispatch } from 'redux';

// Utility
import { Api } from '../Utility';

import { IAppState } from './AppState';
import { IMasterSiteActions, MasterSiteDispatcherFactory } from './MasterSite/Actions';
import { INoteActions, NoteDispatcherFactory } from './Note/Actions';
import { IProjectActions, ProjectDispatcherFactory } from './Project/Actions';
import { IStaffActions, StaffDispatcherFactory } from './Staff/Actions';
import { ITaskActions, TaskDispatcherFactory } from './Task/Actions';

export interface IAppActions {
    masterSite: IMasterSiteActions;
    note: INoteActions;
    project: IProjectActions;
    staff: IStaffActions;
    task: ITaskActions;
}

const actionsDispatcherFactory = (dispatch: Dispatch<IAppState>): IAppActions => {

    return {
        masterSite: MasterSiteDispatcherFactory(dispatch),
        note: NoteDispatcherFactory(dispatch),
        project: ProjectDispatcherFactory(dispatch),
        staff: StaffDispatcherFactory(dispatch),
        task: TaskDispatcherFactory(dispatch)
    }
}

export {
    actionsDispatcherFactory as ActionsDispatcherFactory
}
