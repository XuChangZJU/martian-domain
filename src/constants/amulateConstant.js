/**
 * Created by Administrator on 2017/4/8.
 */
"use strict";

const state = {
    init: 1,
    expired: 999,
    active: 10,
    exchanged: 21,
};


const stateDecoder = (s) => {
    const STRINGS_OF_TYPE = {
        [state.init]: '初始的',
        [state.expired]: '过期的',
        [state.exchanged]: '已兑换的',
        [state.active]: '可用的',
    };
    return STRINGS_OF_TYPE[s];
}

module.exports = {
    state,
    stateDecoder,
};

