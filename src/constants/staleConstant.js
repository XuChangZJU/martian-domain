/**
 * Created by Administrator on 2017/3/23.
 */
const state = {
    init: 1,
    deleting: 2,
    deleted: 3,
    failure: 4,
};

const STRING_OF_STATES = {
    [state.init]: '未删除',
    [state.deleting]: '删除中',
    [state.deleted]: '已删除',
    [state.failure]: '删除失败',
};

const decodeState = (s) => {
    return STRING_OF_STATES[s];
};

module.exports = {
    state,
    STRING_OF_STATES,
    decodeState,
};
