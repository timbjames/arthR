// 3rd Party
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

// Utility
//import { } from '../../../Utility';
//import {  } from '../../../Utility/Helpers';

// Models
//import {  } from '../../../Models/TaskUpsertViewModel';

// State
import { IAppActions, IAppState } from '../../../State';

// Module
import { ITaskUpsertFormProps, TaskUpsertForm } from './TaskUpsertForm';

export interface IEditTaskProps extends RouteComponentProps<{ taskId: number }> {
    appActions: IAppActions;
    appState: IAppState;
}

export class EditTask extends React.Component<IEditTaskProps, {}> {

    componentDidMount() {

        const { appActions, appState, match } = this.props;
        const { params } = match;

        appActions.task.getTaskAsync(params.taskId);
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

                    <h2>Edit</h2>

                    <TaskUpsertForm {...upsertProps} />

                </div>

            </div>
        );
    }
}
