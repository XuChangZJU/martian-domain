/**
 * Created by Administrator on 2016/11/1.
 */
"use strict";
const state = {
    paying: 1,
    paid: 10,
    failed: 51,
};

const stateDecoder = {
    [state.paying]: "正在支付",
    [state.paid]: "支付完成",
    [state.failed]: "支付失败",
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
