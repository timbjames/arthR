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
var RaisedButton_1 = require("material-ui/RaisedButton");
var Table_1 = require("material-ui/Table");
var IconMenu_1 = require("material-ui/IconMenu");
var IconButton_1 = require("material-ui/IconButton");
var MenuItem_1 = require("material-ui/MenuItem");
var expand_more_1 = require("material-ui/svg-icons/navigation/expand-more");
exports.Three = function (areaActions, areaState) { return function () {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Redux Tester"),
        React.createElement("h1", null, areaState.name),
        React.createElement(RaisedButton_1.default, { label: "Click Me", onClick: function () {
                areaActions.doSomething();
            } }),
        React.createElement(TableExampleSimple, null)));
}; };
var TableRowColumnWrapper = (function (_super) {
    __extends(TableRowColumnWrapper, _super);
    function TableRowColumnWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableRowColumnWrapper.prototype.render = function () {
        return (React.createElement(Table_1.TableRowColumn, { onClick: this.props.onCellClick }, this.props.children));
    };
    return TableRowColumnWrapper;
}(React.Component));
var TableExampleSimple = function () { return (React.createElement(Table_1.Table, { multiSelectable: true },
    React.createElement(Table_1.TableHeader, null,
        React.createElement(Table_1.TableRow, null,
            React.createElement(Table_1.TableHeaderColumn, null, "ID"),
            React.createElement(Table_1.TableHeaderColumn, null, "Name"),
            React.createElement(Table_1.TableHeaderColumn, null, "Status"),
            React.createElement(Table_1.TableHeaderColumn, null))),
    React.createElement(Table_1.TableBody, null,
        React.createElement(Table_1.TableRow, null,
            React.createElement(Table_1.TableRowColumn, null, "1"),
            React.createElement(Table_1.TableRowColumn, null, "John Smith"),
            React.createElement(Table_1.TableRowColumn, null, "Employed"),
            React.createElement(TableRowColumnWrapper, { onCellClick: function () { } },
                React.createElement(RaisedButton_1.default, { label: "Click This Button", onClick: function () {
                        console.log('here');
                    } }))),
        React.createElement(Table_1.TableRow, null,
            React.createElement(Table_1.TableRowColumn, null, "2"),
            React.createElement(Table_1.TableRowColumn, null, "Randal White"),
            React.createElement(Table_1.TableRowColumn, null, "Unemployed"),
            React.createElement(Table_1.TableRowColumn, null,
                React.createElement("div", null,
                    React.createElement(IconMenu_1.default, { iconButtonElement: React.createElement(IconButton_1.default, { touch: true },
                            React.createElement(expand_more_1.default, null)) },
                        React.createElement(MenuItem_1.default, { primaryText: "Download" }),
                        React.createElement(MenuItem_1.default, { primaryText: "More Info" }))))),
        React.createElement(Table_1.TableRow, null,
            React.createElement(Table_1.TableRowColumn, null, "3"),
            React.createElement(Table_1.TableRowColumn, null, "Stephanie Sanders"),
            React.createElement(Table_1.TableRowColumn, null, "Employed")),
        React.createElement(Table_1.TableRow, null,
            React.createElement(Table_1.TableRowColumn, null, "4"),
            React.createElement(Table_1.TableRowColumn, null, "Steve Brown"),
            React.createElement(Table_1.TableRowColumn, null, "Employed")),
        React.createElement(Table_1.TableRow, null,
            React.createElement(Table_1.TableRowColumn, null, "5"),
            React.createElement(Table_1.TableRowColumn, null, "Christopher Nolan"),
            React.createElement(Table_1.TableRowColumn, null, "Unemployed"))))); };
//# sourceMappingURL=Three.js.map