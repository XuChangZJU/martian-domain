"use strict";

/**
 * Created by Administrator on 2017/2/16.
 */
Promise.oneByOne = function (promises) {
    var result = [];
    function iterator(idx) {
        if (idx === promises.length) {
            return Promise.resolve(result);
        }
        return promises[idx]().then(function (r) {
            result.push(r);
            return iterator(idx + 1);
        });
    }
    return iterator(0);
};