/**
 * Created by Administrator on 2016/8/31.
 */
"use strict";

const weights = {
    tiny: 10,
    low: 10,
    medium: 20,
    high: 60,
    top: 90
};

const icons = {
    warning: {
        group: "core",
        name: "wrong"
    },
    money: {
        group: "core",
        name: "mobile"
    },
    deny: {
        group: "core",
        name: "mobile"
    },
    fail: {
        group: "core",
        name: "wrong"
    },
    happy: {
        group: "core",
        name: "wrong"
    }
};
const words = {
    share: "享",
    identify: "验",
    pass: "过",
    key: "钥",
    warning: "警",
    receive: "收",
    pay: "付",
    rent: "租",
    denied: "拒",
    fail: "失",
    violate: "违",
    push: "催",
    online: "上",
    return: "退"
};
const states = {
    init: 0,
    sending: 1,
    success: 2,
    failure: 3,
    fatal: 127
};

const type = {
    coreServerStart: 0,
    sharedKeyGot: 1,
    sharedKeyLost: 2,
    idVerified: 3,
    sharedKeyEdited: 4,
    keyExpired: 5,
    keyActivated: 6,
    keyExpiredWithoutUserConfirm: 7,
    tempKeyUsedAndOvertime: 8,
    keyExpiredTimeExtended: 9,
    debitKeyExpired: 10,
    suspiciousLogIn: 11,
    accountEvent: 12,
    remindConfirm: 13,
    tempKeyProduced: 14,
    debitKeyProduced: 15,
    lockApplicationSending: 16,
    withdrawn: 17,
    lockLowBattery: 18,

    rentServerStart: 1000,
    leaseContracted: 1001,
    leaseDenied: 1002,
    leaseOutdated: 1003,
    leasePreempted: 1004,
    leasePreemptedForUnpaid: 1005,
    tempKeyDisabled: 1006,
    applyingHouseLeaseEnd: 1007,
    orderCreatedToTenant: 1008,
    orderCreatedToLord: 1009,
    fireLineReachedToTenant: 1010,
    fireLineReachedToLord: 1011,
    deadlineReachedToTenant: 1012,
    deadlineReachedAndHousePreempted: 1013,
    deadlineReachedToLord: 1014,
    rentalReturned: 1015,
    lookRefundReturned: 1016,
    depositAvailable: 1017,
    leaseApplying: 1018,
    leaseOrderedToTenantFirstTime: 1019,
    leasePayOrderedToTenant: 1020,
    leasePayCompletedToTenant: 1021,
    leasePayCompletedToLord: 1022,
    leasePayOrderedToLordFirstTime: 1023,
    leasePayOrderedToLord: 1024,
    consultRepliedToTenant: 1026,
    houseVerified: 1027,
    houseBeingFree: 1028,
    houseWaitingForLock: 1029,
    houseShadow: 1030,
    houseShadowFromFree: 1031,
    remindShadowUser: 1032,
    shadowLeaseActivated: 1035,
    houseWillOffline: 1036,
    houseOffline: 1037,
    tempKeyUsed: 1038,
    tempKeyUsedAndConfirm: 1039,
    tempKeyUsedAndConfirmOverTime: 1040,
    lookExpired: 1041,
    consultRepliedToLord: 1043,
    consultCreated: 1044,
    incompleteLeaseCancelled: 1045
};

const decodeState = s => {
    const STATE_TEXT = {
        [states.init]: '未发送',
        [states.sending]: '发送中',
        [states.success]: '发送成功',
        [states.failure]: '发送失败',
        [states.fatal]: '放弃发送'
    };
    return STATE_TEXT[s];
};

module.exports = {
    icons,
    words,
    weights,
    states,
    decodeState,
    type
};