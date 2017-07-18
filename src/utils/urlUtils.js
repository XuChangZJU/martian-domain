/**
 * Created by Administrator on 2016/11/29.
 */
"use strict";
const assert = require('assert');

function genGetListUrl(api, indexFrom, count, sort, query, extras) {
    let url = `${api}`;
    let first = true;
    if (typeof indexFrom === 'number') {
        url += first ? '?' : '&';
        first = false;
        url += `indexFrom=${indexFrom}`;
    }
    if (count > 0 && typeof count === 'number') {
        url += first ? '?' : '&';
        first = false;
        url += `count=${count}`;
    }

    if (sort && typeof sort === 'object') {
        const _sort = JSON.stringify(sort);
        url += first ? '?' : '&';
        first = false;
        url += `sort=${encodeURIComponent(_sort)}`;
    }
    if (query && typeof query === 'object') {
        url += first ? '?' : '&';
        first = false;
        const _query = JSON.stringify(query);
        url += `query=${encodeURIComponent(_query)}`;
        // url += '&query=' + encodeURIComponent(_query);
    }
    if (extras && typeof extras === 'object') {
        // for (const item in extras) {
        Object.keys(extras).forEach((item) => {
            if (extras[item]) {
                url += first ? '?' : '&';
                first = false;
                // const _query = JSON.stringify(query);
                url += `${item}=${typeof extras[item] !== "string" ? JSON.stringify(extras[item]) : extras[item]}`;
            }
        });
        // }
    }
    return url;
}

function genItemUrl(api, id) {
    assert(api.endsWith(':id'));
    return api.replace(':id', id);
}

function genInitArea(method, body) {
    return {
        method,
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
        mode: 'cors',
    };
}

module.exports = {
    genItemUrl,
    genInitArea,
    genGetListUrl,
};
