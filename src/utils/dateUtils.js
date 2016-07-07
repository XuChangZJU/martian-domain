'use strict';

function dateToString(date, fmt){
    if(!date instanceof Date) {
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
    if(!date instanceof Date) {
        date = new Date(date);
    }
    switch (scale.toLowerCase()) {
        case "y":
            date.setFullYear(date.getFullYear() + number);
            break;
        case "m":
            date.setMonth(date.getMonth() + number);
            break;
        case "d":
            date.setDate(date.getDate() + number);
            break;
        case "h":
            date.setHours(date.getHours() + number);
            break;
        case "n":
            date.setMinutes(date.getMinutes() + number);
            break;
        case "s":
            date.setSeconds(date.getSeconds() + number);
            break;
        default:
            throw new Error("不能识别的scale单位");
    }
    return date;
}

function getScale(scale, date) {
    if(!(date instanceof Date)){
        date = new Date(date);
    }
    switch(scale) {
        case "y":
            return date.getYear();
        case "m":
            return date.getMonth();
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
    getWeek
};