/**
 * Created by Administrator on 2017/5/18.
 */
const state = require('./lookState');

const checkResult = {
    normal:1,
    abnormal: 2,
    uncertain: 3
};

const type = {
    general: 3,
    check: 5,
};

const decodeState = (s) => {
    const STRING_OF_STATES = {
        [state.invalid1]: "已失效",
        [state.invalid2]: "已失效",
        [state.invalid3]: "已失效",
        [state.invalid4]: "已失效",
        [state.invalid5]: "已失效",
        [state.invalid6]: "已失效",
        [state.invalid7]: "已失效",
        [state.invalid8]: "已失效",
        [state.init]: "初始",
        [state.cancel1]: "已取消",
        [state.cancel2]: "已取消",
        [state.avail1]: "看房路上",
        [state.avail2]: "联系租客",
        [state.looking]: "看房中",
        [state.end]: "已看过",
        [state.end2]: "已看过",
        [state.end3]: "已看过",
        [state.outDated]: "过期待确认"
    };

    return STRING_OF_STATES[s];
};

const decodeCheckResult = (cr) => {
    const STRING_OF_RESULT = {
        [checkResult.normal]: "正常",
        [checkResult.abnormal]: "异常",
        [checkResult.uncertain]: '不确定',
    };

    return STRING_OF_RESULT[cr];
};

const decodeType = (t) => {
    const STRING_OF_TYPE = {
        [type.general]: "普通看房",
        [type.check]: "检查房屋",
    };

    return STRING_OF_TYPE[t];
};

module.exports = {
    state,
    type,
    checkResult,
    decodeState,
    decodeCheckResult,
    decodeType,
};
