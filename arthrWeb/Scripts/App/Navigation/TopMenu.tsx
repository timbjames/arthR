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
                        <Link to="/" className="navbar-brand">React Typescript Redux</Link>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/one">One</Link></li>
                            <li><Link to="/one/two">One Two</Link></li>
                            <li><Link to="/one/two/1">One Two with id</Link></li>
                            <li><Link to="/two">Two</Link></li>
                            <li><Link to="/redux">Redux Test</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
