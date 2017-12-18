/**
 * Created by Administrator on 2017/12/7.
 */
const mateType = {
    roomMate: 1,
};

const decodeCategory = (c) => {
    const STRING_OF_CATEGORY = {
        [mateType.roomMate]: '室友',
    };

    return STRING_OF_CATEGORY[c];
}

module.exports = {
    mateType,
    decodeCategory,
};
