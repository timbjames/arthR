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
var react_router_dom_1 = require("react-router-dom");
var ReduxContainer_1 = require("./Utility/Components/ReduxContainer");
var AreaActions_1 = require("./Models/AreaActions");
var AreaReducer_1 = require("./Models/AreaReducer");
var TopMenu_1 = require("./App/Navigation/TopMenu");
var Index_1 = require("./App/Views/Home/Index");
var One_1 = require("./App/Views/Home/One");
var Two_1 = require("./App/Views/Home/Two");
var Three_1 = require("./App/Views/Home/Three");
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
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement(TopMenu_1.TopMenu, null),
                React.createElement("div", { className: "container body-content" },
                    React.createElement(react_router_dom_1.Switch, null,
                        React.createElement(MyRoute, { exact: true, path: "/", component: Index_1.Index }),
                        React.createElement(MyRoute, { exact: true, path: "/one", component: One_1.One }),
                        React.createElement(MyRoute, { exact: true, path: "/one/two", component: One_1.OneTwo }),
                        React.createElement(MyRoute, { exact: true, path: "/one/two/:id?", component: One_1.OneTwo }),
                        React.createElement(MyRoute, { path: "/two", component: Two_1.Two }),
                        React.createElement(MyRoute, { path: "/redux", component: Three_1.Three(areaActions, areaState) })),
                    React.createElement("hr", null),
                    React.createElement("footer", null,
                        React.createElement("p", null, "\u00A9 2017 - React Typescript Redux .Net Core Website Starter Template"))))));
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