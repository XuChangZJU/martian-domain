/**
 * Created by Administrator on 2017/3/7.
 */
"use strict";

const method = {
    byOrganization: 1,
    byLord: 2,
    none: 255
};

const methodDecoder = {
    [method.byOrganization]: "租客自主交纳",
    [method.byLord]: "由房东收取",
    [method.none]: "无"
};

function decodeMethod(m) {
    return methodDecoder[m];
}

module.exports = {
    method,
    decodeMethod
};