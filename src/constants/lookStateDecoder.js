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
	[LookState.invalid5]: "已取消",
	[LookState.invalid6]: "已过期",
	[LookState.init]: "",
	[LookState.ordered]: "待支付",
	[LookState.avail1]: "看房路上",
	[LookState.avail2]: "联系租客",
	[LookState.looking]: "看房中",
	[LookState.end]: "已看过"
};

function decode(state) {
	return stateDecoder[state];
}

module.exports = {
	decode
};
