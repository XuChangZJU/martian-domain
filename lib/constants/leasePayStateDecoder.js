/**
 * Created by Administrator on 2016/12/21.
 */

"use strict";

var _decoder;

var leasePayState = require("./leasePayState");
var decoder = (_decoder = {}, _decoder[leasePayState.unpaid] = "未支付", _decoder[leasePayState.paid] = "已支付", _decoder[leasePayState.refunded] = "已退款", _decoder[leasePayState.closed] = "已关闭", _decoder[leasePayState.finished] = "已结束", _decoder[leasePayState.reduced] = "已减免", _decoder);

function decode(state) {
    return decoder[state];
}

module.exports = {
    decode: decode
};