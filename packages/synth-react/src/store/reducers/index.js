"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _filters = _interopRequireDefault(require("./filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  filters: _filters["default"]
});
var _default = rootReducer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpYmVyc2pzLXN0b3JlL3NyYy9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImZpbHRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyw0QkFBZ0I7QUFDaENDLEVBQUFBLE9BQU8sRUFBUEE7QUFEZ0MsQ0FBaEIsQ0FBcEI7ZUFJZUQsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgZmlsdGVycyBmcm9tIFwiLi9maWx0ZXJzXCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBmaWx0ZXJzXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdfQ==