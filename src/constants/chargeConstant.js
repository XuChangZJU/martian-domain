/**
 * Created by Administrator on 2017/3/7.
 */
"use strict";


const method = {
    byOrganization: 1,
    byLord: 2,
};

const methodDecoder = {
    [method.byOrganization]: "向机构交费",
    [method.byLord]: "房东收取"
}

function decodeMethod(m) {
    return methodDecoder[m];
}

module.exports = {
    method,
    decodeMethod,
};
