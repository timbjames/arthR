"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var masterSiteService = {
    delete: function (id) {
        return {
            method: 'delete',
            url: "http://localhost:5001/api/mastersite/" + id
        };
    },
    get: function () {
        return {
            method: 'get',
            url: "http://localhost:5001/api/mastersite"
        };
    },
    getById: function (id) {
        return {
            method: 'get',
            url: "http://localhost:5001/api/mastersite/" + id
        };
    },
    post: function () {
        return {
            method: 'post',
            url: "http://localhost:5001/api/mastersite"
        };
    },
    put: function () {
        return {
            method: 'put',
            url: "http://localhost:5001/api/mastersite"
        };
    }
};
exports.MasterSiteService = masterSiteService;
/*
    Debug Info:
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool) Unknown Types: MasterSite
*/
//# sourceMappingURL=MasterSiteService.js.map