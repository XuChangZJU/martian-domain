/**
 * Created by Administrator on 2017/1/16.
 */
"use strict";

var _STRINGS_OF_ORIGINS;

var origin = {
    order: "order",
    pay: "pay",
    withdraw: "withdraw",
    withdrawFailure: "withdrawFailure",
    orderRefund: "orderRefund",
    payRefund: "payRefund"
};

var STRINGS_OF_ORIGINS = (_STRINGS_OF_ORIGINS = {}, _STRINGS_OF_ORIGINS[origin.order] = "订单收款", _STRINGS_OF_ORIGINS[origin.pay] = "订单付款", _STRINGS_OF_ORIGINS[origin.withdraw] = "提现", _STRINGS_OF_ORIGINS[origin.withdrawFailure] = "提现失败", _STRINGS_OF_ORIGINS[origin.orderRefund] = "订单退款", _STRINGS_OF_ORIGINS[origin.payRefund] = "支付退款", _STRINGS_OF_ORIGINS);

var relation = {
    order: 'order',
    pay: 'pay',
    refund: 'refund',
    withdraw: 'withdraw'
};

function decodeOrigin(o) {
    return STRINGS_OF_ORIGINS[o];
}

module.exports = {
    origin: origin,
    decodeOrigin: decodeOrigin,
    relation: relation
};