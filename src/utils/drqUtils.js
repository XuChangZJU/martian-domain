/**
 * Created by Administrator on 2016/8/31.
 */
// destruct request query
"use strict";
const assign = require("lodash/assign");

function destructRequestOptions(req) {
	let result = assign({}, req.query);
	if(result.indexFrom) {
		result.indexFrom = parseInt(result.indexFrom, 10);
	}
	if(result.count) {
		result.count = parseInt(result.count, 10);
	}
	if(result.query) {
		result.query = JSON.parse(result.query);
	}
	if(result.sort) {
		result.sort = JSON.parse(result.sort);
	}
	result.user = req._user;
	result.clientInfo = req._clientInfo;

	return result;
}


module.exports = {
	destructRequestOptions
};

