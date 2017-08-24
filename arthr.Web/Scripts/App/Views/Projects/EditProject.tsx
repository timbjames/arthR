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
import { IProjectUpsertFormProps, ProjectUpsertForm } from './ProjectUpsertForm';

export interface IEditProjectProps extends RouteComponentProps<{ projectId: number }> {
    appActions: IAppActions;
    appState: IAppState;
}

export class EditProject extends React.Component<IEditProjectProps, {}> {

    componentDidMount() {

        const { appActions, appState, match } = this.props;
        const { params } = match;

        appActions.getProjectAsync(params.projectId);
    }

    render() {

        const { appActions, appState } = this.props;

        const upsertProps: IProjectUpsertFormProps = {
            appActions,
            appState
        };

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Edit</h2>

                    <ProjectUpsertForm {...upsertProps} />

                </div>

            </div>
        );
    }
}
