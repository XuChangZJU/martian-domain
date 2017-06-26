'use strict';

/**
 * Created by Administrator on 2017/6/26.
 */
var HouseState = require('../constants/houseState');

var extensible = function extensible(data) {
    var lease = data.lease,
        house = data.house,
        userId = data.userId;


    if (lease.tenantId === userId) {
        var now = Date.now();

        if ([HouseState.rented, HouseState.willFree].includes(house.state) && lease.willEndsAt - now < 30 * 24 * 3600 * 1000) {
            return true;
        }
    }
    return false;
};

module.exports = {
    extensible: extensible
};