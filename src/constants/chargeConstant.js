/**
 * Created by Administrator on 2017/3/7.
 */
"use strict";


const method = {
    byOrganization: 1,
    byLord: 2,
    martianLa: 3,
    none: 255
};

const type = {
    water: 1,
    electricity: 11,
    gas: 21,
    heating: 31
};

const decodeType = (t) => {
    const STRING = {
        [type.water]: '水费',
        [type.electricity]: '电费',
        [type.gas]: '燃气费',
        [type.heating]: '取暖费',
    };

    return STRING[t];
};

const methodDecoder = {
    [method.byOrganization]: "租客自主交纳",
    [method.byLord]: "由房东收取",
    [method.none]: "无",
    [method.martianLa]: "智能电表",
}

function decodeMethod(m) {
    return methodDecoder[m];
}

module.exports = {
    method,
    decodeMethod,
    type,
    decodeType,
};
