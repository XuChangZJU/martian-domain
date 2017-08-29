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
	shadow: 199,
	disabled: 999,
	dangerous: 998
};

const userStateDecoder = (state)  => {
	const USER_STATE_STRING = {
		[userState.normal]: '正常的',
		[userState.disabled]: '禁用的',
		[userState.shadow]: '未激活的',
		[userState.dangerous]: '危险用户',
	};
	return USER_STATE_STRING[state];
};

const mobileRetrievalState = {
    agency: 1,
    unAgency: 2,
    uncertain: 3,
    unknown: 4,
    expired: 9
};

const mobileRetrievalStateDecoder = (state)  => {
    const MOBILERETRIEVAL_STATE_STRING = {
        [mobileRetrievalState.agency]: '房产中介',
        [mobileRetrievalState.unAgency]: '非房产中介',
        [mobileRetrievalState.uncertain]: '暂不确定',
        [mobileRetrievalState.unknown]: '尚未检测',
        [mobileRetrievalState.expired]: '已过期',
    };
    return MOBILERETRIEVAL_STATE_STRING[state];
};

module.exports = {
	systemUsers,
	userState,
    mobileRetrievalState,
	userStateDecoder,
    mobileRetrievalStateDecoder
};
