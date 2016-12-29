/**
 * Created by Administrator on 2016/12/21.
 */

"use strict";
const leasePayState = require("./leasePayState");
const decoder = {
    [leasePayState.unpaid]: "未支付",
    [leasePayState.paid]: "已支付",
    [leasePayState.refunded]: "已退款",
    [leasePayState.closed]: "已关闭",
    [leasePayState.finished]: "已结束",
};

function decode(state) {
    return decoder[state];
}

module.exports = {
    decode
};