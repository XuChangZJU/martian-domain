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
        [relation.floater]: '临时进出的'
    };

    return STRING_OF_RELATION[r];
};



module.exports = {
    relation,
    decodeRelation,
};
