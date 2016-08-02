/**
 * Created by Administrator on 2016/7/8.
 */
"use strict";

module.exports = {
	aborted: -99,              // 提前中止
	ignored: -8,				 // 忽略（房东不同意租给此租客）
	outDated: -10,               // 过期（一定时间后无响应）
	denied: -5,                 // 被房东拒绝
	preempted: -3,              // 被别人抢占（抢租下了）
	completed: -1,            	// 租约完成
	willBeDenied: 3,		 	// 将被拒绝（房东已经选择了忽略此租客的请求）
	applying: 10,               // 申请中
	contracted: 15,			 // 达成意向
	inContract: 20            	// 生效（执行中）
};
