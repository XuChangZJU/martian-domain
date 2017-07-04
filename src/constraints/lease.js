'use strict';

/**
 * Created by Administrator on 2017/6/26.
 */
var HouseState = require('../constants/houseState');
var LeaseState = require('../constants/leaseConstant').state;
const DateUtils = require("martian-domain").dateUtils;

const LeaseUnits = require("../constants/leaseConstant").LeaseUnits;

const ableToEndLease = (data)=> {
    const { lease, house, userId } = data || {};
    const { willEndsAt, beginsAt, deadPoint, unit, lordId } = lease || {};
    const { id } = house || {};
    const leaseState = (lease || {}).state;
    const houseState = (house || {}).state;
    const options = LeaseUnits.units[unit];
    if (options) {
        const availableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt);
        const availableLineTime = availableLine && new Date(availableLine).getTime();
        if (LeaseState.willCompleted === leaseState && houseState === HouseState.willFree && beginsAt <= Date.now() &&
            deadPoint === willEndsAt && availableLineTime <= Date.now() && lordId === userId) {
            return true;
        }
    }
    return false;
};

const ableToOffLease = (data)=> {
    const { lease, house, userId } = data || {};
    const { willEndsAt, beginsAt, deadPoint, unit, lordId, tenantId } = lease || {};
    const { id } = house || {};

    const leaseState = (lease || {}).state;
    const houseState = (house || {}).state;
    const options = LeaseUnits.units[unit];
    if (options) {
        const unAvailableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt);
        const unAvailableLineTime = unAvailableLine && new Date(unAvailableLine).getTime();
        if (beginsAt <= Date.now() && leaseState === LeaseState.implementation && houseState === HouseState.rented &&
            unAvailableLineTime > Date.now() && [lordId, tenantId].includes(userId)) {
            return true;
        }
    }
    return false;
};

const ableToReLease = (data)=> {
    const { lease, house, userId } = data || {};
    const { willEndsAt, beginsAt, deadPoint, unit, tenantId } = lease || {};
    const { id } = house || {};

    const leaseState = (lease || {}).state;
    const houseState = (house || {}).state;
    const options = LeaseUnits.units[unit];
    if (options) {
        const availableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt);
        const availableLineTime = availableLine && new Date(availableLine).getTime();
        if (beginsAt <= Date.now() && leaseState === LeaseState.willCompleted && houseState === HouseState.willFree &&
            availableLineTime <= Date.now() && tenantId === userId && deadPoint === willEndsAt) {
            return true;
        }
    }
    return false;
};

module.exports = {
    ableToEndLease,
    ableToOffLease,
    ableToReLease
};