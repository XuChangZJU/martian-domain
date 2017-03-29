/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";

var _decoder;

var houseState = require("./houseState");
var decoder = (_decoder = {}, _decoder[houseState.incomplete] = "未完成", _decoder[houseState.denied] = "被拒绝", _decoder[houseState.waitingForLock] = "可租赁", _decoder[houseState.inVerifying] = "审核中", _decoder[houseState.offline] = "已下线", _decoder[houseState.willFree] = "将到期", _decoder[houseState.shadow] = "租约未激活", _decoder[houseState.free] = "可租赁", _decoder[houseState.ordered] = "已预订", _decoder[houseState.rented] = "有租约", _decoder[houseState.willOffline] = "到期下线", _decoder);

function decode(state) {
	return decoder[state];
}

module.exports = {
	decode: decode
};