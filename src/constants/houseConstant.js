/**
 * Created by Administrator on 2017/5/25.
 */
const category = {
    house: 1,
    flatShare: 2,
    apartment: 3,
    hotel: 5,
    spec: 99,
    room: 199,
};

const decodeCategory = (c) => {
    const CATEGORY_MATRIX = {
        [category.house]: '房屋',
        [category.flatShare]: '合租',
        [category.apartment]: '公寓',
        [category.hotel]: '酒店',
        [category.spec]: '规格',
        [category.room]: '房间',
    };

    return CATEGORY_MATRIX[c];
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
};
