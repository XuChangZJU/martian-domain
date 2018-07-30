'use strict';

var wordType = {
    DISPOSABLE: "DISPOSABLE",
    CONSTANT: "CONSTANT"
};
var battery = {
    warning: 30,
    warningSevere: 20
};

var event = {
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

    CONFIG_SET: 'CONFIG_SET',

    DFU_DATA_POPULATED: "DFU_DATA_POPULATED",

    DIGITAL_GOT: 'DIGITAL_GOT',
    DIGITAL_ADDED: 'DIGITAL_ADDED',
    DIGITAL_REMOVED: 'DIGITAL_REMOVED',
    DIGITAL_SET: 'DIGITAL_SET',
    DIGITAL_CLEARED: 'DIGITAL_CLEARED',
    DIGITAL_USED_LOG_GOT: 'DIGITAL_USED_LOG_GOT',
    DIGITAL_REPORT_USE_HISTORY_SUCCESS: 'DIGITAL_REPORT_USE_HISTORY_SUCCESS',

    MD_ADMIN_CHECKED: 'MD_ADMIN_CHECKED',
    MD_ADMIN_SET: 'MD_ADMIN_SET',
    MD_DISABLED: 'MD_DISABLED',
    MD_DISABLED_GOT: 'MD_DISABLED_GOT',
    MD_USE_HISTORY_GOT: 'MD_USE_HISTORY_GOT',
    MD_ADMIN_LOGGEDIN: 'MD_ADMIN_LOGGEDIN',

    TIME_GOT: 'TIME_GOT',
    TIME_SET: 'TIME_SET',

    FP_COUNT_GOT: 'FP_COUNT_GOT',
    FPS_GOT: 'FPS_GOT',
    FP_DELETED: 'FP_DELETED',
    FPS_CLEARED: 'FPS_CLEARED',
    FP_REGISTERED: 'FP_REGISTERED',
    FP_CMD_TERMINATED: 'FP_CMD_TERMINATED',
    FP_VERIFIED: 'FP_VERIFIED',
    FP_HISTORY_GOT: 'FP_HISTORY_GOT',
    FP_TOGGLED: 'FP_TOGGLED'
};

var timerType = {
    'pcf8536_001': 1 // pcf8536芯片，设置时输入单字节weekday，4字节time，读取时得到4字节time。time的实际含义见utils/peripheralUtils.js中的decodeTime函数
};

var result = {
    success: 0,
    keyWordValidateFail: 6,
    flashWritingError: 7,
    flashReadingError: 8,
    actionDisallowed: 9,
    commandUnrecognized: 10,
    paramLengthIllegal: 11,
    dataInconsistency: 12,
    notEnoughMemory: 13
};

var decodeResult = function decodeResult(r) {
    var _STRING_OF_RESULT;

    var STRING_OF_RESULT = (_STRING_OF_RESULT = {}, _STRING_OF_RESULT[result.success] = '已成功', _STRING_OF_RESULT[result.keyWordValidateFail] = '验证密码失败', _STRING_OF_RESULT[result.flashReadingError] = '读flash失败', _STRING_OF_RESULT[result.flashWritingError] = '写flash失败', _STRING_OF_RESULT[result.actionDisallowed] = '操作被拒绝', _STRING_OF_RESULT[result.commandUnrecognized] = '不能识别的命令', _STRING_OF_RESULT[result.paramLengthIllegal] = '参数不合法', _STRING_OF_RESULT[result.dataInconsistency] = '数据不一致', _STRING_OF_RESULT[!result.notEnoughMemory] = '内存不足', _STRING_OF_RESULT);

    return STRING_OF_RESULT[r];
};

module.exports = {
    wordType: wordType,
    battery: battery,
    event: event,
    result: result,
    decodeResult: decodeResult,
    timerType: timerType
};