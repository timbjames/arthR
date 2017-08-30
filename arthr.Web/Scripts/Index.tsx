import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { RouteProps } from 'react-router';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import { EventEmitter } from 'eventemitter3';

import ReduxToastr from 'react-redux-toastr'

//import darkThemeBase from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import CircularProgress from 'material-ui/CircularProgress';

import { ReduxContainerBuilder } from './Utility/Components/ReduxContainer';

import { ActionsDispatcherFactory, IAppActions } from './State/AppActions';
import { IAppState, RootReducer } from './State/AppState';

import { Breadcrumb } from './App/Navigation/Breadcrumb';
import { TopMenu } from './App/Navigation/TopMenu';

import { Home } from './App/Views/Home/Home';
import { CreateProject, EditProject, ProjectIndex } from './App/Views/Projects';
import { CreateTask, EditTask, TaskIndex } from './App/Views/Tasks';
import { Index as Schedule } from './App/Views/Schedule';
import { CreateNote, EditNote, NoteIndex } from './App/Views/Notes';
import { CreateMasterSite, EditMasterSite, MasterSiteIndex } from './App/Views/MasterSites';
import { Index as Timesheets } from './App/Views/Timesheets';
import { CreateStaff, EditStaff, StaffIndex } from './App/Views/Staff';

injectTapEventPlugin();

class MyRoute extends Route<RouteProps> { }

interface IReduxComponentProps extends React.Props<Index> {
    appActions: IAppActions;
    appState: IAppState;
    emitter: EventEmitter;
}

class Index extends React.Component<IReduxComponentProps, {}>{

    componentDidMount() {

        this.props.emitter.on('WOW', () => {
             console.log('wow');
        });
    }

    render() {

        const { appActions, appState } = this.props

        return (
            <MuiThemeProvider /*muiTheme={getMuiTheme(darkThemeBase)}*/>
                <Router>

                    <div>

                        <TopMenu {...this.props} />

                        <div className="row breadcrumb-row">
                            <div className="col-sm-12">

                                <Switch>

                                    <MyRoute exact path="/" render={props => <Breadcrumb active="Home" />} />

                                    <MyRoute exact path="/projects" render={props => <Breadcrumb active="Projects" />} />
                                    <MyRoute exact path="/projects/create" render={props => <Breadcrumb active="Create Project" links={[{ href: '/projects', name: 'Projects' }]} />} />
                                    <MyRoute exact path="/projects/edit/:projectId" render={props => <Breadcrumb active="Edit Project" links={[{ href: '/projects', name: 'Projects' }]} />} />

                                    <MyRoute exact path="/tasks" render={props => <Breadcrumb active="Tasks" />} />
                                    <MyRoute exact path="/tasks/create/:projectId" render={props => <Breadcrumb active="Create Task" links={[{ href: '/tasks', name: 'Tasks' }]} />} />
                                    <MyRoute exact path="/tasks/edit/:taskId" render={props => <Breadcrumb active="Edit Task" links={[{ href: '/tasks', name: 'Tasks' }]} />} />

                                    <MyRoute exact path="/staff" render={props => <Breadcrumb active="Staff" />} />
                                    <MyRoute exact path="/staff/create" render={props => <Breadcrumb active="Create Staff" links={[{ href: '/staff', name: 'Staff' }]} />} />
                                    <MyRoute exact path="/staff/edit/:staffId" render={props => <Breadcrumb active="Edit Staff" links={[{ href: '/staff', name: 'Staff' }]} />} />

                                    <MyRoute exact path="/notes" render={props => <Breadcrumb active="Notes" />} />
                                    <MyRoute exact path="/notes/create" render={props => <Breadcrumb active="Create Note" links={[{ href: '/notes', name: 'Notes' }]} />} />
                                    <MyRoute exact path="/notes/edit/:noteId" render={props => <Breadcrumb active="Edit Note" links={[{ href: '/notes', name: 'Notes' }]} />} />

                                    <MyRoute exact path="/mastersites" render={props => <Breadcrumb active="Master Site" />} />
                                    <MyRoute exact path="/mastersites/create" render={props => <Breadcrumb active="Create Master Site" links={[{ href: '/mastersites', name: 'Master Site' }]} />} />
                                    <MyRoute exact path="/mastersites/edit/:masterSiteId" render={props => <Breadcrumb active="Edit Master Site" links={[{ href: '/mastersites', name: 'Master Site' }]} />} />

                                </Switch>

                            </div>
                        </div>

                        <div className="container body-content">

                            <Switch>

                                <MyRoute exact path="/" render={props => <Home {...this.props} {...props} />} />

                                <MyRoute exact path="/projects" render={props => <ProjectIndex key="ProjectIndex" {...this.props} {...props} />} />
                                <MyRoute exact path="/projects/create" render={props => <CreateProject {...this.props} />} />
                                <MyRoute exact path="/projects/edit/:projectId" render={props => <EditProject {...this.props} {...props} />} />

                                <MyRoute exact path="/tasks" render={props => <TaskIndex {...this.props} />} />
                                <MyRoute exact path="/tasks/create/:projectId?" render={props => <CreateTask {...this.props} {...props} />} />
                                <MyRoute exact path="/tasks/edit/:taskId" render={props => <EditTask {...this.props} {...props} />} />

                                <MyRoute exact path="/schedule" render={props => <Schedule />} />

                                <MyRoute exact path="/notes" render={props => <NoteIndex {...this.props} />} />
                                <MyRoute exact path="/notes/create" render={props => <CreateNote {...this.props} />} />
                                <MyRoute exact path="/notes/edit/:noteId" render={props => <EditNote {...this.props} {...props} />} />

                                <MyRoute exact path="/mastersites" render={props => <MasterSiteIndex {...this.props} />} />
                                <MyRoute exact path="/mastersites/create" render={props => <CreateMasterSite {...this.props} />} />
                                <MyRoute exact path="/mastersites/edit/:masterSiteId" render={props => <EditMasterSite {...this.props} {...props} />} />

                                <MyRoute exact path="/staff" render={props => <StaffIndex {...this.props} />} />
                                <MyRoute exact path="/staff/create" render={props => <CreateStaff {...this.props} />} />
                                <MyRoute exact path="/staff/edit/:staffId" render={props => <EditStaff {...this.props} {...props} />} />

                                <MyRoute exact path="/timesheets" render={props => <Timesheets />} />

                            </Switch>

                            <hr />

                            <footer>
                                <p>&copy; 2017 - React Typescript Redux .Net Core Website Starter Template</p>
                            </footer>

                        </div>

                        <ReduxToastr
                            timeOut={4000}
                            newestOnTop={false}
                            preventDuplicates
                            transitionIn="fadeIn"
                            transitionOut="fadeOut"
                            progressBar />

                        {
                            appState.page.processing &&
                            (
                                <div id="ajaxProgress">
                                    <CircularProgress size={80} />
                                </div>
                            )
                        }

                    </div>

                </Router>

            </MuiThemeProvider>
        );
    }
}

class IndexRedux extends React.Component<{}, {}>{

    render() {

        const ReduxWrapper = () => {
            return ReduxContainerBuilder().NoneProps({
                mapDispatchToProps: (dispatch: Dispatch<IAppState>) => ({
                    appActions: ActionsDispatcherFactory(dispatch),
                    emitter: new EventEmitter()
                }),
                mapStateToProps: (state: { appState: IAppState }) => ({
                    appState: state.appState
                }),
                pageComponent: Index,
                rootReducer: RootReducer
            });
        };

        return (
            <ReduxWrapper />
        );
    }
}

ReactDOM.render(<IndexRedux />, document.getElementById('mountNode'));
