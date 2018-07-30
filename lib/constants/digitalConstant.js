/**
 * Created by Administrator on 2017/12/19.
 */
"use strict";

var state = {
    normal: 3,
    removed: 8,
    disabled: 9
};

var decodeState = function decodeState(s) {
    var _STRING_OF_STATE;

    var STRING_OF_STATE = (_STRING_OF_STATE = {}, _STRING_OF_STATE[state.normal] = '已增加', _STRING_OF_STATE[state.removed] = '已删除', _STRING_OF_STATE[state.disabled] = '已禁用', _STRING_OF_STATE);

    return STRING_OF_STATE[s];
};

var action = {
    add: 21,
    remove: 22,
    set: 23,
    clear: 24
};

var decodeAction = function decodeAction(a) {
    var _STRING_OF_ACTION;

    var STRING_OF_ACTION = (_STRING_OF_ACTION = {}, _STRING_OF_ACTION[action.add] = '增加', _STRING_OF_ACTION[action.remove] = '删除', _STRING_OF_ACTION[action.set] = '修改', _STRING_OF_ACTION[action.clear] = '清空', _STRING_OF_ACTION);

    return STRING_OF_ACTION[a];
};

var actionState = {
    dirty: 1, // 未同步到锁上
    clean: 3 // 已同步到锁上
};

var decodeActionState = function decodeActionState(s) {
    var _STRING_OF_STATE2;

    var STRING_OF_STATE = (_STRING_OF_STATE2 = {}, _STRING_OF_STATE2[state.dirty] = '未同步', _STRING_OF_STATE2[state.clean] = '已同步', _STRING_OF_STATE2);

    return STRING_OF_STATE[s];
};

module.exports = {
    state: state,
    decodeState: decodeState,
    action: action,
    decodeAction: decodeAction,
    actionState: actionState,
    decodeActionState: decodeActionState
};