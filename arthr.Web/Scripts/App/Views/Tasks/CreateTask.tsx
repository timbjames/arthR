// 3rd Party
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

// Utility
//import { } from '../../../Utility';
//import {  } from '../../../Utility/Helpers';

// Models
//import {  } from '../../../Models/ProjectUpsertViewModel';

// State
import { IAppActions, IAppState } from '../../../State';

// Module
import { ITaskUpsertFormProps, TaskUpsertForm } from './TaskUpsertForm';

export interface ICreateTaskProps extends RouteComponentProps<{ projectId: number }> {
    appActions: IAppActions;
    appState: IAppState;
}

export class CreateTask extends React.Component<ICreateTaskProps, {}> {

    componentDidMount() {

        const { appActions, match } = this.props;
        const { params } = match;

        const projectId = params.projectId && params.projectId;

        appActions.task.getTaskTemplateAsync(projectId);
    }

    render() {

        const { appActions, appState } = this.props;

        const upsertProps: ITaskUpsertFormProps = {
            appActions,
            appState
        };

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Create</h2>

                    <TaskUpsertForm {...upsertProps} />

                </div>

            </div>
        );
    }
}
