/**
 * Created by Administrator on 2016/9/9.
 */
const systemUsers = {
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

const userState = {
	normal: 1,
	disabled: 99,
	shadow: 199
};

function userStateDecoder(state) {
	const USER_STATE_STRING = {
		[userState.normal]: '正常的',
		[userState.disabled]: '禁用的',
		[userState.shadow]: '未激活的',
	};
	return USER_STATE_STRING[state];
};

module.exports = {
	systemUsers,
	userState,
	userStateDecoder,
};
