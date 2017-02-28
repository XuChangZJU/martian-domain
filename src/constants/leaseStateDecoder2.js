/**
 * Created by Administrator on 2016/8/5.
 * 给租客看到的语义
 */
"use strict";
const leaseState = require("./leaseState");
const decoder = {
	[leaseState.offline]: "房屋已失效",
	[leaseState.willAborted]: "将中止",
	[leaseState.shadow]: "未激活",
	[leaseState.waitingForHouseOnline]: "等待房屋上线",
	[leaseState.aborted]: "已中止",
	[leaseState.ignored]: "房东已拒绝",
	[leaseState.outDated]: "已过期",
	[leaseState.cancelled]: "已取消",
	[leaseState.denied]: "房东已拒绝",
	[leaseState.preempted]: "被抢租",
	[leaseState.incomplete]: "等待房屋审核",
	[leaseState.completed]: "租约完成",
	[leaseState.willBeDenied]: "申请中",
	[leaseState.applying]: "申请中",
	[leaseState.contracted]: "房东已同意",
	[leaseState.implementation]: "生效中",
	[leaseState.willCompleted]: "将到期"
};

function decode(state) {
	return decoder[state];
}

module.exports = {
	decode
};
