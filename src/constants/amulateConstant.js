/**
 * Created by Administrator on 2017/4/8.
 */
"use strict";

const state = {
    init: 1,
    activating: 8,
    active: 10,
    exchanged: 21,
    send: 101,
    expired: 999,
};


const stateDecoder = (s) => {
    const STRINGS_OF_TYPE = {
        [state.init]: '初始',
        [state.activating]: '激活中',
        [state.expired]: '已过期',
        [state.exchanged]: '已领取',
        [state.send]: '已赠送',
        [state.active]: '可用的',
    };
    return STRINGS_OF_TYPE[s];
}

module.exports = {
    state,
    stateDecoder,
};

