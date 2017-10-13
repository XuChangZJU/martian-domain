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

var methodDecoder = (_methodDecoder = {}, _methodDecoder[method.byOrganization] = "租客自主交纳", _methodDecoder[method.byLord] = "由房东收取", _methodDecoder[method.none] = "无", _methodDecoder[method.martianLa] = "智能电表", _methodDecoder);

function decodeMethod(m) {
    return methodDecoder[m];
}

module.exports = {
    method: method,
    decodeMethod: decodeMethod
};