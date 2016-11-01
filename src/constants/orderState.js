/**
 * Created by Administrator on 2016/8/4.
 */
"use strict";

module.exports = {
    unpaid: 1,
    paying: 3,
    partialPayed: 5,
    paid: 10,
    returning: 20,
    failed: 51,
    closed1: 101,       // 支付成功且关闭
    closed2: 105,       // 退款成功且关闭
    closed3: 109,       // 支付失败且关闭
};
