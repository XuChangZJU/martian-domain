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

module.exports = {
    relation: relation,
    decodeRelation: decodeRelation
};