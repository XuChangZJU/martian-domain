/**
 * Created by Administrator on 2016/7/8.
 */
"use strict";

module.exports = {
	violatedByTenant: -99,	  // 违约（租客）
	abortedByTenant: -50,      // 提前中止（租客）
	abortedByLord: -48,		 // 提前中止（房东）
	ignored: -8,				 // 忽略（房东不同意租给此租客）
	outDated: -10,               // 过期（一定时间后无响应）
	cancelled: -8,				// 已取消
	denied: -5,                 // 被房东拒绝
	preempted: -3,              // 被别人抢占（抢租下了）
	completed: -1,            	// 租约完成
	willBeDenied: 3,		 	// 将被拒绝（房东已经选择了忽略此租客的请求）
	applying: 10,               // 申请中
	contracted: 15,			 // 达成意向
	implementation: 20,        // 生效（执行中）
	willCompleted: 99,		 // 即将到期
};
