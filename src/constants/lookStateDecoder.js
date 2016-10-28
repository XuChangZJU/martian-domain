/**
 * Created by Administrator on 2016/8/26.
 */
"use strict";

const LookState = require("./lookState");
const stateDecoder = {
	[LookState.invalid1]: "已出租",
	[LookState.invalid2]: "已出租",
	[LookState.invalid3]: "已出租",
	[LookState.invalid4]: "已出租",
	[LookState.invalid5]: "已出租",
	[LookState.invalid6]: "已出租",
	[LookState.init]: "",
	[LookState.cancel1]: "已取消",
    [LookState.cancel2]: "已取消",
	[LookState.avail1]: "看房路上",
	[LookState.avail2]: "联系租客",
	[LookState.looking]: "看房中",
	[LookState.end]: "已看过",
    [LookState.outDated]: "过期待确认"
};

function decode(state) {
	return stateDecoder[state];
}

module.exports = {
	decode
};
