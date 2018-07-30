/**
 * Created by Administrator on 2016/11/1.
 */
"use strict";

var _STRINGS_OF_STATES, _RefundAllowedWindow, _RefundWeightOfOrigin, _STRINGS_OF_ORIGINS;

var state = {
    init: 0,
    paying: 3,
    paid: 10,
    refunding: 99,
    partialRefunded: 101,
    refunded: 201,
    closed: 501,
    finished: 999
};

var STRINGS_OF_STATES = (_STRINGS_OF_STATES = {}, _STRINGS_OF_STATES[state.paying] = "正在支付", _STRINGS_OF_STATES[state.paid] = "支付完成", _STRINGS_OF_STATES[state.refunding] = "正在退款", _STRINGS_OF_STATES[state.partialRefunded] = "部分退款", _STRINGS_OF_STATES[state.refunded] = "已退款", _STRINGS_OF_STATES[state.closed] = "已关闭", _STRINGS_OF_STATES[state.finished] = "已结束", _STRINGS_OF_STATES);

function decodeState(s) {
    return STRINGS_OF_STATES[s];
}

var origin = {
    alipay: "alipay",
    account: "account",
    weChat: "weChat"
};

/**
 * 允许退款的窗口长度，一个pay成功后如果超过这个窗口，则不允许被退款（相应的order成为archieve状态）
 * @type {{}}
 */
var RefundAllowedWindow = (_RefundAllowedWindow = {}, _RefundAllowedWindow[origin.alipay] = 3600 * 1000, _RefundAllowedWindow[origin.account] = 24 * 3600 * 1000, _RefundAllowedWindow);

/**
 * 不同origin在退款时的优先级。优先级越高的越优先被退款
 * @type {{}}
 */
var RefundWeightOfOrigins = (_RefundWeightOfOrigin = {}, _RefundWeightOfOrigin[origin.alipay] = 100, _RefundWeightOfOrigin[origin.account] = 999, _RefundWeightOfOrigin);

var STRINGS_OF_ORIGINS = (_STRINGS_OF_ORIGINS = {}, _STRINGS_OF_ORIGINS[origin.alipay] = "支付宝", _STRINGS_OF_ORIGINS[origin.account] = "余额", _STRINGS_OF_ORIGINS[origin.weChat] = "微信", _STRINGS_OF_ORIGINS);

function decodeOrigin(o) {
    return STRINGS_OF_ORIGINS[o];
}

module.exports = {
    state: state,
    decodeState: decodeState,
    origin: origin,
    decodeOrigin: decodeOrigin,
    RefundWeightOfOrigins: RefundWeightOfOrigins,
    RefundAllowedWindow: RefundAllowedWindow
};