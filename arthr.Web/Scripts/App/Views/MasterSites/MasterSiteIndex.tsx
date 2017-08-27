// 3rd Party
import * as React from 'react';
import { Link } from 'react-router-dom';

// Base
import { BaseComponent } from '../../BaseComponent';

export class MasterSiteIndex extends BaseComponent<{}> {

    componentDidMount() {

        const { appActions, appState } = this.props;

        appActions.masterSite.getMasterSitesAsync();
    }

    render() {

        const { appState } = this.props;

        return (

            <div>

                <div className="row">
                    <div className="col-xs-6">
                        <Link className="btn btn-xs btn-primary" to="/mastersites/create"><i className="glyphicon glyphicon-plus-sign"></i> Create New MasterSite</Link>
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
                                        LB Id
                                    </th>
                                    <th>Has VAT</th>
                                    <th className="text-right">Options</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    appState.masterSite.masterSites
                                    && appState.masterSite.masterSites.map((p, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{p.name}</td>
                                                <td>{p.liveBidMasterSiteId}</td>
                                                <td>{p.hasVAT ? 'Yes' : 'No'}</td>
                                                <td>
                                                    <div className="btn-group pull-right">
                                                        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><Link to={`/mastersites/edit/${p.masterSiteId}`}>Edit</Link></li>
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
