/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";

var _decoder;

var houseState = require("./houseState");
var decoder = (_decoder = {}, _decoder[houseState.incomplete] = "未审核", _decoder[houseState.denied] = "被拒绝", _decoder[houseState.dirty] = "修改过", _decoder[houseState.inVerifying] = "审核中", _decoder[houseState.offline] = "已下线", _decoder[houseState.willFree] = "将到期", _decoder[houseState.shadow] = "租约未激活", _decoder[houseState.free] = "可租赁", _decoder[houseState.online] = "通过", _decoder[houseState.ordered] = "已预订", _decoder[houseState.rented] = "出租中", _decoder[houseState.willOffline] = "到期下线", _decoder);

function decode(state) {
	return decoder[state];
}

module.exports = {
	decode: decode
};