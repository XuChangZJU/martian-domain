'use strict';

/**
 * Created by Administrator on 2017/6/26.
 */

var HouseState = require('../constants/houseState');
var LeaseState = require('../constants/leaseConstant').state;
var DateUtils = require("martian-domain").dateUtils;
var Treatment = require('../constants/leaseConstant').treatment;

var LeaseUnits = require("../constants/leaseConstant").LeaseUnits;

var ableToEndLease = function ableToEndLease(data) {
    var _ref = data || {},
        lease = _ref.lease,
        house = _ref.house,
        userId = _ref.userId;

    var _ref2 = lease || {},
        willEndsAt = _ref2.willEndsAt,
        beginsAt = _ref2.beginsAt,
        deadPoint = _ref2.deadPoint,
        unit = _ref2.unit,
        lordId = _ref2.lordId,
        treatment = _ref2.treatment;

    var _ref3 = house || {},
        id = _ref3.id;

    var leaseState = (lease || {}).state;
    var houseState = (house || {}).state;
    var options = LeaseUnits.units[unit];
    if (treatment === Treatment.general && options) {
        var availableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt);
        var availableLineTime = availableLine && new Date(availableLine).getTime();
        if (LeaseState.willCompleted === leaseState && houseState === HouseState.willFree && beginsAt <= Date.now() && deadPoint === willEndsAt && availableLineTime <= Date.now() && lordId === userId) {
            return true;
        }
    }
    return false;
};

var ableToOffLease = function ableToOffLease(data) {
    var _ref4 = data || {},
        lease = _ref4.lease,
        house = _ref4.house,
        userId = _ref4.userId;

    var _ref5 = lease || {},
        willEndsAt = _ref5.willEndsAt,
        beginsAt = _ref5.beginsAt,
        deadPoint = _ref5.deadPoint,
        unit = _ref5.unit,
        lordId = _ref5.lordId,
        tenantId = _ref5.tenantId;

    var _ref6 = house || {},
        id = _ref6.id;

    var leaseState = (lease || {}).state;
    var houseState = (house || {}).state;
    var options = LeaseUnits.units[unit];
    if (options) {
        var unAvailableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt);
        var unAvailableLineTime = unAvailableLine && new Date(unAvailableLine).getTime();
        if (beginsAt <= Date.now() && leaseState === LeaseState.implementation && houseState === HouseState.rented && unAvailableLineTime > Date.now() && [lordId, tenantId].includes(userId)) {
            return true;
        }
    }
    return false;
};

var ableToReLease = function ableToReLease(data) {
    var _ref7 = data || {},
        lease = _ref7.lease,
        house = _ref7.house,
        userId = _ref7.userId,
        nextLease = _ref7.nextLease;

    var _ref8 = lease || {},
        willEndsAt = _ref8.willEndsAt,
        beginsAt = _ref8.beginsAt,
        deadPoint = _ref8.deadPoint,
        unit = _ref8.unit,
        tenantId = _ref8.tenantId;

    var _ref9 = house || {},
        id = _ref9.id;

    var leaseState = (lease || {}).state;
    var houseState = (house || {}).state;
    var originalData = (lease || {}).originalData;
    var options = LeaseUnits.units[unit];
    if (!nextLease && options && !originalData) {
        var availableLine = DateUtils.dateAdd(options.precision, -options.volumesForBeToOff, willEndsAt);
        var availableLineTime = availableLine && new Date(availableLine).getTime();
        if (beginsAt <= Date.now() && leaseState === LeaseState.willCompleted && houseState === HouseState.willFree && availableLineTime <= Date.now() && tenantId === userId && deadPoint === willEndsAt) {
            return true;
        }
    }
    return false;
};

module.exports = {
    ableToEndLease: ableToEndLease,
    ableToOffLease: ableToOffLease,
    ableToReLease: ableToReLease
};