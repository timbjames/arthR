"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_actions_1 = require("redux-actions");
var actionTypes = {
    receivePerson: 'receivePerson'
};
var PersonService = (function () {
    function PersonService() {
        this.receivePerson = redux_actions_1.createAction(actionTypes.receivePerson, function (person) { return person; });
    }
    return PersonService;
}());
exports.PersonServiceFactory = function (dispatch) {
    var actions = new PersonService();
    return {
        receivePerson: function (person) {
            dispatch(actions.receivePerson(person));
        }
    };
};
var initialState = function () {
    return {
        name: 'Tim'
    };
};
var personReducer = redux_actions_1.handleActions((_a = {},
    _a[actionTypes.receivePerson] = function (state, action) {
        return { name: action.payload };
    },
    _a), initialState());
var rootReducer = redux_1.combineReducers({
    personState: personReducer
});
var _a;
//# sourceMappingURL=Person.js.map