"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Three = function (areaActions, areaState) { return function () {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Redux Tester"),
        React.createElement("h1", null, areaState.name),
        React.createElement("button", { onClick: function () { areaActions.doSomething(); } }, "Click Me")));
}; };
//# sourceMappingURL=Three.js.map