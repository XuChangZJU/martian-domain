/**
 * Created by Administrator on 2017/7/6.
 */
const HouseState = require('../constants/houseConstant').state;
const HouseCategory = require('../constants/houseConstant').category;

const showHouseListByTenant = (data) => {
    const {house} = data || {};
    const {state} = house || {};
    return [
        HouseState.free,
        HouseState.willFree,
        HouseState.ordered,
        HouseState.rented,
        HouseState.online,
    ].includes(state);
};

const ableToDeleteHouse = (data) => {
    const {house} = data || {};
    const {state} = house || {};
    return [
        HouseState.incomplete,
        HouseState.denied,
        HouseState.dirty,
        HouseState.inVerifying,
        HouseState.offline,
        HouseState.online,
    ].includes(state);
};

const ableToTransferHouse = (data) => {
    const {house} = data || {};
    const {state} = house || {};
    const {category} = house || {};
    return ![
        HouseState.shadow,
        HouseState.rented,
        HouseState.ordered,
        HouseState.willFree,
        HouseState.willOffline
    ].includes(state) && [HouseCategory.house, HouseCategory.flatShare, HouseCategory.apartment, HouseCategory.tavern, HouseCategory.hotel].includes(category);
};

module.exports = {
    showHouseListByTenant,
    ableToDeleteHouse,
    ableToTransferHouse
};
