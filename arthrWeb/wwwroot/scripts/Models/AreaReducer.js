"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_actions_1 = require("redux-actions");
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
//# sourceMappingURL=AreaReducer.js.map