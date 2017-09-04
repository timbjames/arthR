// 3rd Party
import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// Utility
import { DateHelper } from '../../../Utility/Helpers';

// Models
import { Timesheet } from '../../../Models';

// Base
import { BaseComponent } from '../../BaseComponent';

export class TimesheetIndex extends BaseComponent<{ completeModalIsOpen: boolean, deleteModalIsOpen: boolean, timesheetToAction: Timesheet }> {

    constructor(props) {
        super(props);

        this.state = {
            completeModalIsOpen: false,
            deleteModalIsOpen: false,
            timesheetToAction: null
        };
    }

    componentDidMount() {

        const { appActions, appState } = this.props;

        appActions.timesheet.getTimesheetsAsync();
    }

    private handleCompleteOpen = (timesheetToAction: Timesheet) => (e: React.MouseEvent<HTMLAnchorElement>): void => {

        e.preventDefault();

        this.setState({ completeModalIsOpen: true, timesheetToAction });
    }

    private handleCompleteTimesheet = (completeAction: (timesheetId: number, callback: Function) => void, confirmed: boolean) => (): void => {

    }

    private handleDeleteOpen = (timesheetToAction: Timesheet) => (e: React.MouseEvent<HTMLAnchorElement>): void => {

        e.preventDefault();

        this.setState({ deleteModalIsOpen: true, timesheetToAction });
    }

    private handleDeleteClose = (deleteAction: (timesheetToDelete: Timesheet, callback: Function) => void, confirmed: boolean) => (): void => {

        if (confirmed) {

            deleteAction(this.state.timesheetToAction, () => {
                this.setState({ deleteModalIsOpen: false, timesheetToAction: null });
            });

            return;
        }

        this.setState({ deleteModalIsOpen: false, timesheetToAction: null });
    }

    render() {

        const { appActions, appState } = this.props;
        const { completeModalIsOpen, deleteModalIsOpen, timesheetToAction } = this.state

        const completeActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleCompleteTimesheet(appActions.timesheet.completeTimesheetAsync, false)}
            />,
            <FlatButton
                label="Confirm"
                primary={true}
                onClick={this.handleCompleteTimesheet(appActions.timesheet.completeTimesheetAsync, true)}
            />
        ];

        const deleteActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleDeleteClose(appActions.timesheet.deleteTimesheetAsync, false)}
            />,
            <FlatButton
                label="Confirm"
                primary={true}
                onClick={this.handleDeleteClose(appActions.timesheet.deleteTimesheetAsync, true)}
            />
        ];

        return (

            <div>

                <div className="row">
                    <div className="col-xs-6">
                        <Link className="btn btn-xs btn-primary" to="/timesheets/create"><i className="glyphicon glyphicon-plus-sign"></i> Create New Timesheet</Link>
                    </div>
                </div>

                <div className="row">

                    <div className="col-xs-12">

                        <table className="table table-hover table-with-navbar-dropdown">

                            <thead>
                                <tr>
                                    <th>
                                        Timesheet
                                    </th>
                                    <th>
                                        Planned Start
                                    </th>
                                    <th>
                                        Deadline
                                    </th>
                                    <th>Staff On Timesheet</th>
                                    <th className="text-right">Options</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    appState.timesheet.timesheets
                                    && appState.timesheet.timesheets.map((t, i) => {
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
                                                    {t.staffOnTimesheets && t.staffOnTimesheets.map((s, i) => <span key={i}><Link to={`/staff/edit/${s.staff.staffId}`}>{s.staff.name}</Link>{' '}</span>)}
                                                </td>
                                                <td>
                                                    <div className="btn-group pull-right">
                                                        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><Link to="">Add Staff</Link></li>
                                                            <li><Link to={`/timesheet/create/${t.anthRTimesheetId}`}>Allocate Time</Link></li>
                                                            <li><Link to="">Time Allocated (0)</Link></li>
                                                            <li className="divider"></li>
                                                            <li><Link to={`/timesheets/edit/${t.anthRTimesheetId}`}>Edit</Link></li>
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

            </div>
        );
    }
}
