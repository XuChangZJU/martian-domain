'use strict';

/**
 * Created by Administrator on 2017/5/25.
 */
var category = {
    house: 1,
    flatShare: 2,
    tavern: 5,
    apartment: 13,
    hotel: 15,
    spec: 99,
    room: 199
};

var decodeCategory = function decodeCategory(c) {
    var _CATEGORY_MATRIX;

    var CATEGORY_MATRIX = (_CATEGORY_MATRIX = {}, _CATEGORY_MATRIX[category.house] = '整租', _CATEGORY_MATRIX[category.flatShare] = '合租', _CATEGORY_MATRIX[category.tavern] = '民宿', _CATEGORY_MATRIX[category.apartment] = '公寓', _CATEGORY_MATRIX[category.hotel] = '酒店', _CATEGORY_MATRIX[category.spec] = '规格', _CATEGORY_MATRIX[category.room] = '单间', _CATEGORY_MATRIX);
    return CATEGORY_MATRIX[c];
};

var parentValidityState = {
    categoryToEntire: -2, // 合租改整租，合租时的子房间的该置为的量值
    unavailable: -1, // 有父房屋且父房屋的状态不是online
    nolock: 1, // 没有父房屋或有父亲且父亲状态是online但父亲上无锁
    hasLock: 2 // 有父房屋且父亲状态是online且父亲上有锁
};

var rentStatus = {
    rent: 5,
    unRent: 10
};

var decodeRentStatus = function decodeRentStatus(r) {
    var _RENTSTATUS_MATRIX;

    var RENTSTATUS_MATRIX = (_RENTSTATUS_MATRIX = {}, _RENTSTATUS_MATRIX[rentStatus.rent] = '已出租', _RENTSTATUS_MATRIX[rentStatus.unRent] = '未出租', _RENTSTATUS_MATRIX);
    return RENTSTATUS_MATRIX[r];
};

var state = require('./houseState');
var decodeHouse = require('./houseStateDecoder').decode;
var decodeHouse2 = require('./houseStateDecoder2').decode;

var externalHouseCheckResult = {
    rented: -1, // 已出租
    noYetValidated: 0, // 尚未验真
    fake: 1, // 假房源
    uncooperative: 2, // 不愿合作
    searchRoommate: 3, // 非房东，寻找合租室友
    willingToPayServiceCharge: 4, // 暂时不愿装锁，愿意付3%服务费
    willingToInstallLock: 5, // 一房东愿意装锁
    headLesseeWillingToInstallLock: 6 // 二房东愿意装锁

};

var externalHouseCheckResultDecoder = function externalHouseCheckResultDecoder(checkResult) {
    var _EXTERNALHOUSE_CHECKR;

    var EXTERNALHOUSE_CHECKRESULT_STRING = (_EXTERNALHOUSE_CHECKR = {}, _EXTERNALHOUSE_CHECKR[externalHouseCheckResult.rented] = '已出租', _EXTERNALHOUSE_CHECKR[externalHouseCheckResult.noYetValidated] = '尚未验真', _EXTERNALHOUSE_CHECKR[externalHouseCheckResult.fake] = '假房源', _EXTERNALHOUSE_CHECKR[externalHouseCheckResult.uncooperative] = '不愿合作', _EXTERNALHOUSE_CHECKR[externalHouseCheckResult.searchRoommate] = '非房东，寻找合租室友', _EXTERNALHOUSE_CHECKR[externalHouseCheckResult.willingToPayServiceCharge] = '暂时不愿装锁，愿意付3%服务费', _EXTERNALHOUSE_CHECKR[externalHouseCheckResult.willingToInstallLock] = '一房东愿意装锁', _EXTERNALHOUSE_CHECKR[externalHouseCheckResult.headLesseeWillingToInstallLock] = '二房东愿意装锁', _EXTERNALHOUSE_CHECKR);
    return EXTERNALHOUSE_CHECKRESULT_STRING[checkResult];
};

module.exports = {
    state: state,
    category: category,
    decodeCategory: decodeCategory,
    decodeHouse: decodeHouse,
    decodeHouse2: decodeHouse2,
    parentValidityState: parentValidityState,
    rentStatus: rentStatus,
    decodeRentStatus: decodeRentStatus,
    externalHouseCheckResult: externalHouseCheckResult,
    externalHouseCheckResultDecoder: externalHouseCheckResultDecoder
};