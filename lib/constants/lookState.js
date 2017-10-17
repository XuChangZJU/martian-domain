/**
 * Created by Administrator on 2016/8/26.
 */
"use strict";

module.exports = {
    invalid8: -80, // 订单退款
    invalid7: -70, // 房屋下线
    invalid6: -60, // 钥匙过期
    invalid5: -50, // 主动取消
    invalid4: -40, // 自己租下
    invalid3: -30, // 其他租客抢租下
    invalid2: -20, // 被抢租（已付款尚未看房）
    invalid1: -10, // 被抢租（未付款）
    cancel1: 3, // 取消二
    cancel2: 4, // 取消一
    end3: 5, // 已看过（超时未确认，通过其它途径确认）
    end: 6, // 已看过（确认离开）
    end2: 7, // 已看过（超时确认离开）
    init: 8, // 初始差太
    avail1: 10, // 可用状态（使用临时钥匙看房）
    avail2: 14, // 可用状态（上任租客在租）
    looking: 18, // 正在看房
    outDated: 30 };