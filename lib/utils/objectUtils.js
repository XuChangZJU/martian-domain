/**
 * Created by Administrator on 2016/4/15.
 */
'use strict';

function countProps(obj) {
    var count = 0;
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            count++;
        }
    }
    return count;
}

/**
 比较两个对象是否（值）相等
 **/
function compareObject(v1, v2) {

    if (typeof v1 !== typeof v2) {
        return false;
    }

    if (typeof v1 === "function") {
        return v1.toString() === v2.toString();
    }

    if (typeof v1 === "object" && typeof v2 === "object") {
        if (v1 instanceof Date && v2 instanceof Date) {
            return v1.valueOf() === v2.valueOf();
        }
        if (countProps(v1) !== countProps(v2)) {
            return false;
        }
        var r = true;
        for (let k in v1) {
            r = compareObject(v1[k], v2[k]);
            if (!r) {
                return false;
            }
        }
        return true;
    } else {
        return v1 === v2;
    }
}

function filterAttributes(obj, keys, preserve) {

    for (let i in obj) {
        if (keys.indexOf(i) === -1) {
            if (preserve === true) {
                delete obj[i];
            }
        } else {
            if (preserve === false) {
                delete obj[i];
            }
        }
    }
}

function pruneObject(obj, attributes) {
    if (typeof obj !== "object") {
        throw new Error("convertObjectToArray的参数必须是Object类型");
    }

    if (attributes instanceof Array) {
        filterAttributes(obj, attributes, true);
    } else {
        if (typeof attributes !== "object") {
            throw new Error("pruneObject的参数必须是数组或者对象");
        }
        if (typeof attributes.preserve !== "boolean") {
            throw new Error("pruneObject的过滤条件中必须有preserve的布尔属性");
        }
        if (typeof attributes.keys instanceof Array) {
            throw new Error("pruneObject的过滤条件中必须有keys的数组属性");
        }

        filterAttributes(obj, attributes.keys, attributes.preserve);
    }
}

function convertObjectToArray(obj) {
    if (!obj) return undefined;
    if (typeof obj !== "object") {
        throw new Error("convertObjectToArray的参数必须是Object类型");
    }
    var array = [];
    for (let i in obj) {
        array.push(obj[i]);
    }
    return array;
}

module.exports = {
    compareObject,
    pruneObject,
    convertObjectToArray
};