/**
 * Created by Administrator on 2016/12/25.
 */
"use strict";
const state = {
    unpaid: 1,
    paying: 3,
    partialPaid: 5,
    paid: 10,
    toBeRefunded: 15,
    refunding: 20,
    refunded: 30,
    closed: 101,
    archived: 999,
};

const STRING_OF_STATES = {
    [state.unpaid]: '未支付',
    [state.paying]: '支付中',
    [state.partialPaid]: '部分支付',
    [state.paid]: '支付成功',
    [state.toBeRefunded]: '退款中',    // 这个状态是开始退款的状态，为了实现合并退款
    [state.refunding]: '退款中',
    [state.refunded]: '退款成功',
    [state.closed]: '已失效',          // 从未支付状态到的关闭状态
    [state.archived]: '已成功',        // 从支付成功状态到的关闭状态
};

const stateDecoder = (s) => {
    return STRING_OF_STATES[s];
};

const type = {
    rent: 1,        // 租金
    deposit: 2,     // 押金
    looking: 3,     // 看房金
    compensate: 4,   // 违约金
    tax: 5,         // 平台税金
    coupon: 6,      // 平台红包
};

const STRING_OF_TYPES = {
    [type.rent]: "租金",
    [type.deposit]: "押金",
    [type.looking]: "看房金",
    [type.compensate]: "续约金",
    [type.tax]: "平台扣款",
    [type.coupon]: "平台奖金"
};

const typeDecoder = (t) => {
    return STRING_OF_TYPES[t];
}

module.exports = {
    state,
    type,
    stateDecoder,
    typeDecoder,
};
