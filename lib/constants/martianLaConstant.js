/**
 * Created by Administrator on 2016/12/25.
 */
"use strict";

var _STRING_OF_STATES;

var state = {
    normal: 1,
    relayOff: 3,
    shadow: 5,
    offLine: 9,
    disabled: 10
};

var STRING_OF_STATES = (_STRING_OF_STATES = {}, _STRING_OF_STATES[state.normal] = '正常使用中', _STRING_OF_STATES[state.relayOff] = '已关闭', _STRING_OF_STATES[state.offLine] = '已离线', _STRING_OF_STATES[state.disabled] = '已失效', _STRING_OF_STATES[state.shadow] = '电表还未完全激活', _STRING_OF_STATES);

var decodeState = function decodeState(s) {
    return STRING_OF_STATES[s];
};

module.exports = {
    state: state,
    decodeState: decodeState
};