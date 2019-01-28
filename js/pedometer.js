function Point(x, y) {
    this.x = x;
    this.y = y;
}

var count = 0;

var oldP = new Point(-1, -1);//一時保存座標
$(document).ready(function () {

//0.1秒ごとにブラウザの移動距離を算出し、一定数以上であればカウント
    setInterval(function () {
        var x = window.screenX || window.screenLeft;
        var y = window.screenY || window.screenTop;
        var nowP = new Point(x, y);

        if (oldP.x != -1 || oldP.y != -1) {
            var dis = getDistance(oldP, nowP);
            // $("#d").empty();
            // $("#d").append(dis);
            if (dis > 200) {
                count++;
                $("#count").empty();
                $("#count").append(count);
                $('#sound-file').get(0).currentTime = 0;
                $('#sound-file').get(0).play();
            }
        }
        oldP = nowP;

    }, 100);

    //リセット処理
    $('#reset').on("click", function () {
        oldP = new Point(-1, -1);
        count = 0;
        $("#count").empty();
        $("#count").append(count);
    });
});

/**
 * 2点間の距離を算出する
 * @param {type} p1
 * @param {type} p2
 * @returns {Number}
 */
function getDistance(p1, p2) {
    var xd = p1.x - p2.x;
    var yd = p1.y - p2.y;
    var result = Math.sqrt(Math.pow(xd, 2) + Math.pow(yd, 2));

    return result;
}