/**
 * Created by Administrator on 2017/7/26.
 */
const state = require('./keyState');
const type = require('./keyType');

const decodeState = (s) => {
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

const decodeType = (t) => {
    const STRING_OF_TYPE = {
        [type.credit]: '房东钥匙',
        [type.master]: '主钥匙',
        [type.slave]: '分享钥匙',
        [type.temp]: '临时钥匙',
        [type.debit]: '租房钥匙',
    }

    return STRING_OF_TYPE[s] || '未知类型';
};

module.exports = {
    state,
    decodeState,
    type,
    decodeType,
};
