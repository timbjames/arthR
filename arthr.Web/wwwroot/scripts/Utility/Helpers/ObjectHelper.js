"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deepClone(obj) {
    if (obj === undefined || obj === null) {
        return null;
    }
    return JSON.parse(JSON.stringify(obj));
}
var objectHelper = {
    deepClone: deepClone
};
exports.ObjectHelper = objectHelper;
//# sourceMappingURL=ObjectHelper.js.map