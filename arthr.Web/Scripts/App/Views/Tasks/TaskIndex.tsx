// 3rd Party
import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// Utility
import { DateHelper } from '../../../Utility/Helpers';

// Models
import { AnthRTask } from '../../../Models';

// Base
import { BaseComponent } from '../../BaseComponent';

export class TaskIndex extends BaseComponent<{ completeModalIsOpen: boolean, deleteModalIsOpen: boolean, taskToAction: AnthRTask }> {

    constructor(props) {
        super(props);

        this.state = {
            completeModalIsOpen: false,
            deleteModalIsOpen: false,
            taskToAction: null
        };
    }

    componentDidMount() {

        const { appActions, appState } = this.props;

        appActions.task.getTasksAsync();
    }

    private handleCompleteOpen = (taskToAction: AnthRTask) => (e: React.MouseEvent<HTMLAnchorElement>): void => {

        e.preventDefault();

        this.setState({ completeModalIsOpen: true, taskToAction });
    }

    private handleCompleteTask = (completeAction: (taskId: number, callback: Function) => void, confirmed: boolean) => (): void => {

    }

    private handleDeleteOpen = (taskToAction: AnthRTask) => (e: React.MouseEvent<HTMLAnchorElement>): void => {

        e.preventDefault();

        this.setState({ deleteModalIsOpen: true, taskToAction });
    }

    private handleDeleteClose = (deleteAction: (taskToDelete: AnthRTask, callback: Function) => void, confirmed: boolean) => (): void => {

        if (confirmed) {

            deleteAction(this.state.taskToAction, () => {
                this.setState({ deleteModalIsOpen: false, taskToAction: null });
            });

            return;
        }

        this.setState({ deleteModalIsOpen: false, taskToAction: null });
    }

    render() {

        const { appActions, appState } = this.props;
        const { completeModalIsOpen, deleteModalIsOpen, taskToAction } = this.state

        const completeActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleCompleteTask(appActions.task.completeTaskAsync, false)}
            />,
            <FlatButton
                label="Confirm"
                primary={true}
                onClick={this.handleCompleteTask(appActions.task.completeTaskAsync, true)}
            />
        ];

        const deleteActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleDeleteClose(appActions.task.deleteTaskAsync, false)}
            />,
            <FlatButton
                label="Confirm"
                primary={true}
                onClick={this.handleDeleteClose(appActions.task.deleteTaskAsync, true)}
            />
        ];

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
                                                    {DateHelper.dateConverter(t.plannedStart).toStandardDateDisplay()}
                                                </td>
                                                <td>
                                                    {DateHelper.dateConverter(t.deadline).toStandardDateDisplay()}
                                                </td>
                                                <td>
                                                    {t.staffOnTasks && t.staffOnTasks.map((s, i) => <span key={i}><Link to={`/staff/edit/${s.staff.staffId}`}>{s.staff.name}</Link>{' '}</span>)}
                                                </td>
                                                <td>
                                                    <div className="btn-group pull-right">
                                                        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><Link to="">Add Staff</Link></li>
                                                            <li><Link to="">Allocate Time</Link></li>
                                                            <li><Link to="">Time Allocated (0)</Link></li>
                                                            <li className="divider"></li>
                                                            <li><Link to={`/tasks/edit/${t.anthRTaskId}`}>Edit</Link></li>
                                                            <li><a onClick={this.handleDeleteOpen(t)} href="#">Delete</a></li>
                                                            <li><a onClick={this.handleCompleteOpen(t)} href="#">Complete</a></li>
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

                <Dialog title="Complete Task" actions={completeActions} modal={true} open={completeModalIsOpen}>
                    Are you sure you want to delete {taskToAction && taskToAction.name} ?
                </Dialog>

                <Dialog title="Delete Task" actions={deleteActions} modal={true} open={deleteModalIsOpen}>
                    Are you sure you want to delete {taskToAction && taskToAction.name} ?
                </Dialog>

            </div>
        );
    }
}
