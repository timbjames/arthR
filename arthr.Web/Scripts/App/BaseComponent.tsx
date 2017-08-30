import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { EventEmitter } from 'eventemitter3';

import { IAppActions, IAppState } from '../State';

export interface IAppProps {
    appActions: IAppActions;
    appState: IAppState;
    emitter: EventEmitter;
}

export class BaseComponent<S> extends React.Component<IAppProps, S> { }

interface IIndexOfIds {
    masterSiteId: number;
    noteId: number;
    projectId: number;
    staffId: number;
    taskId: number;
    userId: number;
}

export interface IRoutedAppProps extends RouteComponentProps<IIndexOfIds> {
    appActions: IAppActions;
    appState: IAppState;
    emitter: EventEmitter;
}

export class RoutedBaseComponent extends React.Component<IRoutedAppProps, {}> { }
