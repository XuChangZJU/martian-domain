/**
 * Created by Administrator on 2017/1/16.
 */
"use strict";
const state = {
    unpaid: 1,
    paid: 10,
    gettingRidOf: 20,
    sending: 30,
    sendingProblem: 40,
    confirmed: 50,
    applyingForRefunding: 60,
    refunding: 70,
    refunded: 201,
    closed: 501,
    finished: 901
};

const STRING_OF_STATES = {
    [state.unpaid]: "未支付",
    [state.paid]: "已支付",
    [state.gettingRidOf]: "备货中",
    [state.sending]: "等待收货",
    [state.sendingProblem]: "收货异常处理中",
    [state.confirmed]: "已确认",
    [state.applyingForRefunding]: "申请退款处理中",
    [state.refunding]: "退款中",
    [state.refunded]: "退款成功",
    [state.closed]: "已关闭",
    [state.finished]: "已完成",
};

const decodeState = (s) => {
    return STRING_OF_STATES[s]
};

module.exports = {
    state,
    decodeState,
};
