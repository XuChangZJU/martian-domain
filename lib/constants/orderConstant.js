/**
 * Created by Administrator on 2016/12/25.
 */
"use strict";

var _STRING_OF_STATES, _STRING_OF_TYPES;

var state = {
    unpaid: 1,
    paying: 3,
    partialPaid: 5,
    paid: 10,
    toBeRefunded: 91,
    refunding: 99,
    refunded: 201,
    closed: 501,
    finished: 999
};

var STRING_OF_STATES = (_STRING_OF_STATES = {}, _STRING_OF_STATES[state.unpaid] = '未支付', _STRING_OF_STATES[state.paying] = '支付中', _STRING_OF_STATES[state.partialPaid] = '部分支付', _STRING_OF_STATES[state.paid] = '支付成功', _STRING_OF_STATES[state.toBeRefunded] = '退款中', _STRING_OF_STATES[state.refunding] = '退款中', _STRING_OF_STATES[state.refunded] = '退款成功', _STRING_OF_STATES[state.closed] = '已关闭', _STRING_OF_STATES[state.finished] = '已完成', _STRING_OF_STATES);

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
    lock: 7 };

var STRING_OF_TYPES = (_STRING_OF_TYPES = {}, _STRING_OF_TYPES[type.rent] = "租金", _STRING_OF_TYPES[type.deposit] = "押金", _STRING_OF_TYPES[type.looking] = "看房金", _STRING_OF_TYPES[type.compensate] = "违约金", _STRING_OF_TYPES[type.tax] = "平台服务费", _STRING_OF_TYPES[type.coupon] = "红包", _STRING_OF_TYPES[type.lock] = "智能锁购买", _STRING_OF_TYPES);

var decodeType = function decodeType(t) {
    return STRING_OF_TYPES[t];
};

module.exports = {
    state: state,
    type: type,
    decodeState: decodeState,
    decodeType: decodeType
};