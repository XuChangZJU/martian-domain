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

module.exports = {
	state,
	category,
	decodeCategory,
	decodeHouse,
	decodeHouse2,
	parentValidityState,
	rentStatus,
	decodeRentStatus,
};
