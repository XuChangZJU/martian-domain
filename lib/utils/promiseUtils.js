/**
 * Created by Administrator on 2017/2/16.
 */
Promise.every = promises => {
    const result = promises.map(() => false);
    const promises2 = promises.map((ele, idx) => ele.then(res => {
        result[idx] = true;
        return Promise.resolve(res);
    }).catch(err => {
        return Promise.resolve(err);
    }));

    return Promise.all(promises2).then(res => {
        const failure = result.findIndex(ele => ele === false);
        if (failure !== -1) {
            throw res[failure];
        }
        return Promise.resolve(res);
    });
};