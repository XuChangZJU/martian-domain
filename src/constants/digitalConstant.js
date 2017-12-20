/**
 * Created by Administrator on 2017/12/19.
 */
"use strict";

const state = {
    toBeAdded: 1,
    mayBeAdded: 2,
    normal: 3,
    toBeSet: 4,
    mayBeSet: 5,
    toBeRemoved: 6,
    mayBeRemoved: 7,
    removed: 8,
};

const decodeState = (s) => {
    const STRING_OF_STATE = {
        [state.toBeAdded]: '待增加',
        [state.mayBeAdded]: '或增加',
        [state.normal]: '已增加',
        [state.toBeSet]: '待修改',
        [state.mayBeSet]: '或修改',
        [state.toBeRemoved]: '待删除',
        [state.mayBeRemoved]: '或删除',
        [state.removed]: '已删除',
    };

    return STRING_OF_STATE[s];
};

const action = {
    add: 21,
    remove: 22,
    set: 23,
    clear: 24,
};

const decodeAction = (a) => {
    const STRING_OF_ACTION = {
        [action.add]: '增加',
        [action.remove]: '删除',
        [action.set]: '修改',
        [action.clear]: '清空',
    };

    return STRING_OF_ACTION[a];
};

const actionState = {
    dirty: 1,           // 未同步到锁上
    opaque: 2,          // 或许已同步到锁上
    clean: 3,           // 已同步到锁上
};

const decodeActionState = (s) => {
    const STRING_OF_STATE = {
        [state.dirty]: '未同步',
        [state.opaque]: '不明',
        [state.clean]: '已同步',
    };

    return STRING_OF_STATE[s];
};

const actionResult = {
    success: 0,
    keyWordValidateFail: 6,
    flashWritingError: 7,
    flashReadingError: 8,
    actionDisallowed: 9,
    commandUnrecognized: 10,
    paramLengthIllegal: 11,
    dataInconsistency: 12,
    notEnoughMemory: 13,
};

const decodeActionResult = (r) => {
    const STRING_OF_RESULT = {
        [actionResult.success]: '已成功',
        [actionResult.keyWordValidateFail]: '验证密码失败',
        [actionResult.flashReadingError]: '读flash失败',
        [actionResult.flashWritingError]: '写flash失败',
        [actionResult.actionDisallowed]: '操作被拒绝',
        [actionResult.commandUnrecognized]: '不能识别的命令',
        [actionResult.paramLengthIllegal]: '参数不合法',
        [actionResult.dataInconsistency]: '数据不一致',
        [!actionResult.notEnoughMemory]: '内存不足',
    };

    return STRING_OF_STATE[s];

};

module.exports = {
    state,
    decodeState,
    action,
    decodeAction,
    actionState,
    decodeActionState,
    actionResult,
    decodeActionResult,
};

