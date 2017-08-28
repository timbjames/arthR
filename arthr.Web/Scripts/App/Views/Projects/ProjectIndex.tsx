// 3rd Party
import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// Models
import { Project } from '../../../Models';

// Base
import { BaseComponent } from '../../BaseComponent';

export class ProjectIndex extends BaseComponent<{ deleteModalIsOpen: boolean, projectToDelete: Project }> {

    constructor(props) {
        super(props);

        this.state = {
            deleteModalIsOpen: false,
            projectToDelete: null
        };
    }

    componentDidMount() {

        const { appActions, appState } = this.props;
        appActions.project.reset();
        appActions.project.getProjectsAsync();
    }

    private handleDeleteOpen = (projectToDelete: Project) => (e: React.MouseEvent<HTMLAnchorElement>): void => {

        e.preventDefault();

        this.setState({ deleteModalIsOpen: true, projectToDelete });
    }

    private handleDeleteClose = (deleteAction: (projectToDelete: Project, callback: Function) => void, confirmed: boolean) => (): void => {

        if (confirmed) {

            deleteAction(this.state.projectToDelete, () => {
                this.setState({ deleteModalIsOpen: false, projectToDelete: null });
            });

            return;
        }

        this.setState({ deleteModalIsOpen: false, projectToDelete: null });
    }

    render() {

        const { appActions, appState } = this.props;
        const { deleteModalIsOpen, projectToDelete } = this.state

        const deleteActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleDeleteClose(appActions.project.deleteProjectAsync, false)}
            />,
            <FlatButton
                label="Confirm"
                primary={true}
                onClick={this.handleDeleteClose(appActions.project.deleteProjectAsync, true)}
            />
        ];

        return (

            <div>

                <div className="row">
                    <div className="col-xs-6">
                        <Link className="btn btn-xs btn-primary" to="/projects/create"><i className="glyphicon glyphicon-plus-sign"></i> Create New Project</Link>
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
                                        Project
                                    </th>
                                    <th>
                                        Staff On Project
                                    </th>
                                    <th>Current Tasks</th>
                                    <th className="text-right">Options</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    appState.project.projects
                                    && appState.project.projects.map((p, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{p.masterSite.name}</td>
                                                <td>{p.name}</td>
                                                <td>{p.staffOnProjects && p.staffOnProjects.map((s, i) => <span key={i}><Link to={`/staff/edit/${s.staff.staffId}`}>{s.staff.name}</Link>{' '}</span>)}</td>
                                                <td>{p.tasks ? p.tasks.filter(t => !t.dateCompleted).length : 0}</td>
                                                <td>
                                                    <div className="btn-group pull-right">
                                                        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><Link to={`/tasks/create/${p.projectId}`}>Add Task</Link></li>
                                                            <li><Link to={`/projects/edit/${p.projectId}`}>Edit</Link></li>
                                                            <li><a href="#" onClick={this.handleDeleteOpen(p)}>Delete</a></li>
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

                <Dialog title="Delete Project" actions={deleteActions} modal={true} open={deleteModalIsOpen}>
                    Are you sure you want to delete {projectToDelete && projectToDelete.name} ?
                </Dialog>

            </div>
        );
    }
}
