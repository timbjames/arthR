// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { Api, IApiCallWithPayload } from '../Utility';

// Models
import { AnthRTask, Project, ProjectToolsViewModel, ProjectUpsertViewModel, TaskToolsViewModel, TaskUpsertViewModel } from '../Models';

import { IAppState } from './AppState';
import { IProjectActions, ProjectDispatcherFactory } from './Project/Actions';
import { ITaskActions, TaskDispatcherFactory } from './Task/Actions';

export interface IAppActions {
    project: IProjectActions;
    task: ITaskActions;
}

const actionsDispatcherFactory = (dispatch: Dispatch<IAppState>): IAppActions => {

    return {
        project: ProjectDispatcherFactory(dispatch),
        task: TaskDispatcherFactory(dispatch)
    }
}

export {
    actionsDispatcherFactory as ActionsDispatcherFactory
}
