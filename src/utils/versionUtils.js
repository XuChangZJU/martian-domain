/**
 * Created by Administrator on 2016/6/29.
 */
"use strict";
const assert = require('assert');


/**
 * 比较两个版本是否相等，相等返回true，否则返回false
 * @param version1
 * @param version2
 * @returns {boolean}
 */
function compareLockVersion(version1, version2) {
    return version1.major === version2.major && version1.minor === version2.minor;
}

function compareVersion(version1, version2) {
    assert(typeof version1 === "string");
    assert(typeof version2 === "string");
    const v1 = version1.split(".");
    const v2 = version2.split(".");

    for(let i = 0; i < Math.max(v1.length, v2.length); i++) {
        const num1 = i < v1.length ? parseInt(v1[i], 10) : 0;
        const num2 = i < v2.length ? parseInt(v2[i], 10) : 0;
        if(num1 !== num2) return num1 - num2;
    }
    return 0;
}

module.exports = {
    compareVersion,
    compareLockVersion
};
