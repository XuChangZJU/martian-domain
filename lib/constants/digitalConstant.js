/**
 * Created by Administrator on 2017/12/19.
 */
"use strict";

var state = {
    toBeAdded: 1,
    mayBeAdded: 2,
    normal: 3,
    toBeSet: 4,
    mayBeSet: 5,
    toBeRemoved: 6,
    mayBeRemoved: 7,
    removed: 8,
    cleared: 9
};

var decodeState = function decodeState(s) {
    var _STRING_OF_STATE;

    var STRING_OF_STATE = (_STRING_OF_STATE = {}, _STRING_OF_STATE[state.toBeAdded] = '待增加', _STRING_OF_STATE[state.mayBeAdded] = '或增加', _STRING_OF_STATE[state.normal] = '已增加', _STRING_OF_STATE[state.toBeSet] = '待修改', _STRING_OF_STATE[state.mayBeSet] = '或修改', _STRING_OF_STATE[state.toBeRemoved] = '待删除', _STRING_OF_STATE[state.mayBeRemoved] = '或删除', _STRING_OF_STATE[state.removed] = '已删除', _STRING_OF_STATE[state.cleared] = '已重置', _STRING_OF_STATE);

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
    opaque: 2, // 或许已同步到锁上
    clean: 3, // 已同步到锁上
    failed: 4 };

var decodeActionState = function decodeActionState(s) {
    var _STRING_OF_STATE2;

    var STRING_OF_STATE = (_STRING_OF_STATE2 = {}, _STRING_OF_STATE2[state.dirty] = '未同步', _STRING_OF_STATE2[state.opaque] = '不明', _STRING_OF_STATE2[state.clean] = '已同步', _STRING_OF_STATE2[state.failed] = '失败', _STRING_OF_STATE2);

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