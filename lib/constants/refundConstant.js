/**
 * Created by Administrator on 2016/12/25.
 */
'use strict';

var _STRING_OF_STATES;

var state = {
    init: 0,
    refunding: 99,
    refunded: 201,
    uncertain: 899,
    failed: 999
};

var STRING_OF_STATES = (_STRING_OF_STATES = {}, _STRING_OF_STATES[state.init] = "初始化", _STRING_OF_STATES[state.refunding] = "退款中", _STRING_OF_STATES[state.refunded] = "退款完成", _STRING_OF_STATES[state.uncertain] = "未知", _STRING_OF_STATES[state.failed] = "退款失败", _STRING_OF_STATES);

var decodeState = function decodeState(s) {
    return STRING_OF_STATES[s];
};

module.exports = {
    state: state,
    decodeState: decodeState
};