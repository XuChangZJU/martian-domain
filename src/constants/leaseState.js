/**
 * Created by Administrator on 2016/7/8.
 */
"use strict";

module.exports = {
	completed: -99,            	// 租约完成
	//abortedByLord: -48,		 // 提前中止（房东）
	ignored: -12,				 // 忽略（房东不同意租给此租客）
	outDated: -10,               // 过期（一定时间后无响应）
	cancelled: -8,				// 已取消
	denied: -5,                 // 被房东拒绝
	aborted: -4,      			// 提前中止
	preempted: -3,              // 被别人抢占（抢租下了）
	willBeDenied: 3,		 	// 将被拒绝（房东已经选择了忽略此租客的请求）
	willAborted: 4,			// 将要提前中止
	shadow: 6,					// 影子租约
	waitingForHouseOnline: 8,		// 影子租约租客已经确认，但房屋还未上线
	applying: 10,               // 申请中
	contracted: 15,			 // 达成意向
	willCompleted: 19,		 // 即将到期
	implementation: 20,        // 生效（执行中）
};
