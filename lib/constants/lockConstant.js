'use strict';

/**
 * Created by Administrator on 2017/12/7.
 */
var category = {
    normal: 1,
    creditable: 2
};

var decodeCategory = function decodeCategory(c) {
    var _STRING_OF_CATEGORY;

    var STRING_OF_CATEGORY = (_STRING_OF_CATEGORY = {}, _STRING_OF_CATEGORY[category.normal] = '正常', _STRING_OF_CATEGORY[category.creditable] = '租借用', _STRING_OF_CATEGORY);

    return STRING_OF_CATEGORY[c];
};

module.exports = {
    category: category,
    decodeCategory: decodeCategory
};