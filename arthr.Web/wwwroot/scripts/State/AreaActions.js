"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3rd Party
var redux_actions_1 = require("redux-actions");
// Utility
var Utility_1 = require("../Utility");
// Services
var Services_1 = require("../Services");
// State
var State_1 = require("../State");
var AreaActions = (function () {
    function AreaActions() {
        var _this = this;
        this.onFailure = function () {
        };
        this.createProjectAsync = function () { return function (dispatch) {
            var data = {
                alreadyBilled: false,
                completed: false,
                dateCompleted: null,
                deadline: null,
                deleted: false,
                hideFromTimesheet: false,
                masterSiteId: 1,
                name: 'Test',
                onGoing: true,
                plannedStart: new Date(),
                quoted: 500,
                username: 'tim'
            };
            var onSuccess = function (result) {
                alert('success');
            };
            Utility_1.Api(null).call(Services_1.ProjectService.post(), data, onSuccess, function (error) {
                console.log(error);
            });
        }; };
        this.getProjectsAsync = function () { return function (dispatch) {
            var onSuccess = function (projects) {
                dispatch(_this.receiveProjects(projects));
            };
            Utility_1.Api(dispatch).call(Services_1.ProjectService.get(false, ''), null, onSuccess, _this.onFailure);
        }; };
        this.getProjectTemplateAsync = function () { return function (dispatch) {
            var onSuccess = function (upsert) {
                dispatch(_this.receiveProjectUpsert(upsert));
            };
            Utility_1.Api(dispatch).call(Services_1.ProjectService.getTemplate(), null, onSuccess, _this.onFailure);
        }; };
        this.receiveProjects = redux_actions_1.createAction(State_1.ActionTypes.project.receiveProjects, function (projects) { return projects; });
        this.receiveProjectUpsert = redux_actions_1.createAction(State_1.ActionTypes.project.receiveUpsert, function (upsert) { return upsert; });
    }
    return AreaActions;
}());
var actionsDispatcherFactory = function (dispatch) {
    var localActions = new AreaActions();
    return {
        createProjectAsync: function () {
            dispatch(localActions.createProjectAsync());
        },
        getProjectsAsync: function () {
            dispatch(localActions.getProjectsAsync());
        },
        getProjectTemplateAsync: function () {
            dispatch(localActions.getProjectTemplateAsync());
        },
        receiveProjectUpsert: function (upsert) {
            dispatch(localActions.receiveProjectUpsert(upsert));
        }
    };
};
exports.ActionsDispatcherFactory = actionsDispatcherFactory;
//# sourceMappingURL=AreaActions.js.map