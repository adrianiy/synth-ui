'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = void 0;

var _filters = require('../reducers/filters');

var initialize = function initialize(filterEntities, screen, baseConfig, initialFilters) {
    return {
        type: _filters.filterActions.initialize,
        props: {
            filterEntities: filterEntities,
            screen: screen,
            baseConfig: baseConfig,
            initialFilters: initialFilters
        }
    };
};

var setFilters = function setFilters(filtersConfig) {
    return {
        type: _filters.filterActions.setFilters,
        filtersConfig: filtersConfig
    };
};

var setDateRanges = function setDateRanges(dateRanges) {
    return {
        type: _filters.filterActions.setDateRanges,
        dateRanges: dateRanges
    };
};

var setDateConfig = function setDateConfig(dateConfig) {
    return {
        type: _filters.filterActions.setDateConfig,
        dateConfig: dateConfig
    };
};

var saveFilters = function saveFilters() {
    return {
        type: _filters.filterActions.saveFilters
    };
};

var actions = {
    initialize: initialize,
    setFilters: setFilters,
    setDateRanges: setDateRanges,
    setDateConfig: setDateConfig,
    saveFilters: saveFilters
};
var _default = actions;
exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpYmVyc2pzLXN0b3JlL3NyYy9hY3Rpb25zL2ZpbHRlcnMudHMiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZSIsImZpbHRlckVudGl0aWVzIiwic2NyZWVuIiwiYmFzZUNvbmZpZyIsImluaXRpYWxGaWx0ZXJzIiwidHlwZSIsImZpbHRlckFjdGlvbnMiLCJwcm9wcyIsInNldEZpbHRlcnMiLCJmaWx0ZXJzQ29uZmlnIiwic2V0RGF0ZVJhbmdlcyIsImRhdGVSYW5nZXMiLCJzZXREYXRlQ29uZmlnIiwiZGF0ZUNvbmZpZyIsInNhdmVGaWx0ZXJzIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLGNBQUQsRUFBc0JDLE1BQXRCLEVBQW1DQyxVQUFuQyxFQUFvREMsY0FBcEQ7QUFBQSxTQUE2RTtBQUM1RkMsSUFBQUEsSUFBSSxFQUFFQyx1QkFBY04sVUFEd0U7QUFFNUZPLElBQUFBLEtBQUssRUFBRTtBQUNITixNQUFBQSxjQUFjLEVBQWRBLGNBREc7QUFFSEMsTUFBQUEsTUFBTSxFQUFOQSxNQUZHO0FBR0hDLE1BQUFBLFVBQVUsRUFBVkEsVUFIRztBQUlIQyxNQUFBQSxjQUFjLEVBQWRBO0FBSkc7QUFGcUYsR0FBN0U7QUFBQSxDQUFuQjs7QUFVQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxhQUFEO0FBQUEsU0FBeUI7QUFDeENKLElBQUFBLElBQUksRUFBRUMsdUJBQWNFLFVBRG9CO0FBRXhDQyxJQUFBQSxhQUFhLEVBQWJBO0FBRndDLEdBQXpCO0FBQUEsQ0FBbkI7O0FBS0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxVQUFEO0FBQUEsU0FBc0I7QUFDeENOLElBQUFBLElBQUksRUFBRUMsdUJBQWNJLGFBRG9CO0FBRXhDQyxJQUFBQSxVQUFVLEVBQVZBO0FBRndDLEdBQXRCO0FBQUEsQ0FBdEI7O0FBS0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxVQUFEO0FBQUEsU0FBc0I7QUFDeENSLElBQUFBLElBQUksRUFBRUMsdUJBQWNNLGFBRG9CO0FBRXhDQyxJQUFBQSxVQUFVLEVBQVZBO0FBRndDLEdBQXRCO0FBQUEsQ0FBdEI7O0FBS0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUFPO0FBQ3ZCVCxJQUFBQSxJQUFJLEVBQUVDLHVCQUFjUTtBQURHLEdBQVA7QUFBQSxDQUFwQjs7QUFJQSxJQUFNQyxPQUFPLEdBQUc7QUFDWmYsRUFBQUEsVUFBVSxFQUFWQSxVQURZO0FBRVpRLEVBQUFBLFVBQVUsRUFBVkEsVUFGWTtBQUdaRSxFQUFBQSxhQUFhLEVBQWJBLGFBSFk7QUFJWkUsRUFBQUEsYUFBYSxFQUFiQSxhQUpZO0FBS1pFLEVBQUFBLFdBQVcsRUFBWEE7QUFMWSxDQUFoQjtlQVFlQyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlsdGVyQWN0aW9ucyB9IGZyb20gXCIuLi9yZWR1Y2Vycy9maWx0ZXJzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsaXplID0gKGZpbHRlckVudGl0aWVzOiBhbnksIHNjcmVlbjogYW55LCBiYXNlQ29uZmlnOiBhbnksIGluaXRpYWxGaWx0ZXJzOiBhbnkpID0+ICh7XHJcbiAgICB0eXBlOiBmaWx0ZXJBY3Rpb25zLmluaXRpYWxpemUsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGZpbHRlckVudGl0aWVzLFxyXG4gICAgICAgIHNjcmVlbixcclxuICAgICAgICBiYXNlQ29uZmlnLFxyXG4gICAgICAgIGluaXRpYWxGaWx0ZXJzXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc2V0RmlsdGVycyA9IChmaWx0ZXJzQ29uZmlnOiBhbnkpID0+ICh7XHJcbiAgICB0eXBlOiBmaWx0ZXJBY3Rpb25zLnNldEZpbHRlcnMsXHJcbiAgICBmaWx0ZXJzQ29uZmlnXHJcbn0pO1xyXG5cclxuY29uc3Qgc2V0RGF0ZVJhbmdlcyA9IChkYXRlUmFuZ2VzOiBhbnkpID0+ICh7XHJcbiAgICB0eXBlOiBmaWx0ZXJBY3Rpb25zLnNldERhdGVSYW5nZXMsXHJcbiAgICBkYXRlUmFuZ2VzXHJcbn0pO1xyXG5cclxuY29uc3Qgc2V0RGF0ZUNvbmZpZyA9IChkYXRlQ29uZmlnOiBhbnkpID0+ICh7XHJcbiAgICB0eXBlOiBmaWx0ZXJBY3Rpb25zLnNldERhdGVDb25maWcsXHJcbiAgICBkYXRlQ29uZmlnXHJcbn0pO1xyXG5cclxuY29uc3Qgc2F2ZUZpbHRlcnMgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogZmlsdGVyQWN0aW9ucy5zYXZlRmlsdGVyc1xyXG59KTtcclxuXHJcbmNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICBpbml0aWFsaXplLFxyXG4gICAgc2V0RmlsdGVycyxcclxuICAgIHNldERhdGVSYW5nZXMsXHJcbiAgICBzZXREYXRlQ29uZmlnLFxyXG4gICAgc2F2ZUZpbHRlcnNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnM7XHJcbiJdfQ==