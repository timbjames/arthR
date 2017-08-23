"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taskApi = {
    delete: function (id) {
        return "/api/task/" + id;
    },
    get: function () {
        return "/api/task";
    },
    getById: function (id) {
        return "/api/task/" + id;
    },
    post: function () {
        return "/api/task";
    },
    put: function () {
        return "/api/task";
    }
};
exports.TaskApi = taskApi;
//# sourceMappingURL=TaskApi.js.map