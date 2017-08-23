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
// 3rd Party
var React = require("react");
require("whatwg-fetch");
var ProjectIndex = (function (_super) {
    __extends(ProjectIndex, _super);
    function ProjectIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectIndex.prototype.componentDidMount = function () {
        var _a = this.props, appActions = _a.appActions, appState = _a.appState;
        appActions.getProjectsAsync();
    };
    ProjectIndex.prototype.render = function () {
        var _a = this.props, appActions = _a.appActions, appState = _a.appState;
        return (React.createElement("div", null,
            React.createElement("h1", null, "Projects"),
            appState.project.projects && appState.project.projects.map(function (p, i) { return React.createElement("span", { key: i }, p.name); })));
    };
    return ProjectIndex;
}(React.Component));
exports.ProjectIndex = ProjectIndex;
//# sourceMappingURL=ProjectIndex.js.map