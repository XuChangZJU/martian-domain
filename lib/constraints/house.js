'use strict';

/**
 * Created by Administrator on 2017/7/6.
 */
var HouseState = require('../constants/houseConstant').state;

var showHouseListByTenant = function showHouseListByTenant(data) {
    var _ref = data || {},
        house = _ref.house;

    var _ref2 = house || {},
        state = _ref2.state;

    return [HouseState.free, HouseState.willFree, HouseState.ordered, HouseState.rented, HouseState.online].includes(state);
};

module.exports = {
    showHouseListByTenant: showHouseListByTenant
};