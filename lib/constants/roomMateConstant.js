'use strict';

/**
 * Created by Administrator on 2017/12/7.
 */
var mateType = {
    roomMate: 1,
    administrator: 2,
    worker: 3,
    tempWorker: 4,
    trustee: 5
};

var decodeMateType = function decodeMateType(c) {
    var _STRING_OF_CATEGORY;

    var STRING_OF_CATEGORY = (_STRING_OF_CATEGORY = {}, _STRING_OF_CATEGORY[mateType.roomMate] = '室友', _STRING_OF_CATEGORY[mateType.administrator] = '管理员', _STRING_OF_CATEGORY[mateType.worker] = '长期工作人员', _STRING_OF_CATEGORY[mateType.tempWorker] = '临时人员', _STRING_OF_CATEGORY[mateType.trustee] = '托管员', _STRING_OF_CATEGORY);

    return STRING_OF_CATEGORY[c];
};

module.exports = {
    mateType: mateType,
    decodeMateType: decodeMateType
};