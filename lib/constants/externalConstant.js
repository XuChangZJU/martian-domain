"use strict";

/**
 * Created by Administrator on 2017/7/25
 */

var origin = {
	weChat: "weChat",
	weChatPro: "weChatPro",
	martian: "martian"
};

var originDecoder = function originDecoder(origin) {
	var _ORIGIN_STRING;

	var ORIGIN_STRING = (_ORIGIN_STRING = {}, _ORIGIN_STRING[origin.weChat] = '微信', _ORIGIN_STRING[origin.weChatPro] = '微信小程序', _ORIGIN_STRING[origin.martian] = '码天', _ORIGIN_STRING);
	return ORIGIN_STRING[origin];
};

module.exports = {
	origin: origin,
	originDecoder: originDecoder
};