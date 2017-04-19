/**
 * Created by Administrator on 2017/4/8.
 */
"use strict";

var state = {
    init: 1,
    activating: 8,
    active: 10,
    exchanged: 21,
    send: 101,
    expired: 999
};

var stateDecoder = function stateDecoder(s) {
    var _STRINGS_OF_TYPE;

    var STRINGS_OF_TYPE = (_STRINGS_OF_TYPE = {}, _STRINGS_OF_TYPE[state.init] = '初始', _STRINGS_OF_TYPE[state.activating] = '激活中', _STRINGS_OF_TYPE[state.expired] = '已过期', _STRINGS_OF_TYPE[state.exchanged] = '未激活', _STRINGS_OF_TYPE[state.send] = '已赠送', _STRINGS_OF_TYPE[state.active] = '生效中', _STRINGS_OF_TYPE);
    return STRINGS_OF_TYPE[s];
};

module.exports = {
    state: state,
    stateDecoder: stateDecoder
};