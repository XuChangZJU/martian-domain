/**
 * Created by Administrator on 2017/7/6.
 */
const HouseState = require('../constants/houseConstant').state;

const showHouseListByTenant = (data) => {
    const { house } = data || {};
    const { state } = house || {};
    return [
        HouseState.free,
        HouseState.willFree,
        HouseState.ordered,
        HouseState.rented,
        HouseState.online,
    ].includes(state);
};

module.exports = {
    showHouseListByTenant,
};
