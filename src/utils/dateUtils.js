'use strict';

function dateToString(date, fmt){
	if(!(date instanceof Date) && typeof date === 'number') {
		date = new Date(date);
	}
	var o = {
		"M+": date.getMonth() + 1, //月份
		"d+": date.getDate(), //日
		"h+": date.getHours(), //小时
		"m+": date.getMinutes(), //分
		"s+": date.getSeconds(), //秒
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度
		"S": date.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

/**计算时间之间的差值，注意date2一定要大于date1
 **/
function dateDiff(scale, date1, date2) {
	if(!(date1 instanceof Date)){
		date1 = new Date(date1);
	}

	if(!(date2 instanceof Date)){
		date2 = new Date(date2);
	}
	var part = date2.getTime() - date1.getTime(); //相差毫秒
	switch (scale.toLowerCase()) {
		case "y":
			return parseInt(date2.getFullYear() - date1.getFullYear());
		case "m":
			return parseInt((date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth()));
		case "d":
			return parseInt(part / 1000 / 60 / 60 / 24);
		case "w":
			return parseInt(part / 1000 / 60 / 60 / 24 / 7);
		case "h":
			return parseInt(part / 1000 / 60 / 60);
		case "n":
			return parseInt(part / 1000 / 60);
		case "s":
			return parseInt(part / 1000);
		case "l":
			return parseInt(part);
		default:
			throw new Error("不能识别的scale单位");
	}
}

function dateAdd(scale, number, date) {
	const date2 = (date instanceof Date) ? new Date(date.valueOf()) : new Date(date);
	switch (scale.toLowerCase()) {
		case "y":
			date2.setFullYear(date2.getFullYear() + number);
			break;
		case "m":
			date2.setMonth(date2.getMonth() + number);
			break;
		case "d":
			date2.setDate(date2.getDate() + number);
			break;
		case "h":
			date2.setHours(date2.getHours() + number);
			break;
		case "n":
			date2.setMinutes(date2.getMinutes() + number);
			break;
		case "s":
			date2.setSeconds(date2.getSeconds() + number);
			break;
		default:
			throw new Error("不能识别的scale单位");
	}
	return date2;
}

function getScale(scale, date) {
	if(!(date instanceof Date)){
		date = new Date(date);
	}
	switch(scale.toLowerCase()) {
		case "y":
			return date.getFullYear();
		case "m":
			return date.getMonth() + 1;
		case "d":
			return date.getDate();
		case "h":
			return date.getHours();
		case "n":
			return date.getMinutes();
		case "s":
			return date.getSeconds();
		case "l":
			return date.getMilliseconds();
		default:
			throw new Error("不能识别的scale单位");
	}
}

/**
 * 将时间在精度上对齐
 * @param scale 精度
 * @param date 时间
 * @param left 是否是左区间
 * @param closed 是否是闭区间
 */
function align(scale, date, left, closed) {
	let date2, millis;
	if(date instanceof Date){
		millis = date.valueOf();
	}
	else {
		millis = date;
		date = new Date(millis)
	}
    date2 = new Date(0);

	const scale2 = scale.toLowerCase();
	if(scale2 === "y") {
		if(left) {
			date2.setFullYear(date.getFullYear());
		}
		else {
			date2.setFullYear(date.getFullYear() + 1);
		}
	}
	else {
		date2.setFullYear(date.getFullYear());
		if(scale2 === "m") {
			if(left) {
				date2.setMonth(date.getMonth());
			}
			else {
				date2.setMonth(date.getMonth() + 1);
			}
		}
		else {
			date2.setMonth(date.getMonth());
			if (scale2 === 'w') {
				const dayOfWeek = date.getDay();
				const dayOfMonth = date.getDate();

				/**
				 * 按中国习惯，这里找周一去对齐
				 */
				if (left) {
					let diff = 1 - dayOfWeek;
					if (diff > 0) {
						diff = diff - 7;
					}
					date2.setDate(dayOfMonth + diff);
				}
				else {
					let diff = 8 - dayOfWeek;
					if (diff > 7) {
						diff = diff - 7;
					}
					date2.setDate(dayOfMonth + diff);
				}
			}
			else {
				if(scale2 === "d") {
					if(left) {
						date2.setDate(date.getDate());
					}
					else {
						date2.setDate(date.getDate() + 1);
					}
				}
				else {
					date2.setDate(date.getDate());
					if(scale2 === "h") {
						if(left) {
							date2.setHours(date.getHours());
						}
						else {
							date2.setHours(date.getHours() + 1);
						}
					}
					else {
						date2.setHours(date.getHours());
						if(scale2 === "n") {
							if(left){
								date2.setMinutes(date.getMinutes());
							}
							else {
								date2.setMinutes(date.getMinutes() + 1);
							}
						}
						else {
							date2.setMinutes(date.getMinutes());
							if(scale2 === "s") {
								if(left){
									date2.setSeconds(date.getSeconds());
								}
								else {
									date2.setSeconds(date.getSeconds() + 1);
								}
							}
							else {
								throw new Error("当前不支持在" + scale2 + "级别上进行对齐");
							}
						}
					}
				}
			}
		}
	}
	const millis2 = date2.valueOf();

	if(closed) {
		return millis2;
	}
	else {
		if(left) {
			return millis2 + 1;
		}
		else {
			return millis2 - 1;
		}
	}
}

const dayNames = new Array("周日","周一","周二","周三","周四","周五","周六");

//得到星期
function getWeek(date) {
	date = new Date(date);
	return dayNames[date.getDay()];
}


module.exports = {
	dateToString,
	dateDiff,
	getScale,
	dateAdd,
	getWeek,
	align
};