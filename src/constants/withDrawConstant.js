/**
 * Created by Administrator on 2016/11/1.
 */
"use strict";

const origin = {
    alipay: "alipay",
};

const originDecoder = {
    [origin.alipay]: "支付宝",
}

const state = {
    init: 1,
    withdrawing: 3,
    withdrawn: 10,
    failed: 501
};


const STRINGS_OF_STATES = {
    [state.init]: "未开始",
    [state.withdrawing]: "提现中",
    [state.withdrawn]: "已提现成功",
    [state.failed]: "提现失败",
};

function decodeState(state) {
    return STRINGS_OF_STATES[state];
}

function decodeOrigin(s) {
    return originDecoder[s];
}

module.exports = {
    state,
    origin,
    decodeOrigin,
    decodeState,
};
