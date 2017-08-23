"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itemService = {
    get: function () {
        return {
            method: 'get',
            url: "api/item/"
        };
    },
    doSomething: function () {
        return {
            method: 'post',
            url: "/api/item/dosomething"
        };
    }
};
exports.ItemService = itemService;
/*
    Debug Info:
    , /api/item/dosomething, typeof(arthr.Models.Core.Person) Unknown Types: Person
*/
//# sourceMappingURL=ItemService.js.map