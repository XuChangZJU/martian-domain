/**
 * Created by Administrator on 2017/12/18.
 */
'use strict';

const relation = {
    owner: 1001,               // 房屋主人

    fav: 101,                // 我收藏的

    look: 201,           // 看房

    lease: 301,           // 租房

    manager: 401,         // 管理员

    roommate: 501,        // 室友

    worker: 601,            // 工作人员

    floater: 701,           // 临时人员
};

const decodeRelation = (r) => {
    const STRING_OF_RELATION = {
        [relation.owner]: '我的',
        [relation.fav]: '收藏的',
        [relation.look]: '看房的',
        [relation.lease]: '租房的',
        [relation.manager]: '管理的',
        [relation.roommate]: '同住的',
        [relation.worker]: '工作的',
        [relation.floater]: '临时进出的',
    };

    return STRING_OF_RELATION[r];
};

const relationState = {
    active: 1,
    willDisabled: 5,
    disabled: 10
};

const relationStateDecoder = (state)  => {
    const RELATION_STATE_STRING = {
        [relationState.active]: '活跃的',
        [relationState.willDisabled]: '即将失效的',
        [relationState.disabled]: '失效的'
    };
    return RELATION_STATE_STRING[state];
};


module.exports = {
    relation,
    decodeRelation,
    relationState,
    relationStateDecoder
};
