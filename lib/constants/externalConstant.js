/**
 * Created by Administrator on 2017/7/25
 */

const origin = {
	weChat: "weChat"
};

const originDecoder = (origin)  => {
	const ORIGIN_STRING = {
		[origin.weChat]: '微信',
	};
	return ORIGIN_STRING[origin];
};

module.exports = {
	origin,
	originDecoder
};
