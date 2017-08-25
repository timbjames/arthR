// 3rd Party
import * as React from 'react';

// Utility
//import { } from '../../../Utility';
//import {  } from '../../../Utility/Helpers';

// Models
//import {  } from '../../../Models/ProjectUpsertViewModel';

// State
import { IAppActions, IAppState } from '../../../State';

// Module
import { IProjectUpsertFormProps, ProjectUpsertForm } from './ProjectUpsertForm';

export interface ICreateProjectProps {
    appActions: IAppActions;
    appState: IAppState;
}

export class CreateProject extends React.Component<ICreateProjectProps, {}> {

    componentDidMount() {

        const { appActions } = this.props;

        appActions.project.getProjectTemplateAsync();
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

                    <h2>Create</h2>

                    <ProjectUpsertForm {...upsertProps} />

                </div>

            </div>
        );
    }
}
