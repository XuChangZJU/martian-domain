/**
 * Created by Administrator on 2016/12/25.
 */
"use strict";
const state = {
    normal: 1,
    relayOff: 3,
    shadow: 5,
    offLine: 9,
    disabled: 10
};

const STRING_OF_STATES = {
    [state.normal]: '正常使用中',
    [state.relayOff]: '已关闭',
    [state.offLine]: '已离线',
    [state.disabled]: '已失效',
    [state.shadow]: '电表还未完全激活'
};

const decodeState = (s) => {
    return STRING_OF_STATES[s];
};

module.exports = {
    state,
    decodeState
};
