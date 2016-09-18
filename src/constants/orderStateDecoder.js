/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";
const orderState = require("./orderState");
const decoder = {
	[orderState.unpaid]: "未支付",
	[orderState.partialPayed]: "部分支付",
	[orderState.paid]: "已支付",
	[orderState.outdated]: "已过期失效",
	[orderState.outdatedButPartialPayed]: "已过期但部分支付",
	[orderState.closed]: "已关闭"
};

function decode(state) {
	return decoder[state];
}

module.exports = {
	decode
};
