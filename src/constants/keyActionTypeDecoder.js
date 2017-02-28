/**
 * Created by Administrator on 2017/2/28.
 */
const KeyActionType = require("./keyActionType");
const decode = (type) => {
    const typeText = {
        [KeyActionType.clearBonds]: '清除绑定设备',
        [KeyActionType.confirm]: '确认',
        [KeyActionType.confirmOutdate]: '过期后确认',
        [KeyActionType.dfu]: "锁升级",
        [KeyActionType.getKeyWord]: '获取锁原语',
        [KeyActionType.unlock]: '开门',
    };
    return typeText[type];
}

module.exports = {
    decode,
};
