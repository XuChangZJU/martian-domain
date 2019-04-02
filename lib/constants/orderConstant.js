/**
 * Created by Administrator on 2016/12/25.
 */
"use strict";

var _STRING_OF_STATES, _STRING_OF_TYPES;

var origin = require("./externalConstant").origin;

var state = {
    unpaid: 1,
    unpaid2: 2, //  自动支付，但不允许余额扣为负数时（autoPay === true， mustPay === false），应当更改order状态以区分unpaid
    paying: 3,
    partialPaid: 5,
    paid: 10,
    toBeRefunded: 91,
    refunding: 99,
    refunded: 201,
    closed: 501,
    outDated: 888,
    finished: 999
};

var STRING_OF_STATES = (_STRING_OF_STATES = {}, _STRING_OF_STATES[state.unpaid] = '待支付', _STRING_OF_STATES[state.unpaid2] = '待支付', _STRING_OF_STATES[state.paying] = '支付中', _STRING_OF_STATES[state.partialPaid] = '部分支付', _STRING_OF_STATES[state.paid] = '支付成功', _STRING_OF_STATES[state.toBeRefunded] = '退款中', _STRING_OF_STATES[state.refunding] = '退款中', _STRING_OF_STATES[state.refunded] = '退款成功', _STRING_OF_STATES[state.closed] = '已关闭', _STRING_OF_STATES[state.outDated] = '已过期', _STRING_OF_STATES[state.finished] = '已完成', _STRING_OF_STATES);

var decodeState = function decodeState(s) {
    return STRING_OF_STATES[s];
};

var type = {
    rent: 1, // 租金
    deposit: 2, // 押金
    looking: 3, // 看房金
    compensate: 4, // 违约金
    tax: 5, // 平台税金
    coupon: 6, // 平台红包
    lock: 7, // 智能锁购买
    endFee: 8, //  租约结束后的最后结算
    backCoupon: 9, //   红包过期退还
    electricityFees: 10, //  电费
    electricityRecharge: 11, //  电费充值
    electricityFeesTransfer: 12, //  电费结算
    weChatProOrder: 13 //  微信商城订单
};

var STRING_OF_TYPES = (_STRING_OF_TYPES = {}, _STRING_OF_TYPES[type.rent] = "租金", _STRING_OF_TYPES[type.deposit] = "押金", _STRING_OF_TYPES[type.looking] = "看房金", _STRING_OF_TYPES[type.compensate] = "违约金", _STRING_OF_TYPES[type.tax] = "平台服务费", _STRING_OF_TYPES[type.coupon] = "红包", _STRING_OF_TYPES[type.lock] = "智能锁购买", _STRING_OF_TYPES[type.endFee] = "费用结算", _STRING_OF_TYPES[type.backCoupon] = "过期的红包退还", _STRING_OF_TYPES[type.electricityFees] = "电费", _STRING_OF_TYPES[type.electricityRecharge] = "电费充值", _STRING_OF_TYPES[type.electricityFeesTransfer] = "电费结算", _STRING_OF_TYPES[type.weChatProOrder] = "订单", _STRING_OF_TYPES);

var decodeType = function decodeType(t) {
    return STRING_OF_TYPES[t];
};

var getOrderTypesByPlf = function getOrderTypesByPlf(platform) {
    switch (platform) {
        case origin.weChat:
            return [];
        case origin.weChatPro:
            return [type.weChatProOrder];
        case origin.martian:
            return [type.rent, type.deposit, type.looking, type.compensate, type.tax, type.coupon, type.lock, type.endFee, type.backCoupon, type.electricityFees, type.electricityFeesTransfer];
        default:
            return [type.rent, type.deposit, type.looking, type.compensate, type.tax, type.coupon, type.lock, type.endFee, type.backCoupon, type.electricityFees, type.electricityFeesTransfer];
    }
};

module.exports = {
    state: state,
    type: type,
    decodeState: decodeState,
    decodeType: decodeType,
    getOrderTypesByPlf: getOrderTypesByPlf
};