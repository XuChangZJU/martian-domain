/**
 * Created by Administrator on 2017/12/7.
 */
const mateType = {
    roomMate: 1,
    administrator: 2,
    worker: 3,
    tempWorker: 4,
};

const decodeMateType = (c) => {
    const STRING_OF_CATEGORY = {
        [mateType.roomMate]: '室友',
        [mateType.administrator]: '管理员',
        [mateType.worker]: '工作人员',
        [mateType.tempWorker]: '临时工作人员'
    };

    return STRING_OF_CATEGORY[c];
}

module.exports = {
    mateType,
    decodeMateType,
};
