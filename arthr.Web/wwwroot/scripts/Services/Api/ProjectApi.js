"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projectApi = {
    complete: function () {
        return "/api/project/complete";
    },
    delete: function (id) {
        return "/api/project/delele/" + id;
    },
    get: function (completed, all) {
        return "/api/project?completed=" + completed + "&all=" + encodeURIComponent(all);
    },
    getById: function (id) {
        return "/api/project/getbyid/" + id;
    },
    getTemplate: function () {
        return "/api/project/template";
    },
    post: function () {
        return "/api/project";
    },
    put: function () {
        return "/api/project";
    }
};
exports.ProjectApi = projectApi;
//# sourceMappingURL=ProjectApi.js.map