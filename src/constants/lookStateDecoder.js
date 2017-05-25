/**
 * Created by Administrator on 2016/8/26.
 */
"use strict";

const LookState = require("./lookState");
const stateDecoder = {
	[LookState.invalid1]: "已失效",
	[LookState.invalid2]: "已失效",
	[LookState.invalid3]: "已失效",
	[LookState.invalid4]: "已失效",
	[LookState.invalid5]: "已失效",
	[LookState.invalid6]: "已失效",
	[LookState.invalid7]: "已失效",
	[LookState.invalid8]: "已失效",
	[LookState.init]: "初始",
	[LookState.cancel1]: "已取消",
    [LookState.cancel2]: "已取消",
	[LookState.avail1]: "看房路上",
	[LookState.avail2]: "联系租客",
	[LookState.looking]: "看房中",
	[LookState.end]: "已看过",
	[LookState.end2]: "已看过",
	[LookState.end3]: "已看过",
    [LookState.outDated]: "过期未确认"
};

function decode(state) {
	return stateDecoder[state];
}

module.exports = {
	decode
};
