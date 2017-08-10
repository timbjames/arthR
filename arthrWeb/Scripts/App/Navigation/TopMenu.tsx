import * as React from 'react';
import { Link } from 'react-router-dom';

export class TopMenu extends React.Component<{}, {}>{

    render() {

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
                            <img src="/images/anthr-logo.png" alt="anthR" />
                        </Link>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/tasks">Tasks</Link></li>
                            <li><Link to="/schedule">Schedule</Link></li>
                            <li><Link to="/notes">Notes</Link></li>
                            <li><Link to="/mastersites">Master Site</Link></li>
                            <li><Link to="/staff">Staff</Link></li>
                            <li><Link to="/timesheets">Timesheets</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true" style={{ paddingTop: 10, paddingBottom: 10 }}>
                                    <img className="gravatar" src="https://secure.gravatar.com/avatar/10247f791f5065a8e090804c1ecc1cea?s=30&amp;d=mm" title="Gravatar. if you don't have one, then added one for your work email!" />
                                        Hello, tim!
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/Identity/Logout">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
