/**
 * Created by Administrator on 2016/6/28.
 */
"use strict";

module.exports = {
	incomplete: 0,              // 未完成
	denied: 10,                 // 未通过
	inVerifying: 20,           // 审核中
	offline: 30,                // 下线
	willFree: 35,               // 有租约但即将到期,
	free: 40,                   // 已上线无租约
	contracted: 43,             // 达成意向（双方同意，租客未付款）
	ordered: 47,				 // 已预订（租客已付款，但前任租客还未退租）
	rented: 50,                 // 有租约
	willOffline: 70            // 有租约但到期后下线
};
