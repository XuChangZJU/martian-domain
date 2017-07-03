'use strict';

/**
 * Created by Administrator on 2017/6/26.
 */
var HouseState = require('../constants/houseState');
var LeaseState = require('../constants/leaseConstant').state;
const DateUtils = require("martian-domain").dateUtils;

const LeaseUnits = require("../constants/leaseConstant").LeaseUnits;

const ableToEndLease = (data)=> {
    const {willEndsAt, beginsAt, deadPoint, unit, lordId} = data.lease || {};
    const leaseState = (data.lease || {}).state;
    const {id} = data.house || {};
    const houseState = (data.house || {}).state;
    const userId = data.userId;
    const options = LeaseUnits.units[unit];
    const availableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt).valueOf();
    if (LeaseState.willCompleted === leaseState && houseState === HouseState.willFree && beginsAt < Date.now() && deadPoint === willEndsAt && availableLine <= Date.now() && lordId === userId) {
        return true;
    }
    return false;
}

const ableToOffLease = (data)=> {
    const {willEndsAt, beginsAt, deadPoint, unit, lordId, tenantId} = data.lease || {};
    const leaseState = (data.lease || {}).state;
    const {id} = data.house || {};
    const houseState = (data.house || {}).state;
    const userId = data.userId;
    const options = LeaseUnits.units[unit];
    const unAvailableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt).valueOf();
    if (beginsAt < Date.now() && leaseState === LeaseState.implementation && houseState === HouseState.rented && unAvailableLine > Date.now() && [lordId, tenantId].includes(userId)) {
        return true;
    }
    return false;
}

const ableToReLease = (data)=> {
    const {willEndsAt, beginsAt, deadPoint, unit, lordId, tenantId} = data.lease || {};
    const leaseState = (data.lease || {}).state;
    const {id} = data.house || {};
    const houseState = (data.house || {}).state;
    const userId = data.userId;
    const options = LeaseUnits.units[unit];
    const availableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt).valueOf();
    if (beginsAt < Date.now() && leaseState === LeaseState.willCompleted && houseState === HouseState.willFree && availableLine <= Date.now() && tenantId === userId && deadPoint === willEndsAt) {
        return true;
    }
    return false;
}

module.exports = {
    ableToEndLease,
    ableToOffLease,
    ableToReLease
};