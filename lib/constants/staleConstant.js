'use strict';

var _STRING_OF_STATES;

/**
 * Created by Administrator on 2017/3/23.
 */
var state = {
    init: 1,
    deleting: 2,
    deleted: 3,
    failure: 4
};

var STRING_OF_STATES = (_STRING_OF_STATES = {}, _STRING_OF_STATES[state.init] = '未删除', _STRING_OF_STATES[state.deleting] = '删除中', _STRING_OF_STATES[state.deleted] = '已删除', _STRING_OF_STATES[state.failure] = '删除失败', _STRING_OF_STATES);

var decodeState = function decodeState(s) {
    return STRING_OF_STATES[s];
};

module.exports = {
    state: state,
    STRING_OF_STATES: STRING_OF_STATES,
    decodeState: decodeState
};