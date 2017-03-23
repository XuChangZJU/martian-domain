/**
 * Created by Administrator on 2016/12/21.
 */

"use strict";

var _decoder;

var LeasePayType = require("./leasePayType");
var decoder = (_decoder = {}, _decoder[LeasePayType.deposit] = "押金", _decoder[LeasePayType.rental] = "租金", _decoder[LeasePayType.refund] = "退款", _decoder[LeasePayType.compensate] = "已关闭", _decoder[LeasePayType.tenantTax] = "租客服务费", _decoder[LeasePayType.lordTax] = "房东服务费", _decoder[LeasePayType.historicalRental] = "历史租金", _decoder[LeasePayType.historicalDeposit] = "历史押金", _decoder);

function decode(state) {
    return decoder[state];
}

module.exports = {
    decode: decode
};