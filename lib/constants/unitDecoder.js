/**
 * Created by Administrator on 2017/2/20.
 */
"use strict";

function unitDecoder(unit) {
    switch (unit) {
        case 'y':
            {
                return {
                    name: '年',
                    classifier: ''
                };
                break;
            }
        case 'm':
            {
                return {
                    name: '月',
                    classifier: '个'
                };
                break;
            }
        case 'd':
            {
                return {
                    name: '天'
                };
                break;
            }
        case 'w':
            {
                return {
                    name: '星期',
                    classifier: '个'
                };
                break;
            }
        case 'h':
            {
                return {
                    name: '小时',
                    classifier: '个'
                };
                break;
            }
        case 'n':
            {
                return {
                    name: '分钟',
                    classifier: ''
                };
                break;
            }
        case 's':
            {
                return {
                    name: '秒',
                    classifier: ''
                };
                break;
            }
        case 'l':
            {
                return {
                    name: '毫秒'
                };
                break;
            }
    }
    throw new Error(`不能理解的时间单位${unit}`);
}

module.exports = unitDecoder;