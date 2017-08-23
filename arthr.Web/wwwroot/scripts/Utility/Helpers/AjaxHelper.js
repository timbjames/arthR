"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("whatwg-fetch");
var checkStatus = function (response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    else {
        var error = new Error(response.statusText);
        throw error;
    }
};
var parseResponse = function (response) {
    return response.json();
};
var api = function (dispatch) {
    return {
        call: function (api, payload, onSuccess, onFailure) {
            var body = payload && JSON.stringify(payload);
            fetch(api.url, {
                credentials: 'include',
                method: api.method,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': 'Bearer ' + window.accessToken,
                    'Content-Type': 'application/json'
                },
                keepalive: false,
                body: body
            })
                .then(checkStatus)
                .then(parseResponse)
                .then(function (data) {
                var returnedData = data;
                onSuccess(returnedData);
                return;
            })
                .catch(function (error) {
                onFailure(error);
                console.log('error: ', error);
            });
        }
    };
};
exports.Api = api;
//# sourceMappingURL=AjaxHelper.js.map