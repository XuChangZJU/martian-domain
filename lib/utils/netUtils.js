/**
 * Created by Administrator on 2016/7/11.
 */
"use strict";

var keyMirror = require("key-mirror");

var STATES = keyMirror({
    UNCONNECTED: null,
    WIFI: null,
    CELL: null,
    UNKNOWN: null
});

function transformNetState(value) {
    switch (value) {
        case 'none':
        case 'NONE':
            return STATES.UNCONNECTED;
        case 'wifi':
        case 'WIFI':
            return STATES.WIFI;
        case 'cell':
        case 'MOBILE':
            return STATES.CELL;
        default:
            return STATES.UNKNOWN;
    }
}

module.exports = {
    STATES: STATES,
    transformNetState: transformNetState
};