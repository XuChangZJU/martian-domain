'use strict';

/**
 * Created by Administrator on 2017/6/26.
 */
var HouseState = require('../constants/houseState');
var LeaseState = require('../constants/leaseConstant').state;
const DateUtils = require("martian-domain").dateUtils;

const LeaseUnits = require("../constants/leaseConstant").LeaseUnits;

const ableToEndLease = (data)=> {
<<<<<<< HEAD
    const {willEndsAt, beginsAt, deadPoint, unit, lordId} = data.lease || {};
    const leaseState = (data.lease || {}).state;
    const {id} = data.house || {};
    const houseState = (data.house || {}).state;
    const userId = data.userId;
    const options = LeaseUnits.units[unit];
    const availableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt).valueOf();
    if (LeaseState.willCompleted === leaseState && houseState === HouseState.willFree && beginsAt < Date.now() && deadPoint === willEndsAt && availableLine <= Date.now() && lordId === userId) {
        return true;
=======
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
>>>>>>> 5b56995ef48b6be20eb8f133e2c7945354b114fd
    }
    return false;
};

const ableToOffLease = (data)=> {
<<<<<<< HEAD
    const {willEndsAt, beginsAt, deadPoint, unit, lordId, tenantId} = data.lease || {};
    const leaseState = (data.lease || {}).state;
    const {id} = data.house || {};
    const houseState = (data.house || {}).state;
    const userId = data.userId;
    const options = LeaseUnits.units[unit];
    const unAvailableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt).valueOf();
    if (beginsAt < Date.now() && leaseState === LeaseState.implementation && houseState === HouseState.rented && unAvailableLine > Date.now() && [lordId, tenantId].includes(userId)) {
        return true;
=======
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
>>>>>>> 5b56995ef48b6be20eb8f133e2c7945354b114fd
    }
    return false;
};

const ableToReLease = (data)=> {
<<<<<<< HEAD
    const {willEndsAt, beginsAt, deadPoint, unit, lordId, tenantId} = data.lease || {};
    const leaseState = (data.lease || {}).state;
    const {id} = data.house || {};
    const houseState = (data.house || {}).state;
    const userId = data.userId;
    const options = LeaseUnits.units[unit];
    const availableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt).valueOf();
    if (beginsAt < Date.now() && leaseState === LeaseState.willCompleted && houseState === HouseState.willFree && availableLine <= Date.now() && tenantId === userId && deadPoint === willEndsAt) {
        return true;
=======
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
>>>>>>> 5b56995ef48b6be20eb8f133e2c7945354b114fd
    }
    return false;
};

module.exports = {
    ableToEndLease,
    ableToOffLease,
    ableToReLease
};