/**
 * Created by Administrator on 2016/6/29.
 */
"use strict";
/**
 * 比较两个版本是否相等，相等返回true，否则返回false
 * @param version1
 * @param version2
 * @returns {boolean}
 */
function compareVersion(version1, version2) {
    return version1.major === version2.major && version1.minor === version2.minor;
}

module.exports = {
    compareVersion
};
