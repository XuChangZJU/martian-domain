/**
 * Created by Administrator on 2017/1/16.
 */
"use strict";

const origin = {
    order: "order",
    pay: "pay",
    withdraw: "withdraw",
    withdrawFailure: "withdrawFailure",
    orderRefund: "orderRefund",
    payRefund: "payRefund",
};


const STRINGS_OF_ORIGINS = {
    [origin.order]: "订单收款",
    [origin.pay]: "订单付款",
    [origin.withdraw]: "提现",
    [origin.withdrawFailure]: "提现失败",
    [origin.orderRefund]: "订单退款",
    [origin.payRefund]: "支付退款",
};

const relation = {
    order: 'order',
    pay: 'pay',
    refund: 'refund',
    withdraw: 'withdraw',
}

function decodeOrigin(o) {
    return STRINGS_OF_ORIGINS[o];
}

module.exports = {
    origin,
    decodeOrigin,
    relation,
};
