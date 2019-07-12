function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
} //获得属性
function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        for (attr in json) {
            var bStop = true; //所有的值都到达了
            //1.取当前值
            var iCur = 0;
            if (attr == 'opacity') {
                iCur = parseFloat(getStyle(obj, attr)) * 100; //parsefloat认识小数；
            } else {
                iCur = parseInt(getStyle(obj, attr)); //iCur为取得的属性值//parseint取整，见小数点会停
            }
            //2.算速度
            var iSpeed = (json[attr] - iCur) / 2;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            //3.运行
            if (iCur != json[attr]) {
                bStop = false;
            }

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity =' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            } else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }
        //4.检测停止（所有的都到目标值）
        if (bStop) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 30)
}