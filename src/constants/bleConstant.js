'use strict';

const wordType = {
    DISPOSABLE: "DISPOSABLE",
    CONSTANT: "CONSTANT"
};
const battery = {
    warning: 30,
    warningSevere: 20
};

const event = {
    PERIPHERAL_SCANNED: "PERIPHERAL_SCANNED",
    LOCK_LOCKED: "LOCK_LOCKED",
    LOCK_UNLOCKED: "LOCK_UNLOCKED",
    CONNECTED: "CONNECTED",
    DISCONNECTED: "DISCONNECTED",
    DOOR_OPENED: "DOOR_OPENED",
    DOOR_CLOSED: "DOOR_CLOSED",
    VERSION_GOT: "VERSION_GOT",
    PERIPHERAL_READY: "PERIPHERAL_READY",
    LOCK_WORD_GOT: "LOCK_WORD_GOT",
    KEY_WORD_VERIFIED: "KEY_WORD_VERIFIED",
    ENCRYPT_WORD_SET: "ENCRYPT_WORD_SET",
    ENCRYPT_WORD_CLEARED: "ENCRYPT_WORD_CLEARED",
    CONSTANT_WORD_RESET: "CONSTANT_WORD_RESET",
    BOND_CLEARED: "BOND_CLEARED",

    DFU_DATA_POPULATED: "DFU_DATA_POPULATED",

    DIGITAL_GOT: 'DIGITAL_GOT',
    DIGITAL_ADDED: 'DIGITAL_ADDED',
    DIGITAL_REMOVED: 'DIGITAL_REMOVED',
    DIGITAL_SET: 'DIGITAL_SET',
    DIGITAL_CLEARED: 'DIGITAL_CLEARED',
    DIGITAL_USED_LOG_GOT: 'DIGITAL_USED_LOG_GOT',
    DIGITAL_REPORT_USE_HISTORY_SUCCESS: 'DIGITAL_REPORT_USE_HISTORY_SUCCESS',

    TIME_GOT: 'TIME_GOT',
    TIME_SET: 'TIME_SET',
};

const timerType = {
    'pcf8536_001': 1,           // pcf8536芯片，设置时输入单字节weekday，4字节time，读取时得到4字节time。time的实际含义见utils/peripheralUtils.js中的decodeTime函数
};


const result = {
    success: 0,
    keyWordValidateFail: 6,
    flashWritingError: 7,
    flashReadingError: 8,
    actionDisallowed: 9,
    commandUnrecognized: 10,
    paramLengthIllegal: 11,
    dataInconsistency: 12,
    notEnoughMemory: 13,
};

const decodeResult = (r) => {
    const STRING_OF_RESULT = {
        [result.success]: '已成功',
        [result.keyWordValidateFail]: '验证密码失败',
        [result.flashReadingError]: '读flash失败',
        [result.flashWritingError]: '写flash失败',
        [result.actionDisallowed]: '操作被拒绝',
        [result.commandUnrecognized]: '不能识别的命令',
        [result.paramLengthIllegal]: '参数不合法',
        [result.dataInconsistency]: '数据不一致',
        [!result.notEnoughMemory]: '内存不足',
    };

    return STRING_OF_RESULT[s];

};

module.exports = {
    wordType,
    battery,
    event,
    result,
    decodeResult,
    timerType,
};
