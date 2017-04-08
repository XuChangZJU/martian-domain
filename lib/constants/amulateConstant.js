/**
 * Created by Administrator on 2017/4/8.
 */
"use strict";

var state = {
    init: 1,
    expired: 999,
    active: 10,
    exchanged: 21
};

var stateDecoder = function stateDecoder(s) {
    var _STRINGS_OF_TYPE;

    var STRINGS_OF_TYPE = (_STRINGS_OF_TYPE = {}, _STRINGS_OF_TYPE[state.init] = '初始的', _STRINGS_OF_TYPE[state.expired] = '过期的', _STRINGS_OF_TYPE[state.exchanged] = '已兑换的', _STRINGS_OF_TYPE[state.active] = '可用的', _STRINGS_OF_TYPE);
    return STRINGS_OF_TYPE[s];
};

module.exports = {
    state: state,
    stateDecoder: stateDecoder
};