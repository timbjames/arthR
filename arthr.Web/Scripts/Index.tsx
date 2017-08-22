import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { RouteProps } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import darkThemeBase from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';

import { ReduxContainerBuilder } from './Utility/Components/ReduxContainer';

import { ActionsDispatcherFactory, IAreaActions } from './Services/AreaActions';
import { IAreaState } from './Services/IAreaState';
import { rootReducer } from './Services/AreaReducer';

import { TopMenu } from './App/Navigation/TopMenu';
import { Index as Projects } from './App/Views/Projects';
import { Index as Tasks } from './App/Views/Tasks';
import { Index as Schedule } from './App/Views/Schedule';
import { Index as Notes } from './App/Views/Notes';
import { Index as MasterSites } from './App/Views/MasterSites';
import { Index as Timesheets } from './App/Views/Timesheets';
import { Index as Staff } from './App/Views/Staff';

injectTapEventPlugin();

class MyRoute extends Route<RouteProps> { }

interface IReduxComponentProps extends React.Props<Index> {
    areaActions: IAreaActions;
    areaState: IAreaState;
}

class Index extends React.Component<IReduxComponentProps, {}>{

    render() {

        const { areaActions, areaState } = this.props

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkThemeBase)}>
                <Router>

                    <div>

                        <TopMenu />

                        <div className="container body-content">

                            <Switch>
                                <MyRoute exact path="/projects" component={ Projects } />
                                <MyRoute exact path="/tasks" component={ Tasks } />
                                <MyRoute exact path="/schedule" component={ Schedule } />
                                <MyRoute exact path="/notes" component={ Notes } />
                                <MyRoute path="/mastersites" component={ MasterSites } />
                                <MyRoute path="/staff" component={ Staff } />
                                <MyRoute path="/timesheets" component={ Timesheets } />
                            </Switch>

                            <hr />

                            <footer>
                                <p>&copy; 2017 - React Typescript Redux .Net Core Website Starter Template</p>
                            </footer>

                        </div>

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
                    areaActions: ActionsDispatcherFactory(dispatch)
                }),
                mapStateToProps: (state: any) => ({
                    areaState: state.areaState
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
