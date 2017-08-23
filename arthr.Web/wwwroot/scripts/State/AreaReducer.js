"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_actions_1 = require("redux-actions");
// Utility
var Helpers_1 = require("../Utility/Helpers");
var ActionTypes_1 = require("./ActionTypes");
var initialState = function () {
    return {
        project: {
            project: null,
            projects: null,
            projectTools: null,
            projectUpsert: null
        }
    };
};
var actionWrapper = function (state, action, func) {
    var newState = Helpers_1.ObjectHelper.deepClone(state);
    func(newState, action);
    return newState;
};
var areaStateReducer = redux_actions_1.handleActions((_a = {},
    _a[ActionTypes_1.ActionTypes.project.receiveProjects] = function (state, action) {
        return actionWrapper(state, action, function (newState) {
            newState.project.projects = action.payload;
        });
    },
    _a[ActionTypes_1.ActionTypes.project.receiveUpsert] = function (state, action) {
        return actionWrapper(state, action, function (newState) {
            newState.project.projectUpsert = action.payload;
        });
    },
    _a), initialState());
exports.rootReducer = redux_1.combineReducers({
    areaState: areaStateReducer
});
var _a;
//# sourceMappingURL=AreaReducer.js.map