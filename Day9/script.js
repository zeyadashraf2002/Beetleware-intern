"use strict";
// ---------------------------------------------------
// Day 9 — Objects, Functions & Generics
// ---------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeMap = safeMap;
exports.safeFilter = safeFilter;
// ---------- safeMap ----------
function safeMap(arr, mapper) {
    try {
        var output = arr.map(mapper);
        return { success: true, data: output };
    }
    catch (err) {
        return {
            success: false,
            error: (err === null || err === void 0 ? void 0 : err.message) || "Unknown error during map",
        };
    }
}
// ---------- safeFilter ----------
function safeFilter(arr, predicate) {
    try {
        var output = arr.filter(predicate);
        return { success: true, data: output };
    }
    catch (err) {
        return {
            success: false,
            error: (err === null || err === void 0 ? void 0 : err.message) || "Unknown error during filter",
        };
    }
}
// ---------- Example Usage ----------
var numbers = [1, 2, 3, 4];
console.log("safeMap →", safeMap(numbers, function (n) { return n * 2; }));
console.log("safeFilter →", safeFilter(numbers, function (n) { return n > 2; }));
