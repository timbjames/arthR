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
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-xs-12" },
                React.createElement("table", { className: "table table-hover table-with-navbar-dropdown" },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Site"),
                            React.createElement("th", null, "Project"),
                            React.createElement("th", null, "Staff On Project"),
                            React.createElement("th", null, "Current Tasks"),
                            React.createElement("th", { className: "text-right" }, "Options"))),
                    React.createElement("tbody", null, appState.project.projects
                        && appState.project.projects.map(function (p, i) {
                            return (React.createElement("tr", { key: i },
                                React.createElement("td", null, p.masterSite.name),
                                React.createElement("td", null, p.name),
                                React.createElement("td", null, p.staffOnProjects && p.staffOnProjects.map(function (s, i) { return React.createElement("span", { key: i }, s); })),
                                React.createElement("td", null, p.dateCompleted),
                                React.createElement("td", null,
                                    React.createElement("div", { className: "btn-group pull-right" },
                                        React.createElement("button", { className: "btn btn-default btn-sm dropdown-toggle", type: "button", "data-toggle": "dropdown", "aria-expanded": "false" },
                                            React.createElement("span", { className: "glyphicon glyphicon-menu-hamburger" })),
                                        React.createElement("ul", { className: "dropdown-menu", role: "menu" },
                                            React.createElement("li", null,
                                                React.createElement("a", { href: "" }, "Create")))))));
                        }))))));
    };
    return ProjectIndex;
}(React.Component));
exports.ProjectIndex = ProjectIndex;
//# sourceMappingURL=ProjectIndex.js.map