webpackJsonp([0],{

/***/ 289:
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
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(17);
var injectTapEventPlugin = __webpack_require__(197);
var react_router_dom_1 = __webpack_require__(119);
var darkBaseTheme_1 = __webpack_require__(420);
var MuiThemeProvider_1 = __webpack_require__(203);
var getMuiTheme_1 = __webpack_require__(215);
var ReduxContainer_1 = __webpack_require__(495);
var AreaActions_1 = __webpack_require__(514);
var AreaReducer_1 = __webpack_require__(556);
var TopMenu_1 = __webpack_require__(557);
var Projects_1 = __webpack_require__(558);
var Tasks_1 = __webpack_require__(559);
var Schedule_1 = __webpack_require__(560);
var Notes_1 = __webpack_require__(561);
var MasterSites_1 = __webpack_require__(562);
var Timesheets_1 = __webpack_require__(563);
var Staff_1 = __webpack_require__(564);
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
        return (React.createElement(MuiThemeProvider_1.default, { muiTheme: getMuiTheme_1.default(darkBaseTheme_1.default) },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement("div", null,
                    React.createElement(TopMenu_1.TopMenu, null),
                    React.createElement("div", { className: "container body-content" },
                        React.createElement(react_router_dom_1.Switch, null,
                            React.createElement(MyRoute, { exact: true, path: "/projects", component: Projects_1.Index }),
                            React.createElement(MyRoute, { exact: true, path: "/tasks", component: Tasks_1.Index }),
                            React.createElement(MyRoute, { exact: true, path: "/schedule", component: Schedule_1.Index }),
                            React.createElement(MyRoute, { exact: true, path: "/notes", component: Notes_1.Index }),
                            React.createElement(MyRoute, { path: "/mastersites", component: MasterSites_1.Index }),
                            React.createElement(MyRoute, { path: "/staff", component: Staff_1.Index }),
                            React.createElement(MyRoute, { path: "/timesheets", component: Timesheets_1.Index })),
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


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(92);

var _colorManipulator = __webpack_require__(36);

var _spacing = __webpack_require__(202);

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: _colors.cyan700,
    primary2Color: _colors.cyan700,
    primary3Color: _colors.grey600,
    accent1Color: _colors.pinkA200,
    accent2Color: _colors.pinkA400,
    accent3Color: _colors.pinkA100,
    textColor: _colors.fullWhite,
    secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
    clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
  }
};

/***/ }),

/***/ 495:
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
var React = __webpack_require__(1);
var redux_1 = __webpack_require__(97);
var react_redux_1 = __webpack_require__(229);
var thunk = __webpack_require__(234);
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

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(145);
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

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(97);
var redux_actions_1 = __webpack_require__(145);
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

/***/ 557:
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
var React = __webpack_require__(1);
var react_router_dom_1 = __webpack_require__(119);
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
                    React.createElement(react_router_dom_1.Link, { to: "/", className: "navbar-brand" },
                        React.createElement("i", { className: "glyphicon glyphicon-home" }),
                        React.createElement("img", { src: "/images/anthr-logo.png", alt: "anthR" }))),
                React.createElement("div", { className: "navbar-collapse collapse" },
                    React.createElement("ul", { className: "nav navbar-nav" },
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/projects" }, "Projects")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/tasks" }, "Tasks")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/schedule" }, "Schedule")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/notes" }, "Notes")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/mastersites" }, "Master Site")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/staff" }, "Staff")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/timesheets" }, "Timesheets"))),
                    React.createElement("ul", { className: "nav navbar-nav navbar-right" },
                        React.createElement("li", { className: "dropdown" },
                            React.createElement("a", { href: "", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-expanded": "true", style: { paddingTop: 10, paddingBottom: 10 } },
                                React.createElement("img", { className: "gravatar", src: "https://secure.gravatar.com/avatar/10247f791f5065a8e090804c1ecc1cea?s=30&d=mm", title: "Gravatar. if you don't have one, then added one for your work email!" }),
                                "Hello, tim!",
                                React.createElement("span", { className: "caret" })),
                            React.createElement("ul", { className: "dropdown-menu" },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "/Identity/Logout" }, "Logout")))))))));
    };
    return TopMenu;
}(React.Component));
exports.TopMenu = TopMenu;


/***/ }),

/***/ 558:
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
var React = __webpack_require__(1);
__webpack_require__(250);
var Index = (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.checkStatus = function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            else {
                var error = new Error(response.statusText);
                //error.response = response;
                throw error;
            }
        };
        _this.parseJSON = function (response) {
            return response.json();
        };
        _this.state = {
            message: ''
        };
        return _this;
    }
    Index.prototype.componentDidMount = function () {
        fetch('http://localhost:5001/api/project?completed=true&all=', {
            credentials: 'include',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + window.accessToken
            }
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(function (data) {
            console.log('data: ', data);
        })
            .catch(function (error) {
            console.log('error: ', error);
        });
    };
    Index.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Index Page"),
            React.createElement("p", null, "A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.")));
    };
    return Index;
}(React.Component));
exports.Index = Index;


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
exports.Index = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Index Page"),
        React.createElement("p", null, "A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.")));
};


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
exports.Index = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Index Page"),
        React.createElement("p", null, "A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.")));
};


/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
exports.Index = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Index Page"),
        React.createElement("p", null, "A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.")));
};


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
exports.Index = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Index Page"),
        React.createElement("p", null, "A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.")));
};


/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
exports.Index = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Index Page"),
        React.createElement("p", null, "A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.")));
};


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
exports.Index = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Index Page"),
        React.createElement("p", null, "A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.")));
};


/***/ })

},[289]);
//# sourceMappingURL=app.bundle.js.map