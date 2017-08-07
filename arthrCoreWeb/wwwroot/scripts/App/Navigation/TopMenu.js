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
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
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
                            React.createElement(react_router_dom_1.Link, { to: "/timesheets" }, "Timesheets")))))));
    };
    return TopMenu;
}(React.Component));
exports.TopMenu = TopMenu;
//# sourceMappingURL=TopMenu.js.map