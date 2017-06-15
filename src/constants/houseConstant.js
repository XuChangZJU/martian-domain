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
