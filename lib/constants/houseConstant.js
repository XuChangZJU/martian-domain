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

var state = require('./houseState');
var decodeHouse = require('./houseStateDecoder').decode;
var decodeHouse2 = require('./houseStateDecoder2').decode;

module.exports = {
    state: state,
    category: category,
    decodeCategory: decodeCategory,
    decodeHouse: decodeHouse,
    decodeHouse2: decodeHouse2
};