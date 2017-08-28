// 3rd Party
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Base
import { BaseComponent } from '../BaseComponent';

export class TopMenu extends BaseComponent<{}>{

    componentDidMount() {

        const { appActions } = this.props;
        appActions.user.getUserAsync();
    }

    render() {

        const { appState } = this.props;
        const loggedInUser = appState.user.loggedInUser;

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">
                            <i className="glyphicon glyphicon-home"></i>
                            <img src="/images/anthr-logo-new.png" alt="anthR" />
                        </Link>
                    </div>
                    {
                        loggedInUser
                            ? (
                                <div className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav">
                                        <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/tasks">Tasks</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/schedule">Schedule</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/notes">Notes</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/mastersites">Master Site</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/staff">Staff</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/timesheets">Timesheets</NavLink></li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="dropdown">
                                            <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true" style={{ paddingTop: 10, paddingBottom: 10 }}>
                                                <img className="gravatar" src={`https://secure.gravatar.com/avatar/${loggedInUser.gravatarHash}?s=30&amp;d=mm`} title="Gravatar. if you don't have one, then added one for your work email!" />
                                                Hello, {loggedInUser.name}!
                                        <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="/Identity/Logout">Logout</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            )
                            : (
                                <div className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="/Identity/Logout">Logout</a></li>
                                    </ul>
                                </div>
                            )
                    }
                </div>
            </nav>
        );
    }
}
