'use strict';

/**
 * Created by Administrator on 2017/2/28.
 */
var KeyActionType = require("./keyActionType");
var decode = function decode(type) {
    var _typeText;

    var typeText = (_typeText = {}, _typeText[KeyActionType.clearBonds] = '清除绑定设备', _typeText[KeyActionType.confirm] = '确认', _typeText[KeyActionType.confirmOutdate] = '过期后确认', _typeText[KeyActionType.dfu] = "锁升级", _typeText[KeyActionType.getKeyWord] = '获取锁原语', _typeText[KeyActionType.unlock] = '开门', _typeText[KeyActionType.resetConstantKeyWord] = '重置持久性开锁原语', _typeText);
    return typeText[type];
};

module.exports = {
    decode: decode
};