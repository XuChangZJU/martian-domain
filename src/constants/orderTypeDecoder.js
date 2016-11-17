/**
 * Created by Administrator on 2016/11/10.
 */
"use strict";
const orderType = require("./orderType");
const decoder = {
    [orderType.rent]: "租金",
    [orderType.deposit]: "押金",
    [orderType.looking]: "看房金",
    [orderType.compensate]: "续约金",
    [orderType.tax]: "平台扣款",
    [orderType.coupon]: "平台奖金"
};

function decode(state) {
    return decoder[state];
}

module.exports = {
    decode
};
