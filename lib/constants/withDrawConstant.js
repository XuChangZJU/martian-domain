/**
 * Created by Administrator on 2016/11/1.
 */
"use strict";

var _originDecoder, _STRINGS_OF_STATES;

var origin = {
    alipay: "alipay"
};

var originDecoder = (_originDecoder = {}, _originDecoder[origin.alipay] = "支付宝", _originDecoder);

var state = {
    init: 1,
    withdrawing: 3,
    withdrawn: 10,
    failed: 501
};

var STRINGS_OF_STATES = (_STRINGS_OF_STATES = {}, _STRINGS_OF_STATES[state.init] = "未开始", _STRINGS_OF_STATES[state.withdrawing] = "提现中", _STRINGS_OF_STATES[state.withdrawn] = "已提现成功", _STRINGS_OF_STATES[state.failed] = "提现失败", _STRINGS_OF_STATES);

function decodeState(state) {
    return STRINGS_OF_STATES[state];
}

function decodeOrigin(s) {
    return originDecoder[s];
}

module.exports = {
    state: state,
    origin: origin,
    decodeOrigin: decodeOrigin,
    decodeState: decodeState
};