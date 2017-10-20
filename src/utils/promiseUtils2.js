/**
 * Created by Administrator on 2017/2/16.
 */
Promise.oneByOne = (promises) => {
    function iterator (idx){
        if (idx === promises.length){
            return Promise.resolve();
        }
        return promises[idx]
            .then(
                ()=>iterator(idx + 1)
            )
    }
    return iterator(0);
};
