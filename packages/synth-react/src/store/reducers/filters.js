'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = exports.filterActions = void 0;

var _filters = require('../config/filters');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) {symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; });} keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var filterActions = {
    initialize: 'INITIALIZE',
    setFilters: 'SETFILTERS',
    setDateConfig: 'SETDATECONFIG',
    setDateRanges: 'SETDATERANGES',
    saveFilters: 'SAVEFILTERS'
};
exports.filterActions = filterActions;
var initialState = {
    baseFilterEntities: undefined,
    filterVersion: '0.0.0',
    filtersConfig: undefined,
    baseFilters: undefined,
    screen: undefined,
    savedFilters: {},
    initialFilters: {},
    defaultFilters: [ {
        key: 'cod_brand',
        op: 'in',
        value: [ 1, 16 ]
    } ],
    restrictedFilters: [],
    restrictedParents: {},
    dateRanges: undefined,
    dateConfig: undefined,
    cacheId: undefined,
    cacheVersion: undefined,
    notUsedSharedFilters: []
}; // SETTERS

/**
 * Saves user custom filters configuration in [[_baseFilterEntities]] variable
 *
 * @param filtersConfig object with filters configuration
 */

var setFilters = function setFilters(state, filtersConfig) {
    return _objectSpread(_objectSpread({}, state), {}, {
        filtersConfig: filtersConfig
    });
};
/**
 * Saves date configuration used in application
 *
 * @param dateConfig date configuration
 */


var setDateConfig = function setDateConfig(state, dateConfig) {
    Object.keys(_filters.defaultConfig).filter(function (key) {
        return !Object.keys(dateConfig).includes(key);
    }).forEach(function (key) {
        return dateConfig[key] = _filters.defaultConfig[key];
    });
    return _objectSpread(_objectSpread({}, state), {}, {
        dateConfig: dateConfig
    });
};
/**
 * Saves date ranges configuration used in application
 *
 * @param dateRanges date ranges configuration
 */


var setDateRanges = function setDateRanges(state, dateRanges) {
    return _objectSpread(_objectSpread({}, state), {}, {
        dateRanges: dateRanges
    });
};
/**
 * Saves filters in ***localStorage***
 */


var saveFilters = function saveFilters(state) {
    var _state$savedFilters;

    if (!((_state$savedFilters = state.savedFilters) !== null && _state$savedFilters !== void 0 && _state$savedFilters[state.screen])) {
        state.savedFilters[state.screen] = {};
    }

    state.savedFilters[state.screen] = _objectSpread({}, state.filtersConfig);
    return state;
}; // INIT METHODS

/**
 * Reset filters with [[FiltersConfig]] base data, and update it with results from
 * [[getFilters]] method, finally translates filters description
 */


var initializeFilters = function initializeFilters(state, _ref) {
    var filterEntities = _ref.filterEntities,
        screen = _ref.screen,
        baseConfig = _ref.baseConfig,
        initialFilters = _ref.initialFilters;

    try {
        var newState = _objectSpread(_objectSpread({}, state), {}, {
            screen: screen,
            filtersConfig: baseConfig,
            restrictedFilters: [],
            restrictedParents: {}
        });

        return saveFilters(newState);
    } catch (err) {
        return state;
    }
};

var filterReducer = function filterReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
        case filterActions.initialize:
            return initializeFilters(state, action.props);

        case filterActions.setFilters:
            return setFilters(state, action.filtersConfig);

        case filterActions.setDateRanges:
            return setDateRanges(state, action.dateRanges);

        case filterActions.setDateRanges:
            return setDateConfig(state, action.dateConfig);

        case filterActions.saveFilters:
            return saveFilters(state);

        default:
            return state;
    }
};

