/**
 * Created by Administrator on 2017/7/26.
 */
const state = require('./keyState');

const decoder = (s) => {
    const STRING_OF_STATES = {
        [state.stateExpired]: '已过期',
        [state.stateTempKeyExpiredWithoutUse]: '未使用已过期',
        [state.stateTempKeyExpiredWithUserConfirm]: '确认后过期',
        [state.stateTempKeyExpiredWithoutUserConfirm]: '未确认过期',
        [state.stateSlaveKeyExpiredByMaster]: '被删除',
        [state.stateSlaveKeyExpiredBySelf]: '自删除',
        [state.stateDisabled]: '被禁用',
        [state.stateLent]: '被借记',
        [state.stateActive]: '可使用',
        [state.stateTempKeyUsed]: '已使用',
        [state.stateTempKeyUsedAndOvertime]: '已超时',
    };

    return STRING_OF_STATES[s] || '未知状态';
};

module.exports = {
    state,
    decoder,
};
