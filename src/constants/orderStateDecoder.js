/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";
const orderState = require("./orderState");
const decoder = {
	[orderState.unpaid]: "未支付",
	[orderState.partialPayed]: "部分支付",
	[orderState.paid]: "已支付",
	[orderState.paying]: "支付中",
    [orderState.refundingToClosed2]: "退款中",
	[orderState.refundingToFailed]: "退款中",
	[orderState.closed1]: "已关闭（支付成功）",
	[orderState.closed2]: "已关闭（退款成功）",
	[orderState.closed3]: "已关闭（支付失败）",
    [orderState.failed]: "付款失败",
};

function decode(state) {
	return decoder[state];
}

module.exports = {
	decode
};
