"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timesheetApi = {
    delete: function (id) {
        return "/api/timesheet/" + id;
    },
    get: function () {
        return "/api/timesheet";
    },
    getById: function (id) {
        return "/api/timesheet/" + id;
    },
    post: function () {
        return "/api/timesheet";
    },
    put: function () {
        return "/api/timesheet";
    }
};
exports.TimesheetApi = timesheetApi;
//# sourceMappingURL=TimesheetApi.js.map