"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("redux-actions");
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
//# sourceMappingURL=AreaActions.js.map