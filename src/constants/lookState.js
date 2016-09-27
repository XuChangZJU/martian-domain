/**
 * Created by Administrator on 2016/8/26.
 */
"use strict";

module.exports = {
    invalid7: -70,			// 房屋下线
    invalid6: -60,			// 钥匙过期
    invalid5: -50,			// 主动取消
    invalid4: -40,			// 自己租下
    invalid3: -30,			// 其他租客抢租下
    invalid2: -20,			// 被抢租（已付款尚未看房）
    invalid1: -10,			// 被抢租（未付款）
    init: 1,				// 初始差太
    avail1: 5,				// 可用状态（使用临时钥匙看房）
    avail2: 8,				// 可用状态（上任租客在租）
    looking: 18,			// 正在看房
    end: 3,					// 已看过
    outDated: 30,			// 超时未确认离开
};
