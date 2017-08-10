"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.One = function (props) {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Page One")));
};
exports.OneTwo = function (props) {
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "Page One Two ",
            props.match.params && props.match.params.id)));
};
//# sourceMappingURL=One.js.map