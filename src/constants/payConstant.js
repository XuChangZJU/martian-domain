/**
 * Created by Administrator on 2016/11/1.
 */
"use strict";
const state = {
    init: 0,
    paying: 1,
    paid: 10,
    refundFailed: 31,
    failed: 51,
    refundingToFailed: 71,
    refundingToClosed2: 72,
    refundedToFailed: 101,
    refundedToClosed2: 102,
};

const stateDecoder = {
    [state.paying]: "正在支付",
    [state.paid]: "支付完成",
    [state.failed]: "支付失败",
    [state.refundFailed]: "退款失败",
    [state.refundingToFailed]: "退款中",
    [state.refundingToClosed2]: "退款中",
    [state.refundedToFailed]: "退款成功",
    [state.refundedToClosed2]: "退款成功",
}

function decodeState(s) {
    return stateDecoder[s];
}

const origin = {
    alipay: "alipay",
    account: "account",
};

const originDecoder = {
    [origin.alipay]: "支付宝",
    [origin.account]: "余额",
}

function decodeOrigin(s) {
    return originDecoder[s];
}

module.exports = {
    state,
    decodeState,
    origin,
    decodeOrigin
};
