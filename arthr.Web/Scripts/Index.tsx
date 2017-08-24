import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { RouteProps } from 'react-router';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

import ReduxToastr from 'react-redux-toastr'

//import darkThemeBase from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';

import { ReduxContainerBuilder } from './Utility/Components/ReduxContainer';

import { ActionsDispatcherFactory, IAppActions } from './State/AppActions';
import { IAppState } from './State/IAppState';
import { rootReducer } from './State/AppReducer';

import { Breadcrumb } from './App/Navigation/Breadcrumb';
import { TopMenu } from './App/Navigation/TopMenu';
import { CreateProject, EditProject, ProjectIndex } from './App/Views/Projects';
import { CreateTask, EditTask, TaskIndex } from './App/Views/Tasks';
import { Index as Schedule } from './App/Views/Schedule';
import { Index as Notes } from './App/Views/Notes';
import { Index as MasterSites } from './App/Views/MasterSites';
import { Index as Timesheets } from './App/Views/Timesheets';
import { Index as Staff } from './App/Views/Staff';

injectTapEventPlugin();

class MyRoute extends Route<RouteProps> { }

interface IReduxComponentProps extends React.Props<Index> {
    appActions: IAppActions;
    appState: IAppState;
}

class Index extends React.Component<IReduxComponentProps, {}>{

    render() {

        const { appActions, appState } = this.props

        return (
            <MuiThemeProvider /*muiTheme={getMuiTheme(darkThemeBase)}*/>
                <Router>

                    <div>

                        <TopMenu />

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
                                </Switch>
                            </div>
                        </div>

                        <div className="container body-content">

                            <Switch>
                                <MyRoute exact path="/projects" render={props => <ProjectIndex key="ProjectIndex" appActions={appActions} appState={appState} {...props} />} />
                                <MyRoute exact path="/projects/create" render={props => <CreateProject appActions={appActions} appState={appState} />} />
                                <MyRoute exact path="/projects/edit/:projectId" render={props => <EditProject appActions={appActions} appState={appState} {...props} />} />
                                <MyRoute exact path="/tasks" render={props => <TaskIndex appActions={appActions} appState={appState} />} />
                                <MyRoute exact path="/tasks/create/:projectId?" render={props => <CreateTask appActions={appActions} appState={appState} {...props} />} />
                                <MyRoute exact path="/tasks/edit/:taskId" render={props => <EditTask appActions={appActions} appState={appState} {...props} />} />
                                <MyRoute exact path="/schedule" render={props => <Schedule />} />
                                <MyRoute exact path="/notes" render={props => <Notes />} />
                                <MyRoute path="/mastersites" render={props => <MasterSites />} />
                                <MyRoute path="/staff" render={props => <Staff />} />
                                <MyRoute path="/timesheets" render={props => <Timesheets />} />
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
                mapDispatchToProps: (dispatch: any) => ({
                    appActions: ActionsDispatcherFactory(dispatch)
                }),
                mapStateToProps: (state: any) => ({
                    appState: state.appState
                }),
                pageComponent: Index,
                rootReducer: rootReducer
            });
        };

        return (
            <ReduxWrapper />
        );
    }
}

ReactDOM.render(<IndexRedux />, document.getElementById('mountNode'));
