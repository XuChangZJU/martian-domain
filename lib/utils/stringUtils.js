/**
 * Created by Administrator on 2016/4/13.
 */

function checkMobile(str) {
    var re = /^1\d{10}$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    checkMobile
};