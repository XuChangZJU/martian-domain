/**
 * Created by Administrator on 2017/1/16.
 */
"use strict";

var _STRING_OF_STATES;

var state = {
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
    finished: 901,
    changing: 911,
    returning: 921,
    returned: 931,
    end: 999
};

var STRING_OF_STATES = (_STRING_OF_STATES = {}, _STRING_OF_STATES[state.unpaid] = "未支付", _STRING_OF_STATES[state.paid] = "已支付", _STRING_OF_STATES[state.gettingRidOf] = "备货中", _STRING_OF_STATES[state.sending] = "等待收货", _STRING_OF_STATES[state.sendingProblem] = "收货异常处理中", _STRING_OF_STATES[state.confirmed] = "已确认", _STRING_OF_STATES[state.applyingForRefunding] = "申请退款处理中", _STRING_OF_STATES[state.refunding] = "退款中", _STRING_OF_STATES[state.refunded] = "退款成功", _STRING_OF_STATES[state.closed] = "已关闭", _STRING_OF_STATES[state.finished] = "已完成", _STRING_OF_STATES[state.changing] = "更换中", _STRING_OF_STATES[state.returning] = "归还中", _STRING_OF_STATES[state.returned] = "已归还", _STRING_OF_STATES[state.end] = "已结束", _STRING_OF_STATES);

var decodeState = function decodeState(s) {
    return STRING_OF_STATES[s];
};

module.exports = {
    state: state,
    decodeState: decodeState
};