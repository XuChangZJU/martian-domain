/**
 * Created by Administrator on 2016/8/26.
 */
"use strict";

var _stateDecoder;

var LookState = require("./lookState");
var stateDecoder = (_stateDecoder = {}, _stateDecoder[LookState.invalid1] = "已失效", _stateDecoder[LookState.invalid2] = "已失效", _stateDecoder[LookState.invalid3] = "已失效", _stateDecoder[LookState.invalid4] = "已失效", _stateDecoder[LookState.invalid5] = "已失效", _stateDecoder[LookState.invalid6] = "已失效", _stateDecoder[LookState.invalid7] = "已失效", _stateDecoder[LookState.invalid8] = "已失效", _stateDecoder[LookState.init] = "初始", _stateDecoder[LookState.cancel1] = "已取消", _stateDecoder[LookState.cancel2] = "已取消", _stateDecoder[LookState.avail1] = "看房路上", _stateDecoder[LookState.avail2] = "联系租客", _stateDecoder[LookState.looking] = "看房中", _stateDecoder[LookState.end] = "已看过", _stateDecoder[LookState.end2] = "已看过", _stateDecoder[LookState.end3] = "已看过", _stateDecoder[LookState.outDated] = "过期未确认", _stateDecoder);

function decode(state) {
	return stateDecoder[state];
}

module.exports = {
	decode: decode
};