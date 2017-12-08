'use strict';

/**
 * Created by Administrator on 2017/7/26.
 */
var state = require('./keyState');
var type = require('./keyType');

var decodeState = function decodeState(s) {
    var _STRING_OF_STATES;

    var STRING_OF_STATES = (_STRING_OF_STATES = {}, _STRING_OF_STATES[state.stateExpired] = '已过期', _STRING_OF_STATES[state.stateTempKeyExpiredWithoutUse] = '未使用已过期', _STRING_OF_STATES[state.stateTempKeyExpiredWithUserConfirm] = '确认后过期', _STRING_OF_STATES[state.stateTempKeyExpiredWithoutUserConfirm] = '未确认过期', _STRING_OF_STATES[state.stateSlaveKeyExpiredByMaster] = '被删除', _STRING_OF_STATES[state.stateSlaveKeyExpiredBySelf] = '自删除', _STRING_OF_STATES[state.stateDisabled] = '被禁用', _STRING_OF_STATES[state.stateLent] = '被借记', _STRING_OF_STATES[state.stateActive] = '可使用', _STRING_OF_STATES[state.stateTempKeyUsed] = '已使用', _STRING_OF_STATES[state.stateTempKeyUsedAndOvertime] = '已超时', _STRING_OF_STATES);

    return STRING_OF_STATES[s] || '未知状态';
};

var decodeType = function decodeType(t) {
    var _STRING_OF_TYPE;

    var STRING_OF_TYPE = (_STRING_OF_TYPE = {}, _STRING_OF_TYPE[type.credit] = '房东钥匙', _STRING_OF_TYPE[type.master] = '主钥匙', _STRING_OF_TYPE[type.slave] = '分享钥匙', _STRING_OF_TYPE[type.temp] = '临时钥匙', _STRING_OF_TYPE[type.debit] = '租房钥匙', _STRING_OF_TYPE);
};

module.exports = {
    state: state,
    decodeState: decodeState,
    type: type,
    decodeType: decodeType
};