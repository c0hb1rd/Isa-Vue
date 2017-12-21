/**
 * Created by c0hb1rd on 2017/12/20.
 */
export function addResizeEvent(f) {
    let resize = document.body.onresize;
    document.body.onresize = (e) => {
        resize && resize();
        f(e);
    }
}