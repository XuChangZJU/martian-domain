"use strict";

/**
 * Created by Administrator on 2017/5/18.
 */
var state = require('./lookState');

var checkResult = {
    normal: 1,
    abnormal: 2,
    uncertain: 3
};

var type = {
    general: 3,
    check: 5
};

var decodeState = function decodeState(s) {
    var _STRING_OF_STATES;

    var STRING_OF_STATES = (_STRING_OF_STATES = {}, _STRING_OF_STATES[state.invalid1] = "已失效", _STRING_OF_STATES[state.invalid2] = "已失效", _STRING_OF_STATES[state.invalid3] = "已失效", _STRING_OF_STATES[state.invalid4] = "已失效", _STRING_OF_STATES[state.invalid5] = "已失效", _STRING_OF_STATES[state.invalid6] = "已失效", _STRING_OF_STATES[state.invalid7] = "已失效", _STRING_OF_STATES[state.invalid8] = "已失效", _STRING_OF_STATES[state.init] = "初始", _STRING_OF_STATES[state.cancel1] = "已取消", _STRING_OF_STATES[state.cancel2] = "已取消", _STRING_OF_STATES[state.avail1] = "看房路上", _STRING_OF_STATES[state.avail2] = "联系租客", _STRING_OF_STATES[state.looking] = "看房中", _STRING_OF_STATES[state.end] = "已看过", _STRING_OF_STATES[state.end2] = "已看过", _STRING_OF_STATES[state.end3] = "已看过", _STRING_OF_STATES[state.outDated] = "过期未确认", _STRING_OF_STATES);

    return STRING_OF_STATES[s];
};

var decodeCheckResult = function decodeCheckResult(cr) {
    var _STRING_OF_RESULT;

    var STRING_OF_RESULT = (_STRING_OF_RESULT = {}, _STRING_OF_RESULT[checkResult.normal] = "正常", _STRING_OF_RESULT[checkResult.abnormal] = "异常", _STRING_OF_RESULT[checkResult.uncertain] = '不确定', _STRING_OF_RESULT);

    return STRING_OF_RESULT[cr];
};

var decodeType = function decodeType(t) {
    var _STRING_OF_TYPE;

    var STRING_OF_TYPE = (_STRING_OF_TYPE = {}, _STRING_OF_TYPE[type.general] = "普通看房", _STRING_OF_TYPE[type.check] = "检查房屋", _STRING_OF_TYPE);

    return STRING_OF_TYPE[t];
};

module.exports = {
    state: state,
    type: type,
    checkResult: checkResult,
    decodeState: decodeState,
    decodeCheckResult: decodeCheckResult,
    decodeType: decodeType
};