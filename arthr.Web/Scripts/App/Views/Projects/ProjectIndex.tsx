// 3rd Party
import * as React from 'react';
import { Link } from 'react-router-dom';

// Base
import { BaseComponent } from '../../BaseComponent';

export class ProjectIndex extends BaseComponent<{}> {

    componentDidMount() {

        const { appActions, appState } = this.props;

        appActions.project.getProjectsAsync();
    }

    render() {

        const { appState } = this.props;

        return (

            <div>

                <div className="row">
                    <div className="col-xs-6">
                        <Link className="btn btn-xs btn-primary" to="/projects/create"><i className="glyphicon glyphicon-plus-sign"></i> Create New Project</Link>
                    </div>
                </div>

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
                                                <td>{p.staffOnProjects && p.staffOnProjects.map((s, i) => <span key={i}><Link to={`/staff/edit/${s.staff.staffId}`}>{s.staff.name}</Link>{' '}</span>)}</td>
                                                <td>{p.tasks ? p.tasks.filter(t => !t.dateCompleted).length : 0}</td>
                                                <td>
                                                    <div className="btn-group pull-right">
                                                        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><Link to={`/tasks/create/${p.projectId}`}>Add Task</Link></li>
                                                            <li><Link to={`/projects/edit/${p.projectId}`}>Edit</Link></li>
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

            </div>
        );
    }
}
