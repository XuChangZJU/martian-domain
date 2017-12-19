/**
 * Created by Administrator on 2017/12/18.
 */
'use strict';

var relation = {
    owner: 1001, // 房屋主人

    fav: 101, // 我收藏的

    look: 201, // 看房

    lease: 301, // 租房

    manager: 401, // 管理员

    roommate: 501, // 室友

    worker: 601, // 工作人员

    floater: 701 };

var decodeRelation = function decodeRelation(r) {
    var _STRING_OF_RELATION;

    var STRING_OF_RELATION = (_STRING_OF_RELATION = {}, _STRING_OF_RELATION[relation.owner] = '我的', _STRING_OF_RELATION[relation.fav] = '收藏的', _STRING_OF_RELATION[relation.look] = '看房的', _STRING_OF_RELATION[relation.lease] = '租房的', _STRING_OF_RELATION[relation.manager] = '管理的', _STRING_OF_RELATION[relation.roommate] = '同住的', _STRING_OF_RELATION[relation.floater] = '临时进出的', _STRING_OF_RELATION);

    return STRING_OF_RELATION[r];
};

var relationState = {
    active: 1,
    willDisabled: 5,
    disabled: 10
};

var relationStateDecoder = function relationStateDecoder(state) {
    var _RELATION_STATE_STRIN;

    var RELATION_STATE_STRING = (_RELATION_STATE_STRIN = {}, _RELATION_STATE_STRIN[relationState.active] = '活跃的', _RELATION_STATE_STRIN[relationState.willDisabled] = '即将失效的', _RELATION_STATE_STRIN[relationState.disabled] = '失效的', _RELATION_STATE_STRIN);
    return RELATION_STATE_STRING[state];
};

module.exports = {
    relation: relation,
    decodeRelation: decodeRelation,
    relationState: relationState,
    relationStateDecoder: relationStateDecoder
};