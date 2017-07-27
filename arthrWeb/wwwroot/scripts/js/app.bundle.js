webpackJsonp([0],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(4);
var ReactDOM = __webpack_require__(85);
var react_router_dom_1 = __webpack_require__(64);
var ReduxContainer_1 = __webpack_require__(268);
var AreaActions_1 = __webpack_require__(288);
var AreaReducer_1 = __webpack_require__(330);
var TopMenu_1 = __webpack_require__(331);
var Index_1 = __webpack_require__(332);
var One_1 = __webpack_require__(333);
var Two_1 = __webpack_require__(334);
var Three_1 = __webpack_require__(335);
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


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
var redux_1 = __webpack_require__(45);
var react_redux_1 = __webpack_require__(121);
var thunk = __webpack_require__(126);
var ProviderWithStore = (function (_super) {
    __extends(ProviderWithStore, _super);
    function ProviderWithStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.storeBuilder = function (rootReducer) {
            var enhancer = redux_1.compose(redux_1.applyMiddleware(thunk.default), window.devToolsExtension ? window.devToolsExtension() : function (f) { return f; });
            var store = redux_1.createStore(rootReducer, {}, enhancer);
            return store;
        };
        return _this;
    }
    ProviderWithStore.prototype.render = function () {
        var rootReducer = this.props.rootReducer;
        var store = this.storeBuilder(rootReducer);
        return (React.createElement(react_redux_1.Provider, { store: store }, this.props.children));
    };
    return ProviderWithStore;
}(React.Component));
var ReduxContainer = (function (_super) {
    __extends(ReduxContainer, _super);
    function ReduxContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReduxContainer.prototype.render = function () {
        var _a = this.props, mapDispatchToProps = _a.mapDispatchToProps, mapStateToProps = _a.mapStateToProps, pageComponent = _a.pageComponent, rootReducer = _a.rootReducer;
        // ReSharper disable once InconsistentNaming
        var AppContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(pageComponent);
        return (React.createElement(ProviderWithStore, { rootReducer: rootReducer },
            React.createElement(AppContainer, null)));
    };
    return ReduxContainer;
}(React.Component));
var ReduxContainerWith = (function (_super) {
    __extends(ReduxContainerWith, _super);
    function ReduxContainerWith() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReduxContainerWith.prototype.render = function () {
        var _a = this.props, mapDispatchToProps = _a.mapDispatchToProps, mapStateToProps = _a.mapStateToProps, pageComponent = _a.pageComponent, pageProps = _a.pageProps, rootReducer = _a.rootReducer;
        // ReSharper disable once InconsistentNaming
        var AppContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(pageComponent);
        return (React.createElement(ProviderWithStore, { rootReducer: rootReducer },
            React.createElement(AppContainer, __assign({}, pageProps))));
    };
    return ReduxContainerWith;
}(React.Component));
// ReSharper disable once InconsistentNaming
exports.ReduxContainerBuilder = function () {
    function reduxContainerFuncWith(reduxContainerProps) {
        // ReSharper disable once InconsistentNaming
        var TheReduxContainer = ReduxContainerWith;
        return React.createElement(TheReduxContainer, __assign({}, reduxContainerProps));
    }
    return {
        NoneProps: function (reduxContainerProps) {
            return React.createElement(ReduxContainer, __assign({}, reduxContainerProps));
        },
        WithProps: reduxContainerFuncWith
    };
};


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(71);
var AreaActions = (function () {
    function AreaActions() {
        var _this = this;
        this.doSomething = function () { return function (dispatch) {
            dispatch(_this.receive('tim'));
        }; };
        this.receive = redux_actions_1.createAction('TEST', function (name) { return name; });
    }
    return AreaActions;
}());
var actionsDispatcherFactory = function (dispatch) {
    var localActions = new AreaActions();
    return {
        doSomething: function () {
            dispatch(localActions.doSomething());
        },
        receive: function (name) {
            dispatch(localActions.receive(name));
        }
    };
};
exports.ActionsDispatcherFactory = actionsDispatcherFactory;


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(45);
var redux_actions_1 = __webpack_require__(71);
var initialState = function () {
    return {
        name: ''
    };
};
var areaStateReducer = redux_actions_1.handleActions({
    'TEST': function (state, action) {
        return { name: action.payload };
    }
}, initialState());
exports.rootReducer = redux_1.combineReducers({
    areaState: areaStateReducer
});


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(4);
var react_router_dom_1 = __webpack_require__(64);
var TopMenu = (function (_super) {
    __extends(TopMenu, _super);
    function TopMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopMenu.prototype.render = function () {
        return (React.createElement("nav", { className: "navbar navbar-inverse navbar-fixed-top" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "navbar-header" },
                    React.createElement("button", { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse" },
                        React.createElement("span", { className: "sr-only" }, "Toggle navigation"),
                        React.createElement("span", { className: "icon-bar" }),
                        React.createElement("span", { className: "icon-bar" }),
                        React.createElement("span", { className: "icon-bar" })),
                    React.createElement(react_router_dom_1.Link, { to: "/", className: "navbar-brand" }, "React Typescript Redux")),
                React.createElement("div", { className: "navbar-collapse collapse" },
                    React.createElement("ul", { className: "nav navbar-nav" },
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/one" }, "One")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/one/two" }, "One Two")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/one/two/1" }, "One Two with id")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/two" }, "Two")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/redux" }, "Redux Test")))))));
    };
    return TopMenu;
}(React.Component));
exports.TopMenu = TopMenu;


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
exports.Index = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Index Page"),
        React.createElement("p", null, "A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.")));
};


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
exports.One = function (props) {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Page One")));
};
exports.OneTwo = function (props) {
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "Page One Two ",
            props.match.params && props.match.params.id)));
};


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
exports.Two = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Page Two")));
};


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
exports.Three = function (areaActions, areaState) { return function () {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Redux Tester"),
        React.createElement("h1", null, areaState.name),
        React.createElement("button", { onClick: function () { areaActions.doSomething(); } }, "Click Me")));
}; };


/***/ })

},[142]);
//# sourceMappingURL=app.bundle.js.map