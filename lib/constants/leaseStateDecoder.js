/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";

const leaseState = require("./leaseState");
const decoder = {
	[leaseState.offline]: "房屋已失效",
	[leaseState.willAborted]: "即将中止",
	[leaseState.shadow]: "未激活",
	[leaseState.waitingForHouseOnline]: "等待房屋审核",
	[leaseState.aborted]: "提前中止",
	[leaseState.ignored]: "已被忽略掉",
	[leaseState.outDated]: "已过期失效",
	[leaseState.cancelled]: "主动取消",
	[leaseState.denied]: "被拒绝",
	[leaseState.preempted]: "已被其他租客租下",
	[leaseState.completed]: "已完成",
	[leaseState.incomplete]: "未完成",
	[leaseState.willBeDenied]: "将被拒绝",
	[leaseState.applying]: "求租中",
	[leaseState.contracted]: "已达成意向",
	[leaseState.implementation]: "执行中",
	[leaseState.willCompleted]: "即将到期"
};

function decode(state) {
	return decoder[state];
}

module.exports = {
	decode
};