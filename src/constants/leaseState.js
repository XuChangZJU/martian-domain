/**
 * Created by Administrator on 2016/7/8.
 */
"use strict";

module.exports = {
	illegal: -10,               // 非法
	ignored: -8,				 // 忽略（房东不同意租给此租客）
	preempted: -3,              // 被别人抢占（抢租下了）
	outDated: -2,               // 过期（一定时间后无响应）
	denied: -1,                 // 被房东拒绝
	applying: 10,               // 申请中
	willApply: 15,				 // 已签定未执行（上任租客未结束租赁）
	inContract: 20,            // 契约执行中（租房中）
	completed: 100,            // 租约完成
	aborted: 101              	// 提前中止
};
