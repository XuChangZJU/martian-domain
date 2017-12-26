/**
 * Created by Administrator on 2017/12/26.
 */
"use strict";
const { timerType: TimerType } = require('../constants/bleConstant');

function encodeTime(time, timerType) {
    let time2;
    if (typeof time === 'number') {
        time2 = new Date(time);
    }
    else if (typeof time === 'object' && time instanceof Date) {
        time2 = time;
    }
    else {
        throw new Error('不合法的time类型');
    }

    switch (timerType) {
        case TimerType["pcf8536_001"]: {
            // 目前只有pcf8536一种芯片
            const year = time2.getFullYear() - 2000;
            const month = time2.getMonth() + 1;
            const day = time2.getDate();
            const hour = time2.getHours();
            const minute = time2.getMinutes();
            const second = time2.getSeconds();
            const dayOfWeek = time2.getDay();

            let data = 0;


            data |= (year) << 26;


            assert (month <= 12);
            data |= (month)  << 22;

            assert (day <= 31);
            data |= (day) << 17;

            assert (hour <= 24);
            data |= (hour)  << 12;

            assert (minute <= 60);
            data |= (minute)  << 6;

            assert (second <= 60);
            data |= second;

            console.warn(`将把芯片中时间设为${data}`);
            return {
                time: data,
                dayOfWeek,
            };
        }
        default: {
            throw new Error(`系统尚未支持的timerType: ${timerType}`);
        }
    }
}

function decodeTime(data, timerType) {
    // 目前只有pcf8536一种芯片，代码版本为1
    if (typeof data !== 'number') {
        throw new Error('不支持的数据类型');
    }

    switch (timerType) {
        case TimerType["pcf8536_001"]: {
            const year = ((data >> 26) & 0x3f) + 2000;
            const month = ((data >> 22) & 0x0f) - 1;
            const day = (data >> 17) & 0x1f;

            const hour = (data >> 12) & 0x1f;
            const minute = (data >> 6) & 0x3f;
            const second = data & 0x3f;

            const time = new Date();

            time.setFullYear(year);
            time.setMonth(month);
            time.setDate(day);
            time.setHours(hour);
            time.setMinutes(minute);
            time.setSeconds(second);

            // console.warn(`芯片中的时间是${time}`);

            return time.valueOf();
        }
        default: {
            throw new Error(`系统尚未支持的timerType: ${timerType}`);
        }
    }
}

module.exports = {
    encodeTime,
    decodeTime,
}
