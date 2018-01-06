/**
 * Created by Administrator on 2017/12/19.
 */
"use strict";

const state = {
    normal: 3,
    removed: 8,
    disabled: 9
};

const decodeState = (s) => {
    const STRING_OF_STATE = {
        [state.normal]: '已增加',
        [state.removed]: '已删除',
        [state.disabled]: '已禁用'
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
    clean: 3,           // 已同步到锁上
};

const decodeActionState = (s) => {
    const STRING_OF_STATE = {
        [state.dirty]: '未同步',
        [state.clean]: '已同步',
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
};

