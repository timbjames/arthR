"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var injectTapEventPlugin = require("react-tap-event-plugin");
var react_router_dom_1 = require("react-router-dom");
//import darkThemeBase from 'material-ui/styles/baseThemes/darkBaseTheme';
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var ReduxContainer_1 = require("./Utility/Components/ReduxContainer");
var AreaActions_1 = require("./State/AreaActions");
var AreaReducer_1 = require("./State/AreaReducer");
var TopMenu_1 = require("./App/Navigation/TopMenu");
var Projects_1 = require("./App/Views/Projects");
var Tasks_1 = require("./App/Views/Tasks");
var Schedule_1 = require("./App/Views/Schedule");
var Notes_1 = require("./App/Views/Notes");
var MasterSites_1 = require("./App/Views/MasterSites");
var Timesheets_1 = require("./App/Views/Timesheets");
var Staff_1 = require("./App/Views/Staff");
injectTapEventPlugin();
var MyRoute = (function (_super) {
    __extends(MyRoute, _super);
    function MyRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyRoute;
}(react_router_dom_1.Route));
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Index.prototype.render = function () {
        var _a = this.props, areaActions = _a.areaActions, areaState = _a.areaState;
        var getProjectIndex = function () {
            return React.createElement(Projects_1.ProjectIndex, { appActions: areaActions, appState: areaState });
        };
        return (React.createElement(MuiThemeProvider_1.default /*muiTheme={getMuiTheme(darkThemeBase)}*/, null,
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement("div", null,
                    React.createElement(TopMenu_1.TopMenu, null),
                    React.createElement("div", { className: "container body-content" },
                        React.createElement(react_router_dom_1.Switch, null,
                            React.createElement(MyRoute, { exact: true, path: "/projects" },
                                React.createElement(Projects_1.ProjectIndex, { appActions: areaActions, appState: areaState })),
                            React.createElement(MyRoute, { exact: true, path: "/projects/create" },
                                React.createElement(Projects_1.CreateProject, { appActions: areaActions, appState: areaState })),
                            React.createElement(MyRoute, { exact: true, path: "/tasks" },
                                React.createElement(Tasks_1.Index, null)),
                            React.createElement(MyRoute, { exact: true, path: "/schedule" },
                                React.createElement(Schedule_1.Index, null)),
                            React.createElement(MyRoute, { exact: true, path: "/notes" },
                                React.createElement(Notes_1.Index, null)),
                            React.createElement(MyRoute, { path: "/mastersites" },
                                React.createElement(MasterSites_1.Index, null)),
                            React.createElement(MyRoute, { path: "/staff" },
                                React.createElement(Staff_1.Index, null)),
                            React.createElement(MyRoute, { path: "/timesheets" },
                                React.createElement(Timesheets_1.Index, null))),
                        React.createElement("hr", null),
                        React.createElement("footer", null,
                            React.createElement("p", null, "\u00A9 2017 - React Typescript Redux .Net Core Website Starter Template")))))));
    };
    return Index;
}(React.Component));
var IndexRedux = (function (_super) {
    __extends(IndexRedux, _super);
    function IndexRedux() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexRedux.prototype.render = function () {
        var ReduxWrapper = function () {
            return ReduxContainer_1.ReduxContainerBuilder().NoneProps({
                mapDispatchToProps: function (dispatch) { return ({
                    areaActions: AreaActions_1.ActionsDispatcherFactory(dispatch)
                }); },
                mapStateToProps: function (state) { return ({
                    areaState: state.areaState
                }); },
                pageComponent: Index,
                rootReducer: AreaReducer_1.rootReducer
            });
        };
        return (React.createElement(ReduxWrapper, null));
    };
    return IndexRedux;
}(React.Component));
ReactDOM.render(React.createElement(IndexRedux, null), document.getElementById('mountNode'));
//# sourceMappingURL=Index.js.map