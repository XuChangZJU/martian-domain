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
    throw new Error('\u4E0D\u80FD\u7406\u89E3\u7684\u65F6\u95F4\u5355\u4F4D' + unit);
}

module.exports = unitDecoder;