/**
 * Created by Administrator on 2016/6/28.
 */
"use strict";

module.exports = {
    incomplete: 0,              // 未完成
    denied: 10,                 // 被拒绝
    inVerifying: 20,            // 审核中
    offline: 30,                // 下线
    free: 40,                   // 上线无租约
    rented: 50,                 // 有租约
    willFree: 60                // 有租约但即将到期
};
