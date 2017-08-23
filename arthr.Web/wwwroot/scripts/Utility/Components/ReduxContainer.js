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
var React = require("react");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var thunk = require("redux-thunk");
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
//# sourceMappingURL=ReduxContainer.js.map