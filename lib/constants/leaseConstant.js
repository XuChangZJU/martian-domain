"use strict";

/**
 * Created by Administrator on 2017/5/18.
 */
var state = require('./leaseState');

var applyType = {
    offLeaseImmediate: 1,
    offLease: 3,
    endLease: 5
};

var applyTypeDecode = function applyTypeDecode(type) {
    var _DATA;

    var DATA = (_DATA = {}, _DATA[applyType.offLeaseImmediate] = "立即停租", _DATA[applyType.offLease] = "停租", _DATA[applyType.endLease] = "退租", _DATA);
    return DATA[type];
};

var leaseApplyState = {
    init: 7,
    contracted: 8,
    denied: 9
};

var leaseApplyStateDecode = function leaseApplyStateDecode(state) {
    var _DATA2;

    var DATA = (_DATA2 = {}, _DATA2[leaseApplyState.init] = "未同意", _DATA2[leaseApplyState.contracted] = "已同意", _DATA2[leaseApplyState.denied] = "已拒绝", _DATA2);
    return DATA[state];
};

var treatment = {
    personal: 1, //  影子租约，自己处理
    platform: 2, //  影子租约，委托平台处理
    general: 3 //  正常生成的租约
};

var decode = require('./leaseStateDecoder');

var decodeTreatment = function decodeTreatment(s) {
    var _DATA3;

    var DATA = (_DATA3 = {}, _DATA3[treatment.personal] = '自主收取', _DATA3[treatment.platform] = '线上缴纳', _DATA3[treatment.general] = '正常流程', _DATA3);

    return DATA[s];
};

