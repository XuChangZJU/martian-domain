/**
 * Created by Administrator on 2017/1/16.
 */
"use strict";

const origin = {
    order: "order",
    pay: "pay",
    withdraw: "withdraw",
    refund: "refund"
};


const STRINGS_OF_ORIGINS = {
    [origin.order]: "订单",
    [origin.pay]: "支付",
    [origin.withdraw]: "提现",
    [origin.refund]: "退款",
};


function decodeOrigin(o) {
    return STRINGS_OF_ORIGINS[o];
}

module.exports = {
    origin,
    decodeOrigin,
};
