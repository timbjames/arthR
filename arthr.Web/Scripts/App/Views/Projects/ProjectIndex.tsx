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
            <div className="row">

                <div className="col-xs-12">

                    <table className="table table-hover table-with-navbar-dropdown">

                        <thead>
                            <tr>
                                <th>
                                    Site
                                </th>
                                <th>
                                    Project
                                </th>
                                <th>
                                    Staff On Project
                                </th>
                                <th>Current Tasks</th>
                                <th className="text-right">Options</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                appState.project.projects
                                && appState.project.projects.map((p, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{p.masterSite.name}</td>
                                            <td>{p.name}</td>
                                            <td>{p.staffOnProjects && p.staffOnProjects.map((s, i) => <span key={i}>{s}</span>)}</td>
                                            <td>{p.dateCompleted}</td>
                                            <td>
                                                <div className="btn-group pull-right">
                                                    <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                        <span className="glyphicon glyphicon-menu-hamburger"></span>
                                                    </button>
                                                    <ul className="dropdown-menu" role="menu">
                                                        <li><a href="">Create</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>

                    </table>

                </div>

            </div>
        );
    }
}
