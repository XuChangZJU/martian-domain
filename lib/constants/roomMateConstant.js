'use strict';

/**
 * Created by Administrator on 2017/12/7.
 */
var mateType = {
    roomMate: 1,
    administrator: 2,
    tempWorker: 3
};

var decodeCategory = function decodeCategory(c) {
    var _STRING_OF_CATEGORY;

    var STRING_OF_CATEGORY = (_STRING_OF_CATEGORY = {}, _STRING_OF_CATEGORY[mateType.roomMate] = '室友', _STRING_OF_CATEGORY[mateType.administrator] = '管理员', _STRING_OF_CATEGORY[mateType.tempWorker] = '临时工作人员', _STRING_OF_CATEGORY);

    return STRING_OF_CATEGORY[c];
};

module.exports = {
    mateType: mateType,
    decodeCategory: decodeCategory
};