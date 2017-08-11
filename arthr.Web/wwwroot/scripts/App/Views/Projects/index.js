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
require("whatwg-fetch");
var Index = (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.checkStatus = function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            else {
                var error = new Error(response.statusText);
                //error.response = response;
                throw error;
            }
        };
        _this.parseJSON = function (response) {
            return response.json();
        };
        _this.state = {
            message: ''
        };
        return _this;
    }
    Index.prototype.componentDidMount = function () {
        fetch('http://localhost:5001/identity', {
            credentials: 'include',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + window.accessToken
            }
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(function (data) {
            console.log('data: ', data);
        })
            .catch(function (error) {
            console.log('error: ', error);
        });
    };
    Index.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Index Page"),
            React.createElement("p", null, "A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.")));
    };
    return Index;
}(React.Component));
exports.Index = Index;
//# sourceMappingURL=index.js.map