/**
 * Created by Administrator on 2016/12/21.
 */

"use strict";

const LeasePayType = require("./leasePayType");
const decoder = {
    [LeasePayType.deposit]: "押金",
    [LeasePayType.rental]: "租金",
    [LeasePayType.refund]: "退款",
    [LeasePayType.compensate]: "已关闭",
    [LeasePayType.tenantTax]: "租客服务费",
    [LeasePayType.lordTax]: "房东服务费",
    [LeasePayType.historicalRental]: "历史租金",
    [LeasePayType.historicalDeposit]: "历史押金"
};

function decode(state) {
    return decoder[state];
}

module.exports = {
    decode
};