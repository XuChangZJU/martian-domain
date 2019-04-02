/**
 * Created by Administrator on 2017/3/7.
 */
"use strict";

var _methodDecoder;

var method = {
    byOrganization: 1,
    byLord: 2,
    martianLa: 3,
    none: 255
};

var type = {
    water: 1,
    electricity: 11,
    gas: 21,
    heating: 31
};

var decodeType = function decodeType(t) {
    var _STRING;

    var STRING = (_STRING = {}, _STRING[type.water] = '水费', _STRING[type.electricity] = '电费', _STRING[type.gas] = '燃气费', _STRING[type.heating] = '取暖费', _STRING);

    return STRING[t];
};

var methodDecoder = (_methodDecoder = {}, _methodDecoder[method.byOrganization] = "租客自主交纳", _methodDecoder[method.byLord] = "由房东收取", _methodDecoder[method.none] = "无", _methodDecoder[method.martianLa] = "智能电表", _methodDecoder);

function decodeMethod(m) {
    return methodDecoder[m];
}

module.exports = {
    method: method,
    decodeMethod: decodeMethod,
    type: type,
    decodeType: decodeType
};