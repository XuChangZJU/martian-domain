/**
 * Created by Administrator on 2016/12/25.
 */
'use strict';

const state = {
    init: 0,
    refunding: 1,
    refunded: 10,
    failed: 9999,
};

const STRING_OF_STATES = {
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
