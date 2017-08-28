// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';

// Utility
import { Api, IApiProgressFunctions } from '../Utility';

import { IAppState } from './AppState';
import { IMasterSiteActions, MasterSiteDispatcherFactory } from './MasterSite/Actions';
import { INoteActions, NoteDispatcherFactory } from './Note/Actions';
import { PageDispatcherFactory } from './Page/Actions';
import { IProjectActions, ProjectDispatcherFactory } from './Project/Actions';
import { IStaffActions, StaffDispatcherFactory } from './Staff/Actions';
import { ITaskActions, TaskDispatcherFactory } from './Task/Actions';
import { IUserActions, UserDispatcherFactory } from './User/Actions';

export interface IAppActions {
    masterSite: IMasterSiteActions;
    note: INoteActions;
    project: IProjectActions;
    staff: IStaffActions;
    task: ITaskActions;
    user: IUserActions;
}

const actionsDispatcherFactory = (dispatch: Dispatch<IAppState>): IAppActions => {

    const pageActions = PageDispatcherFactory(dispatch);

    return {
        masterSite: MasterSiteDispatcherFactory(dispatch, pageActions),
        note: NoteDispatcherFactory(dispatch, pageActions),
        project: ProjectDispatcherFactory(dispatch, pageActions),
        staff: StaffDispatcherFactory(dispatch, pageActions),
        task: TaskDispatcherFactory(dispatch, pageActions),
        user: UserDispatcherFactory(dispatch, pageActions)
    }
}

export {
    actionsDispatcherFactory as ActionsDispatcherFactory
}
