/**
 * Created by Administrator on 2017/5/25.
 */
const category = {
    house: 1,
    flatShare: 2,
    tavern: 5,
    apartment: 13,
    hotel: 15,
    spec: 99,
    room: 199,
};

const decodeCategory = (c) => {
    const CATEGORY_MATRIX = {
        [category.house]: '整租',
        [category.flatShare]: '合租',
        [category.tavern]: '民宿',
        [category.apartment]: '公寓',
        [category.hotel]: '酒店',
        [category.spec]: '规格',
        [category.room]: '单间',
    };
    return CATEGORY_MATRIX[c];
};

const parentValidityState = {
    categoryToEntire: -2,       // 合租改整租，合租时的子房间的该置为的量值
    unavailable: -1,            // 有父房屋且父房屋的状态不是online
    nolock: 1,                  // 没有父房屋或有父亲且父亲状态是online但父亲上无锁
    hasLock: 2,                 // 有父房屋且父亲状态是online且父亲上有锁
};

const rentStatus = {
    rent: 5,
    unRent: 10,
};

const decodeRentStatus = (r) => {
    const RENTSTATUS_MATRIX = {
        [rentStatus.rent]: '已出租',
        [rentStatus.unRent]: '未出租',
    };
    return RENTSTATUS_MATRIX[r];
};

const state = require('./houseState');
const decodeHouse = require('./houseStateDecoder').decode;
const decodeHouse2 = require('./houseStateDecoder2').decode;

const externalHouseCheckResult = {
    rented: -1,                        // 已出租
    noYetValidated: 0,                 // 尚未验真
    fake: 1,                           // 假房源
    uncooperative: 2,                  // 不愿合作
    searchRoommate: 3,                 // 非房东，寻找合租室友
    willingToPayServiceCharge: 4,      // 暂时不愿装锁，愿意付3%服务费
    willingToInstallLock: 5,           // 一房东愿意装锁
    headLesseeWillingToInstallLock: 6, // 二房东愿意装锁

};

const externalHouseCheckResultDecoder = (checkResult) => {
    const EXTERNALHOUSE_CHECKRESULT_STRING = {
        [externalHouseCheckResult.rented]: '已出租',
        [externalHouseCheckResult.noYetValidated]: '尚未验真',
        [externalHouseCheckResult.fake]: '假房源',
        [externalHouseCheckResult.uncooperative]: '不愿合作',
        [externalHouseCheckResult.searchRoommate]: '非房东，寻找合租室友',
        [externalHouseCheckResult.willingToPayServiceCharge]: '暂时不愿装锁，愿意付3%服务费',
        [externalHouseCheckResult.willingToInstallLock]: '一房东愿意装锁',
        [externalHouseCheckResult.headLesseeWillingToInstallLock]: '二房东愿意装锁',
    };
    return EXTERNALHOUSE_CHECKRESULT_STRING[checkResult];
};

module.exports = {
    state,
    category,
    decodeCategory,
    decodeHouse,
    decodeHouse2,
    parentValidityState,
    rentStatus,
    decodeRentStatus,
    externalHouseCheckResult,
    externalHouseCheckResultDecoder,
};
