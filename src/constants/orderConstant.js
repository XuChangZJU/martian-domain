/**
 * Created by Administrator on 2016/12/25.
 */
"use strict";
const state = {
    unpaid: 1,
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

const STRING_OF_STATES = {
    [state.unpaid]: '待支付',
    [state.paying]: '支付中',
    [state.partialPaid]: '部分支付',
    [state.paid]: '支付成功',
    [state.toBeRefunded]: '退款中',    // 这个状态是开始退款的状态，为了实现合并退款
    [state.refunding]: '退款中',
    [state.refunded]: '退款成功',
    [state.closed]: '已关闭',
    [state.outDated]: '已过期',        //  红包order特有
    [state.finished]: '已完成',

};

const decodeState = (s) => {
    return STRING_OF_STATES[s];
};

const type = {
    rent: 1,        // 租金
    deposit: 2,     // 押金
    looking: 3,     // 看房金
    compensate: 4,   // 违约金
    tax: 5,         // 平台税金
    coupon: 6,      // 平台红包
    lock: 7,        // 智能锁购买
    endFee: 8,      //  租约结束后的最后结算
    backCoupon: 9, //   红包过期退还
    electricityFees: 10, //  电费
    electricityRecharge: 10, //  电费充值
};

const STRING_OF_TYPES = {
    [type.rent]: "租金",
    [type.deposit]: "押金",
    [type.looking]: "看房金",
    [type.compensate]: "违约金",
    [type.tax]: "平台服务费",
    [type.coupon]: "红包",
    [type.lock]: "智能锁购买",
    [type.endFee]: "费用结算",
    [type.backCoupon]: "过期的红包退还",
    [type.electricityFees]: "电费",
    [type.electricityRecharge]: "电费充值",
};

const decodeType = (t) => {
    return STRING_OF_TYPES[t];
}

module.exports = {
    state,
    type,
    decodeState,
    decodeType,
};
