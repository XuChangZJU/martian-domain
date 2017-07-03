/**
 * Created by Administrator on 2017/5/18.
 */
const state = require('./leaseState');

const applyType = {
    offLease: 3,
    endLease: 5,
};

const leaseApplyState = {
    init: 7,
    contracted: 8,
    denied: 9,
};

const treatment = {
    personal: 1,    //  影子租约，自己处理
    platform: 2,    //  影子租约，委托平台处理
    general: 3      //  正常生成的租约
};

const decode = require('./leaseStateDecoder');

const LeaseUnits = {
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

            tenantTaxRatio: 0,
            lordTaxRatio: 0.03,
            shadowTenantTaxRatioByPersonal: 0,
            shadowLordTaxRatioByPersonal: 0,
            shadowTenantTaxRatioByPlatform: 0,
            shadowLordTaxRatioByPlatform: 0.01,
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

            tenantTaxRatio: 0,
            lordTaxRatio: 0.03,
            shadowTenantTaxRatioByPersonal: 0,
            shadowLordTaxRatioByPersonal: 0,
            shadowTenantTaxRatioByPlatform: 0,
            shadowLordTaxRatioByPlatform: 0.01,
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

            tenantTaxRatio: 0,
            lordTaxRatio: 0.03,
            shadowTenantTaxRatio: 0,
            shadowLordTaxRatio: 0.01,
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

            tenantTaxRatio: 0,
            lordTaxRatio: 0.03,
            shadowTenantTaxRatio: 0,
            shadowLordTaxRatio: 0.01,
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
            tenantTaxRatio: 0.02,												// 平台对所有租金和违约金的抽税
            lordTaxRatio: 0.00,												// 平台对所有租金和违约金的抽税
        }
    },
    defaultUnit: "h",
    defaultKeyName: "租房钥匙",
    defaultRentalOrderTitle: "房屋租金",
    defaultDepositOrderTitle: "房屋押金",
    defaultTaxOrderTitle: "平台费用",
    defaultRefundOrderTitle: "退款"
}

module.exports = {
    state,
    applyType,
    decode,
    treatment,
    leaseApplyState,
    LeaseUnits
};
