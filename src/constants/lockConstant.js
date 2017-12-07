/**
 * Created by Administrator on 2017/12/7.
 */
const category = {
    normal: 1,
    creditable: 2,
};

const decodeCategory = (c) => {
    const STRING_OF_CATEGORY = {
        [category.normal]: '正常',
        [category.creditable]: '租借用',
    };

    return STRING_OF_CATEGORY[c];
}

module.exports = {
    category,
    decodeCategory,
};
