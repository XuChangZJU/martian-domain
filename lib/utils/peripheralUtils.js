/**
 * Created by Administrator on 2017/12/26.
 */
"use strict";

var _require = require('../constants/bleConstant'),
    TimerType = _require.timerType;

function encodeTime(time, timerType) {
    var time2 = void 0;
    if (typeof time === 'number') {
        time2 = new Date(time);
    } else if (typeof time === 'object' && time instanceof Date) {
        time2 = time;
    } else {
        throw new Error('不合法的time类型');
    }

    switch (timerType) {
        case TimerType["pcf8536_001"]:
            {
                // 目前只有pcf8536一种芯片
                var year = time2.getFullYear() - 2000;
                var month = time2.getMonth() + 1;
                var day = time2.getDate();
                var hour = time2.getHours();
                var minute = time2.getMinutes();
                var second = time2.getSeconds();
                var dayOfWeek = time2.getDay();

                var data = 0;

                data |= year << 26;

                assert(month <= 12);
                data |= month << 22;

                assert(day <= 31);
                data |= day << 17;

                assert(hour <= 24);
                data |= hour << 12;

                assert(minute <= 60);
                data |= minute << 6;

                assert(second <= 60);
                data |= second;

                console.warn('\u5C06\u628A\u82AF\u7247\u4E2D\u65F6\u95F4\u8BBE\u4E3A' + data);
                return {
                    time: data,
                    dayOfWeek: dayOfWeek
                };
            }
        default:
            {
                throw new Error('\u7CFB\u7EDF\u5C1A\u672A\u652F\u6301\u7684timerType: ' + timerType);
            }
    }
}

function decodeTime(data, timerType) {
    // 目前只有pcf8536一种芯片，代码版本为1
    if (typeof data !== 'number') {
        throw new Error('不支持的数据类型');
    }

    switch (timerType) {
        case TimerType["pcf8536_001"]:
            {
                var year = (data >> 26 & 0x3f) + 2000;
                var month = (data >> 22 & 0x0f) - 1;
                var day = data >> 17 & 0x1f;

                var hour = data >> 12 & 0x1f;
                var minute = data >> 6 & 0x3f;
                var second = data & 0x3f;

                var time = new Date();

                time.setFullYear(year);
                time.setMonth(month);
                time.setDate(day);
                time.setHours(hour);
                time.setMinutes(minute);
                time.setSeconds(second);

                // console.warn(`芯片中的时间是${time}`);

                return time.valueOf();
            }
        default:
            {
                throw new Error('\u7CFB\u7EDF\u5C1A\u672A\u652F\u6301\u7684timerType: ' + timerType);
            }
    }
}

module.exports = {
    encodeTime: encodeTime,
    decodeTime: decodeTime
};