var _default = filterReducer;
exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpYmVyc2pzLXN0b3JlL3NyYy9yZWR1Y2Vycy9maWx0ZXJzLnRzIl0sIm5hbWVzIjpbImZpbHRlckFjdGlvbnMiLCJpbml0aWFsaXplIiwic2V0RmlsdGVycyIsInNldERhdGVDb25maWciLCJzZXREYXRlUmFuZ2VzIiwic2F2ZUZpbHRlcnMiLCJpbml0aWFsU3RhdGUiLCJiYXNlRmlsdGVyRW50aXRpZXMiLCJ1bmRlZmluZWQiLCJmaWx0ZXJWZXJzaW9uIiwiZmlsdGVyc0NvbmZpZyIsImJhc2VGaWx0ZXJzIiwic2NyZWVuIiwic2F2ZWRGaWx0ZXJzIiwiaW5pdGlhbEZpbHRlcnMiLCJkZWZhdWx0RmlsdGVycyIsImtleSIsIm9wIiwidmFsdWUiLCJyZXN0cmljdGVkRmlsdGVycyIsInJlc3RyaWN0ZWRQYXJlbnRzIiwiZGF0ZVJhbmdlcyIsImRhdGVDb25maWciLCJjYWNoZUlkIiwiY2FjaGVWZXJzaW9uIiwibm90VXNlZFNoYXJlZEZpbHRlcnMiLCJzdGF0ZSIsIk9iamVjdCIsImtleXMiLCJkZWZhdWx0Q29uZmlnIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJmb3JFYWNoIiwiaW5pdGlhbGl6ZUZpbHRlcnMiLCJmaWx0ZXJFbnRpdGllcyIsImJhc2VDb25maWciLCJuZXdTdGF0ZSIsImVyciIsImZpbHRlclJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFHTyxJQUFNQSxhQUFhLEdBQUc7QUFDekJDLEVBQUFBLFVBQVUsRUFBRSxZQURhO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUUsWUFGYTtBQUd6QkMsRUFBQUEsYUFBYSxFQUFFLGVBSFU7QUFJekJDLEVBQUFBLGFBQWEsRUFBRSxlQUpVO0FBS3pCQyxFQUFBQSxXQUFXLEVBQUU7QUFMWSxDQUF0Qjs7QUFRUCxJQUFNQyxZQUEwQixHQUFHO0FBQy9CQyxFQUFBQSxrQkFBa0IsRUFBRUMsU0FEVztBQUUvQkMsRUFB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USxtQ0FDUFYsS0FETztBQUVWZCxNQUFBQSxNQUFNLEVBQU5BLE1BRlU7QUFHVkYsTUFBQUEsYUFBYSxFQUFFeUIsVUFITDtBQUlWaEIsTUFBQUEsaUJBQWlCLEVBQUUsRUFKVDtBQUtWQyxNQUFBQSxpQkFBaUIsRUFBRTtBQUxULE1BQWQ7O0FBT0EsV0FBT2YsV0FBVyxDQUFDK0IsUUFBRCxDQUFsQjtBQUNILEdBVEQsQ0FTRSxPQUFPQyxHQUFQLEVBQVk7QUFDVixXQUFPWCxLQUFQO0FBQ0g7QUFDSixDQWJEOztBQWVBLElBQU1ZLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBdUM7QUFBQSxNQUF0Q1osS0FBc0MsdUVBQTlCcEIsWUFBOEI7QUFBQSxNQUFoQmlDLE1BQWdCOztBQUN6RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLeEMsYUFBYSxDQUFDQyxVQUFuQjtBQUNJLGFBQU9nQyxpQkFBaUIsQ0FBQ1AsS0FBRCxFQUFRYSxNQUFNLENBQUNFLEtBQWYsQ0FBeEI7O0FBQ0osU0FBS3pDLGFBQWEsQ0FBQ0UsVUFBbkI7QUFDSSxhQUFPQSxVQUFVLENBQUN3QixLQUFELEVBQVFhLE1BQU0sQ0FBQzdCLGFBQWYsQ0FBakI7O0FBQ0osU0FBS1YsYUFBYSxDQUFDSSxhQUFuQjtBQUNJLGFBQU9BLGFBQWEsQ0FBQ3NCLEtBQUQsRUFBUWEsTUFBTSxDQUFDbEIsVUFBZixDQUFwQjs7QUFDSixTQUFLckIsYUFBYSxDQUFDSSxhQUFuQjtBQUNJLGFBQU9ELGFBQWEsQ0FBQ3VCLEtBQUQsRUFBUWEsTUFBTSxDQUFDakIsVUFBZixDQUFwQjs7QUFDSixTQUFLdEIsYUFBYSxDQUFDSyxXQUFuQjtBQUNJLGFBQU9BLFdBQVcsQ0FBQ3FCLEtBQUQsQ0FBbEI7O0FBQ0o7QUFDSSxhQUFPQSxLQUFQO0FBWlI7QUFjSCxDQWZEOztlQWlCZVksYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHRDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgRmlsdGVyc0NvbmZpZywgRmlsdGVyc1N0YXRlIH0gZnJvbSBcIi4uL21vZGVscy9maWx0ZXJzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyQWN0aW9ucyA9IHtcclxuICAgIGluaXRpYWxpemU6IFwiSU5JVElBTElaRVwiLFxyXG4gICAgc2V0RmlsdGVyczogXCJTRVRGSUxURVJTXCIsXHJcbiAgICBzZXREYXRlQ29uZmlnOiBcIlNFVERBVEVDT05GSUdcIixcclxuICAgIHNldERhdGVSYW5nZXM6IFwiU0VUREFURVJBTkdFU1wiLFxyXG4gICAgc2F2ZUZpbHRlcnM6IFwiU0FWRUZJTFRFUlNcIlxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBGaWx0ZXJzU3RhdGUgPSB7XHJcbiAgICBiYXNlRmlsdGVyRW50aXRpZXM6IHVuZGVmaW5lZCxcclxuICAgIGZpbHRlclZlcnNpb246IFwiMC4wLjBcIixcclxuICAgIGZpbHRlcnNDb25maWc6IHVuZGVmaW5lZCxcclxuICAgIGJhc2VGaWx0ZXJzOiB1bmRlZmluZWQsXHJcbiAgICBzY3JlZW46IHVuZGVmaW5lZCxcclxuICAgIHNhdmVkRmlsdGVyczoge30sXHJcbiAgICBpbml0aWFsRmlsdGVyczoge30sXHJcbiAgICBkZWZhdWx0RmlsdGVyczogW3sga2V5OiBcImNvZF9icmFuZFwiLCBvcDogXCJpblwiLCB2YWx1ZTogWzEsIDE2XSB9XSxcclxuICAgIHJlc3RyaWN0ZWRGaWx0ZXJzOiBbXSxcclxuICAgIHJlc3RyaWN0ZWRQYXJlbnRzOiB7fSxcclxuICAgIGRhdGVSYW5nZXM6IHVuZGVmaW5lZCxcclxuICAgIGRhdGVDb25maWc6IHVuZGVmaW5lZCxcclxuICAgIGNhY2hlSWQ6IHVuZGVmaW5lZCxcclxuICAgIGNhY2hlVmVyc2lvbjogdW5kZWZpbmVkLFxyXG4gICAgbm90VXNlZFNoYXJlZEZpbHRlcnM6IFtdXHJcbn07XHJcblxyXG4vLyBTRVRURVJTXHJcblxyXG4vKipcclxuICogU2F2ZXMgdXNlciBjdXN0b20gZmlsdGVycyBjb25maWd1cmF0aW9uIGluIFtbX2Jhc2VGaWx0ZXJFbnRpdGllc11dIHZhcmlhYmxlXHJcbiAqXHJcbiAqIEBwYXJhbSBmaWx0ZXJzQ29uZmlnIG9iamVjdCB3aXRoIGZpbHRlcnMgY29uZmlndXJhdGlvblxyXG4gKi9cclxuY29uc3Qgc2V0RmlsdGVycyA9IChzdGF0ZTogRmlsdGVyc1N0YXRlLCBmaWx0ZXJzQ29uZmlnOiBGaWx0ZXJzQ29uZmlnKTogRmlsdGVyc1N0YXRlID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmlsdGVyc0NvbmZpZ1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTYXZlcyBkYXRlIGNvbmZpZ3VyYXRpb24gdXNlZCBpbiBhcHBsaWNhdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0gZGF0ZUNvbmZpZyBkYXRlIGNvbmZpZ3VyYXRpb25cclxuICovXHJcbmNvbnN0IHNldERhdGVDb25maWcgPSAoc3RhdGU6IEZpbHRlcnNTdGF0ZSwgZGF0ZUNvbmZpZzogYW55KTogRmlsdGVyc1N0YXRlID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRDb25maWcpXHJcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gIU9iamVjdC5rZXlzKGRhdGVDb25maWcpLmluY2x1ZGVzKGtleSkpXHJcbiAgICAgICAgLmZvckVhY2goa2V5ID0+IChkYXRlQ29uZmlnW2tleV0gPSBkZWZhdWx0Q29uZmlnW2tleV0pKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRhdGVDb25maWdcclxuICAgIH07XHJcbn07XHJcblxyXG4vKipcclxuICogU2F2ZXMgZGF0ZSByYW5nZXMgY29uZmlndXJhdGlvbiB1c2VkIGluIGFwcGxpY2F0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSBkYXRlUmFuZ2VzIGRhdGUgcmFuZ2VzIGNvbmZpZ3VyYXRpb25cclxuICovXHJcbmNvbnN0IHNldERhdGVSYW5nZXMgPSAoc3RhdGU6IEZpbHRlcnNTdGF0ZSwgZGF0ZVJhbmdlczogYW55KTogRmlsdGVyc1N0YXRlID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZGF0ZVJhbmdlc1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTYXZlcyBmaWx0ZXJzIGluICoqKmxvY2FsU3RvcmFnZSoqKlxyXG4gKi9cclxuY29uc3Qgc2F2ZUZpbHRlcnMgPSAoc3RhdGU6IEZpbHRlcnNTdGF0ZSk6IEZpbHRlcnNTdGF0ZSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlLnNhdmVkRmlsdGVycz8uW3N0YXRlLnNjcmVlbl0pIHtcclxuICAgICAgICBzdGF0ZS5zYXZlZEZpbHRlcnNbc3RhdGUuc2NyZWVuXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgc3RhdGUuc2F2ZWRGaWx0ZXJzW3N0YXRlLnNjcmVlbl0gPSB7IC4uLnN0YXRlLmZpbHRlcnNDb25maWcgfTtcclxuXHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG4vLyBJTklUIE1FVEhPRFNcclxuXHJcbi8qKlxyXG4gKiBSZXNldCBmaWx0ZXJzIHdpdGggW1tGaWx0ZXJzQ29uZmlnXV0gYmFzZSBkYXRhLCBhbmQgdXBkYXRlIGl0IHdpdGggcmVzdWx0cyBmcm9tXHJcbiAqIFtbZ2V0RmlsdGVyc11dIG1ldGhvZCwgZmluYWxseSB0cmFuc2xhdGVzIGZpbHRlcnMgZGVzY3JpcHRpb25cclxuICovXHJcbmNvbnN0IGluaXRpYWxpemVGaWx0ZXJzID0gKHN0YXRlOiBGaWx0ZXJzU3RhdGUsIHsgZmlsdGVyRW50aXRpZXMsIHNjcmVlbiwgYmFzZUNvbmZpZywgaW5pdGlhbEZpbHRlcnMgfTogYW55KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2NyZWVuLFxyXG4gICAgICAgICAgICBmaWx0ZXJzQ29uZmlnOiBiYXNlQ29uZmlnLFxyXG4gICAgICAgICAgICByZXN0cmljdGVkRmlsdGVyczogW10sXHJcbiAgICAgICAgICAgIHJlc3RyaWN0ZWRQYXJlbnRzOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHNhdmVGaWx0ZXJzKG5ld1N0YXRlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGZpbHRlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBmaWx0ZXJBY3Rpb25zLmluaXRpYWxpemU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsaXplRmlsdGVycyhzdGF0ZSwgYWN0aW9uLnByb3BzKTtcclxuICAgICAgICBjYXNlIGZpbHRlckFjdGlvbnMuc2V0RmlsdGVyczpcclxuICAgICAgICAgICAgcmV0dXJuIHNldEZpbHRlcnMoc3RhdGUsIGFjdGlvbi5maWx0ZXJzQ29uZmlnKTtcclxuICAgICAgICBjYXNlIGZpbHRlckFjdGlvbnMuc2V0RGF0ZVJhbmdlczpcclxuICAgICAgICAgICAgcmV0dXJuIHNldERhdGVSYW5nZXMoc3RhdGUsIGFjdGlvbi5kYXRlUmFuZ2VzKTtcclxuICAgICAgICBjYXNlIGZpbHRlckFjdGlvbnMuc2V0RGF0ZVJhbmdlczpcclxuICAgICAgICAgICAgcmV0dXJuIHNldERhdGVDb25maWcoc3RhdGUsIGFjdGlvbi5kYXRlQ29uZmlnKTtcclxuICAgICAgICBjYXNlIGZpbHRlckFjdGlvbnMuc2F2ZUZpbHRlcnM6XHJcbiAgICAgICAgICAgIHJldHVybiBzYXZlRmlsdGVycyhzdGF0ZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlsdGVyUmVkdWNlcjtcclxuIl19