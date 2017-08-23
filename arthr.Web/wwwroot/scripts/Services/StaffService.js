"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var staffService = {
    delete: function (id) {
        return {
            method: 'delete',
            url: "http://localhost:5001/api/staff/" + id
        };
    },
    get: function () {
        return {
            method: 'get',
            url: "http://localhost:5001/api/staff"
        };
    },
    getById: function (id) {
        return {
            method: 'get',
            url: "http://localhost:5001/api/staff/" + id
        };
    },
    post: function () {
        return {
            method: 'post',
            url: "http://localhost:5001/api/staff"
        };
    },
    put: function () {
        return {
            method: 'put',
            url: "http://localhost:5001/api/staff"
        };
    }
};
exports.StaffService = staffService;
/*
    Debug Info:
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.Staff), , /api/staff, typeof(bool), , /api/staff, typeof(bool) Unknown Types: Staff
*/
//# sourceMappingURL=StaffService.js.map