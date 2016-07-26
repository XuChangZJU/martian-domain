/**
 * Created by Administrator on 2016/7/26.
 */
"use strict";


const expect = require("expect.js");
const pinYinUtils = require("../../src/index").pinYinUtils;


describe("TEST PinYinUtils", function() {
	it("[Test PinYinUtils 1]", function(done) {
		let str = "我爱北京天安门";

		let pinyin = pinYinUtils.getFullChars(str);
		console.log(pinYinUtils.getFullChars(str));
		console.log(pinYinUtils.getCamelChars(str));

		expect(pinyin).to.be.eql("WoAiBeiJingTianAnMen");

		done();
	});


	it("[Test PinYinUtils 2]", function(done) {
		let str = "我Ai北京天An门";

		let pinyin = pinYinUtils.getFullChars(str);
		console.log(pinYinUtils.getFullChars(str));
		console.log(pinYinUtils.getCamelChars(str));

		expect(pinyin).to.be.eql("WoAiBeiJingTianAnMen");

		done();
	});
});
