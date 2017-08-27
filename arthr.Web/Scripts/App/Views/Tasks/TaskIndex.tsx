// 3rd Party
import * as React from 'react';
import { Link } from 'react-router-dom';

// Base
import { BaseComponent } from '../../BaseComponent';

export class TaskIndex extends BaseComponent<{}> {

    componentDidMount() {

        const { appActions, appState } = this.props;

        appActions.task.getTasksAsync();
    }

    render() {

        const { appActions, appState } = this.props;

        return (

            <div>

                <div className="row">
                    <div className="col-xs-6">
                        <Link className="btn btn-xs btn-primary" to="/tasks/create"><i className="glyphicon glyphicon-plus-sign"></i> Create New Task</Link>
                    </div>
                </div>

                <div className="row">

                    <div className="col-xs-12">

                        <table className="table table-hover table-with-navbar-dropdown">

                            <thead>
                                <tr>
                                    <th>
                                        Task
                                    </th>
                                    <th>
                                        Planned Start
                                    </th>
                                    <th>
                                        Deadline
                                    </th>
                                    <th>Staff On Task</th>
                                    <th className="text-right">Options</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    appState.task.tasks
                                    && appState.task.tasks.map((t, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <i>
                                                        {t.project.masterSite.name}
                                                        <br />
                                                        <strong>{t.project.name}</strong>
                                                    </i>
                                                    <br />
                                                    {t.name}
                                                </td>
                                                <td>
                                                    {t.plannedStart}
                                                </td>
                                                <td>
                                                    {t.deadline}
                                                </td>
                                                <td>
                                                    {t.staffOnTasks && t.staffOnTasks.map((s, i) => <span key={i}>{s.staff.name}</span>)}
                                                </td>
                                                <td>
                                                    <div className="btn-group pull-right">
                                                        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><Link to={`/tasks/edit/${t.anthRTaskId}`}>Edit</Link></li>
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
