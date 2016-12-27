/**
 * Created by Administrator on 2016/12/25.
 */
'use strict';

const state = {
    init: 0,
    refunding: 99,
    refunded: 201,
    failed: 999,
};

const STRING_OF_STATES = {
    [state.init]: "初始化",
    [state.refunding]: "退款中",
    [state.refunded]: "退款完成",
    [state.failed]: "退款失败",
};

const decodeState = (s) => {
    return STRING_OF_STATES[s]
};

module.exports = {
    state,
    decodeState,
};
