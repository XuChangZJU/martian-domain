"use strict";

/**
 * Created by Administrator on 2016/9/9.
 */
var systemUsers = {
	root: {
		id: 1,
		mobile: "13000000000",
		nickname: "超级管理员"
	},
	coreBackend: {
		id: 2,
		mobile: "13000000001",
		nickname: "核心服务器后台进程"
	},
	martianRent: {
		id: 1001,
		mobile: "13000001001",
		nickname: "码天租房"
	},
	martianRentBackend: {
		id: 1002,
		mobile: "13000001002",
		nickname: "码天租房后台进程"
	}
};

var userState = {
	normal: 1,
	shadow: 199,
	disabled: 999
};

var userStateDecoder = function userStateDecoder(state) {
	var _USER_STATE_STRING;

	var USER_STATE_STRING = (_USER_STATE_STRING = {}, _USER_STATE_STRING[userState.normal] = '正常的', _USER_STATE_STRING[userState.disabled] = '禁用的', _USER_STATE_STRING[userState.shadow] = '未激活的', _USER_STATE_STRING);
	return USER_STATE_STRING[state];
};

module.exports = {
	systemUsers: systemUsers,
	userState: userState,
	userStateDecoder: userStateDecoder
};