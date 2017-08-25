import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { IAppActions, IAppState } from '../State';

export interface IAppProps {
    appActions: IAppActions;
    appState: IAppState;
}

export class BaseComponent extends React.Component<IAppProps, { }> {}

interface IIndexOfIds {
    projectId: number;
    taskId: number;
    staffId: number;
    userId: number;
}

export interface IRoutedAppProps extends RouteComponentProps<IIndexOfIds> {
    appActions: IAppActions;
    appState: IAppState;
}

export class RoutedBaseComponent extends React.Component<IRoutedAppProps, {}> { }
