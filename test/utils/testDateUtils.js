/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";


const expect = require("expect.js");
const dateUtils = require("../../src/index").dateUtils;


describe("TEST dateUtils", function() {
	it("[Test align 1]", function(done) {
		let date = new Date();
		let dateAlignOnHours = new Date(dateUtils.align("h", date, true, true));

		console.log(dateUtils.dateToString(date, "yyyy-MM-dd hh:mm:ss"));
		console.log(dateUtils.dateToString(dateAlignOnHours, "yyyy-MM-dd hh:mm:ss"));

		expect(date.getFullYear()).to.eql(dateAlignOnHours.getFullYear());
		expect(date.getMonth()).to.eql(dateAlignOnHours.getMonth());
		expect(date.getDate()).to.eql(dateAlignOnHours.getDate());
		expect(date.getHours()).to.eql(dateAlignOnHours.getHours());
		done();
	});


	it("[Test align 2]", function(done) {
		let date = new Date();
		let dateAlignOnHours = new Date(dateUtils.align("n", date, true, true));

		console.log(dateUtils.dateToString(date, "yyyy-MM-dd hh:mm:ss"));
		console.log(dateUtils.dateToString(dateAlignOnHours, "yyyy-MM-dd hh:mm:ss"));

		expect(date.getFullYear()).to.eql(dateAlignOnHours.getFullYear());
		expect(date.getMonth()).to.eql(dateAlignOnHours.getMonth());
		expect(date.getDate()).to.eql(dateAlignOnHours.getDate());
		expect(date.getHours()).to.eql(dateAlignOnHours.getHours());
		expect(date.getMinutes()).to.eql(dateAlignOnHours.getMinutes());
		done();
	});
});
