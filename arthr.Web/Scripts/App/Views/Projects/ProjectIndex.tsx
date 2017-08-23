// 3rd Party
import * as React from 'react';
import 'whatwg-fetch';

// Utility
import { Api, IApiCallWithPayload } from '../../../Utility';

// Models
import { Project } from '../../../Models/Project';

// Services
import { ProjectService } from '../../../Services';

// State
import { IAreaActions, IAreaState } from '../../../State';

export interface IProjectIndexProps {
    appActions: IAreaActions;
    appState: IAreaState;
}

export class ProjectIndex extends React.Component<IProjectIndexProps, {}> {

    componentDidMount() {

        const { appActions, appState } = this.props;

        appActions.getProjectsAsync();
    }

    render() {

        const { appActions, appState } = this.props;

        return (
            <div>
                <h1>Projects</h1>

                <table>

                </table>
                {
                    appState.project.projects && appState.project.projects.map((p, i) => <span key={i}>{p.name}</span>)
                }

            </div>
        );
    }
}
