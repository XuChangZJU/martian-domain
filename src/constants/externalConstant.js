/**
 * Created by Administrator on 2017/7/25
 */

const origin = {
	weChat: "weChat",
	weChatPro: "weChatPro",
};

const originDecoder = (origin)  => {
	const ORIGIN_STRING = {
		[origin.weChat]: '微信',
		[origin.weChatPro]: '微信小程序',
	};
	return ORIGIN_STRING[origin];
};

module.exports = {
	origin,
	originDecoder
};
