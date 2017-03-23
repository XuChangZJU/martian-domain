/**
 * Created by Administrator on 2016/8/5.
 * 给租客看到的语义
 */
"use strict";

var _decoder;

var leaseState = require("./leaseState");
var decoder = (_decoder = {}, _decoder[leaseState.offline] = "房屋已失效", _decoder[leaseState.willAborted] = "将中止", _decoder[leaseState.shadow] = "未激活", _decoder[leaseState.waitingForHouseOnline] = "等待房屋上线", _decoder[leaseState.aborted] = "已中止", _decoder[leaseState.ignored] = "房东已拒绝", _decoder[leaseState.outDated] = "已过期", _decoder[leaseState.cancelled] = "已取消", _decoder[leaseState.denied] = "房东已拒绝", _decoder[leaseState.preempted] = "被抢租", _decoder[leaseState.incomplete] = "等待房屋审核", _decoder[leaseState.completed] = "租约完成", _decoder[leaseState.willBeDenied] = "申请中", _decoder[leaseState.applying] = "申请中", _decoder[leaseState.contracted] = "房东已同意", _decoder[leaseState.implementation] = "生效中", _decoder[leaseState.willCompleted] = "将到期", _decoder);

function decode(state) {
	return decoder[state];
}

module.exports = {
	decode: decode
};