var LeaseUnits = {
    units: {
        "n": {
            precision: "s",
            defaultUnitsPerPay: 3,
            defaultDeposit: 1,
            volumesToOutDate: 1,
            volumesForIgnore: 30,
            volumesBeforeExtractable: 1,
            volumesBeforeFirstPay: 1,
            volumesFromFlToDl: 7,
            volumesFromMoToFl: 7,
            volumesForReturnDeposit: 7,
            volumesFromWeToEnd: 7,
            volumesFromWarnToWe: 7,
            volumesBetweenRemindsBeforeFireLine: 2,
            volumesBetweenRemindsAfterFireLine: 1,
            volumesForConfirmFacilities: 3,
            volumesForFacilitiesGuarantee: 1,
            volumesOfInformingBeforeSelling: 30,
            volumesForViolate: 15,

            volumesForBeToOff: 7,

            tenantTaxRatio: 0.03, // 平台对所有租金和违约金的抽税
            lordTaxRatio: 0.01, // 平台对所有租金和违约金的抽税
            shadowTenantTaxRatioByPersonal: 0,
            shadowLordTaxRatioByPersonal: 0,
            shadowTenantTaxRatioByPlatform: 0.03,
            shadowLordTaxRatioByPlatform: 0.01
        },
        "h": {
            precision: "n",
            defaultUnitsPerPay: 3,
            defaultDeposit: 1,
            volumesToOutDate: 1,
            volumesForIgnore: 30,
            volumesBeforeExtractable: 1,
            volumesBeforeFirstPay: 1,
            volumesFromFlToDl: 7,
            volumesFromMoToFl: 7,
            volumesForReturnDeposit: 7,
            volumesFromWeToEnd: 7,
            volumesFromWarnToWe: 7,
            volumesBetweenRemindsBeforeFireLine: 2,
            volumesBetweenRemindsAfterFireLine: 1,
            volumesForConfirmFacilities: 3,
            volumesForFacilitiesGuarantee: 1,
            volumesOfInformingBeforeSelling: 30,
            volumesForViolate: 15,

            volumesForBeToOff: 7,

            tenantTaxRatio: 0.03, // 平台对所有租金和违约金的抽税
            lordTaxRatio: 0.01, // 平台对所有租金和违约金的抽税
            shadowTenantTaxRatioByPersonal: 0,
            shadowLordTaxRatioByPersonal: 0,
            shadowTenantTaxRatioByPlatform: 0.03,
            shadowLordTaxRatioByPlatform: 0.01
        },
        "d": {
            precision: "h",
            defaultUnitsPerPay: 30,
            defaultDeposit: 1,
            volumesToOutDate: 1,
            volumesForIgnore: 30,
            volumesBeforeExtractable: 1,
            volumesBeforeFirstPay: 1,
            volumesFromFlToDl: 7,
            volumesFromMoToFl: 7,
            volumesForReturnDeposit: 7,
            volumesFromWeToEnd: 7,
            volumesFromWarnToWe: 7,
            volumesBetweenRemindsBeforeFireLine: 2,
            volumesBetweenRemindsAfterFireLine: 1,
            volumesForConfirmFacilities: 3,
            volumesOfInformingBeforeSelling: 30,
            volumesForViolate: 15,

            volumesForBeToOff: 7,

            tenantTaxRatio: 0.03, // 平台对所有租金和违约金的抽税
            lordTaxRatio: 0.01, // 平台对所有租金和违约金的抽税
            shadowTenantTaxRatioByPersonal: 0,
            shadowLordTaxRatioByPersonal: 0,
            shadowTenantTaxRatioByPlatform: 0.03,
            shadowLordTaxRatioByPlatform: 0.01
        },
        "m": {
            precision: "d",
            defaultUnitsPerPay: 3,
            defaultDeposit: 1,
            volumesToOutDate: 1,
            volumesForIgnore: 30,
            volumesBeforeExtractable: 1,
            volumesBeforeFirstPay: 1,
            volumesFromFlToDl: 7,
            volumesFromMoToFl: 7,
            volumesForReturnDeposit: 7,
            volumesFromWeToEnd: 7,
            volumesFromWarnToWe: 7,
            volumesBetweenRemindsBeforeFireLine: 2,
            volumesBetweenRemindsAfterFireLine: 1,
            volumesForConfirmFacilities: 3,
            volumesOfInformingBeforeSelling: 30,
            volumesForViolate: 15,

            volumesForBeToOff: 7,

            tenantTaxRatio: 0.03,
            lordTaxRatio: 0.01,
            shadowTenantTaxRatioByPersonal: 0,
            shadowLordTaxRatioByPersonal: 0,
            shadowTenantTaxRatioByPlatform: 0.03,
            shadowLordTaxRatioByPlatform: 0.01
        },
        "s": {
            precision: 's',
            defaultUnitsPerPay: 6,
            defaultDeposit: 1,
            volumesToOutDate: 3,
            volumesForIgnore: 3,
            volumesBeforeExtractable: 1,
            volumesBeforeFirstPay: 1,
            volumesFromFlToDl: 2,
            volumesFromMoToFl: 2,
            volumesForReturnDeposit: 7,
            volumesFromWeToEnd: 3,
            volumesFromWarnToWe: 7,
            volumesBetweenRemindsBeforeFireLine: 2,

            volumesBetweenRemindsAfterFireLine: 1,

            volumesForConfirmFacilities: 3,

            volumesForFacilitiesGuarantee: 1,

            volumesOfInformingBeforeSelling: 30,

            volumesForBeToOff: 4,
            volumesForViolate: 15,

            tenantTaxRatio: 0.03, // 平台对所有租金和违约金的抽税
            lordTaxRatio: 0.01, // 平台对所有租金和违约金的抽税
            shadowTenantTaxRatioByPersonal: 0,
            shadowLordTaxRatioByPersonal: 0,
            shadowTenantTaxRatioByPlatform: 0.03,
            shadowLordTaxRatioByPlatform: 0.01
        }
    },
    defaultUnit: "h",
    defaultKeyName: "租房钥匙",
    defaultRentalOrderTitle: "房屋租金",
    defaultDepositOrderTitle: "房屋押金",
    defaultTaxOrderTitle: "平台费用",
    defaultRefundOrderTitle: "退款"
};

module.exports = {
    state: state,
    applyType: applyType,
    decode: decode,
    treatment: treatment,
    leaseApplyState: leaseApplyState,
    LeaseUnits: LeaseUnits,
    decodeTreatment: decodeTreatment,
    applyTypeDecode: applyTypeDecode,
    leaseApplyStateDecode: leaseApplyStateDecode
};