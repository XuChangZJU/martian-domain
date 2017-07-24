/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";

var _decoder;

var leaseState = require("./leaseState");
var decoder = (_decoder = {}, _decoder[leaseState.offline] = "房屋已失效", _decoder[leaseState.willAborted] = "即将中止", _decoder[leaseState.shadow] = "未激活", _decoder[leaseState.waitingForHouseOnline] = "等待房屋审核", _decoder[leaseState.aborted] = "提前中止", _decoder[leaseState.ignored] = "已被忽略掉", _decoder[leaseState.outDated] = "已过期失效", _decoder[leaseState.cancelled] = "主动取消", _decoder[leaseState.denied] = "被拒绝", _decoder[leaseState.preempted] = "已被其他租客租下", _decoder[leaseState.completed] = "已完成", _decoder[leaseState.finished] = "已终止", _decoder[leaseState.incomplete] = "未完成", _decoder[leaseState.willBeDenied] = "将被拒绝", _decoder[leaseState.applying] = "求租中", _decoder[leaseState.contracted] = "已达成意向", _decoder[leaseState.implementation] = "执行中", _decoder[leaseState.willCompleted] = "即将到期", _decoder);

function decode(state) {
	return decoder[state];
}

module.exports = {
	decode: decode
};