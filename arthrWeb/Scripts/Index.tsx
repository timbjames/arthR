import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouteProps } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ReduxContainerBuilder } from './Utility/Components/ReduxContainer';

import { ActionsDispatcherFactory, IAreaActions } from './Models/AreaActions';
import { IAreaState } from './Models/IAreaState';
import { rootReducer } from './Models/AreaReducer';

import { TopMenu } from './App/Navigation/TopMenu';
import { Index as HomeIndex } from './App/Views/Home/Index';
import { One, OneTwo } from './App/Views/Home/One';
import { Two } from './App/Views/Home/Two';
import { Three } from './App/Views/Home/Three';

class MyRoute extends Route<RouteProps> { }

interface IReduxComponentProps extends React.Props<Index> {
    areaActions: IAreaActions;
    areaState: IAreaState;
}

class Index extends React.Component<IReduxComponentProps, {}>{

    render() {

        const { areaActions, areaState } = this.props

        return (
            <Router>

                <div>

                    <TopMenu />

                    <div className="container body-content">

                        <Switch>
                            <MyRoute exact path="/" component={ HomeIndex } />
                            <MyRoute exact path="/one" component={One} />
                            <MyRoute exact path="/one/two" component={OneTwo} />
                            <MyRoute exact path="/one/two/:id?" component={OneTwo} />
                            <MyRoute path="/two" component={ Two } />
                            <MyRoute path="/redux" component={Three(areaActions, areaState)} />
                        </Switch>

                        <hr />

                        <footer>
                            <p>&copy; 2017 - React Typescript Redux .Net Core Website Starter Template</p>
                        </footer>

                    </div>

                </div>

            </Router>
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
