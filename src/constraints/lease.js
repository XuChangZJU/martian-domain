/**
 * Created by Administrator on 2017/6/26.
 */
const HouseState = require('../constants/houseState');

const extensible = (data) => {
    const { lease, house, userId } = data;

    if (lease.tenantId === userId) {
        const now = Date.now();

        if ([HouseState.rented, HouseState.willFree].includes(house.state)
            && lease.willEndsAt - now < 30 * 24 * 3600 * 1000) {
            return true;
        }
    }
    return false;
};

module.exports = {
    extensible,
};
