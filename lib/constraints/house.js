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

var ableToDeleteHouse = function ableToDeleteHouse(data) {
    var _ref3 = data || {},
        house = _ref3.house;

    var _ref4 = house || {},
        state = _ref4.state;

    return [HouseState.incomplete, HouseState.denied, HouseState.dirty, HouseState.inVerifying, HouseState.offline, HouseState.online].includes(state);
};

var ableToTransferHouse = function ableToTransferHouse(data) {
    var _ref5 = data || {},
        house = _ref5.house;

    var _ref6 = house || {},
        state = _ref6.state;

    return [HouseState.shadow, HouseState.rented, HouseState.ordered, HouseState.willFree, HouseState.willOffline].includes(state);
};

module.exports = {
    showHouseListByTenant: showHouseListByTenant,
    ableToDeleteHouse: ableToDeleteHouse,
    ableToTransferHouse: ableToTransferHouse
};