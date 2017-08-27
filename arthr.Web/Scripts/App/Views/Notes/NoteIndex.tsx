// 3rd Party
import * as React from 'react';
import { Link } from 'react-router-dom';

// Base
import { BaseComponent } from '../../BaseComponent';

export class NoteIndex extends BaseComponent<{}> {

    componentDidMount() {

        const { appActions, appState } = this.props;

        appActions.note.getNotesAsync();
    }

    render() {

        const { appState } = this.props;

        return (

            <div>

                <div className="row">
                    <div className="col-xs-6">
                        <Link className="btn btn-xs btn-primary" to="/notes/create"><i className="glyphicon glyphicon-plus-sign"></i> Create New Note</Link>
                    </div>
                </div>

                <div className="row">

                    <div className="col-xs-12">

                        <table className="table table-hover table-with-navbar-dropdown">

                            <thead>
                                <tr>
                                    <th>
                                        Title
                                    </th>
                                    <th className="text-right">Options</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    appState.note.notes
                                    && appState.note.notes.map((p, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{p.title}</td>
                                                <td>
                                                    <div className="btn-group pull-right">
                                                        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><Link to={`/notes/edit/${p.noteId}`}>Edit</Link></li>
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
