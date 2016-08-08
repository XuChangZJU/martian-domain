/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";
const houseState = require("./houseState");
const decoder = {
	[houseState.incomplete]: "未完成",
	[houseState.denied]: "被拒绝",
	[houseState.inVerifying]: "审核中",
	[houseState.offline]: "已下线",
	[houseState.willFree]: "将到期",
	[houseState.free]: "可租赁",
	[houseState.contracted]: "已签约",
	[houseState.ordered]: "已租下",
	[houseState.rented]: "有租约",
	[houseState.willOffline]: "到期下线"
};

function decode(state) {
	return decoder[state];
}

module.exports = {
	decode
};
