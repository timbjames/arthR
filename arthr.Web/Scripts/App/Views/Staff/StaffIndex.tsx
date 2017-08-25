// 3rd Party
import * as React from 'react';
import { Link } from 'react-router-dom';

// Base
import { BaseComponent } from '../../BaseComponent';

export class StaffIndex extends BaseComponent {

    componentDidMount() {

        const { appActions, appState } = this.props;

        appActions.staff.getStaffsAsync();
    }

    render() {

        const { appState } = this.props;

        return (

            <div>

                <div className="row">
                    <div className="col-xs-6">
                        <Link className="btn btn-xs btn-primary" to="/staff/create"><i className="glyphicon glyphicon-plus-sign"></i> Create New Staff</Link>
                    </div>
                </div>

                <div className="row">

                    <div className="col-xs-12">

                        <table className="table table-hover table-with-navbar-dropdown">

                            <thead>
                                <tr>
                                    <th>
                                        Gravatar
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th className="text-right">Options</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    appState.staff.staffs
                                    && appState.staff.staffs.map((p, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>N/A</td>
                                                <td>{p.name}</td>
                                                <td>{p.email}</td>
                                                <td>
                                                    <div className="btn-group pull-right">
                                                        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><Link to={`/staff/edit/${p.staffId}`}>Edit</Link></li>
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
