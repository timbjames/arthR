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
                    </div>
                </div>
            </nav>
        );
    }
}
