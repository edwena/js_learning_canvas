var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

var pi = Math.PI;
var R = 200;

function circle() {
    for (var angle = 0; angle < 2*pi; angle+=0.01) {
        var x = R*Math.cos(angle);
        var y = R*Math.sin(angle);
        angle+=0.01;
        console.log(angle);
//        ctx.fillRect(300+x, 300-y, 2, 2);
        ctx.fillRect(x_d_to_s(x, canvas.width, 0, R), y_d_to_s(y, canvas.height, 0, R), 2, 2);
    }
}

function x_d_to_s(x_d, w_s, x_d_from, x_d_to) {
    return (x_d - x_d_from)* w_s / (x_d_to - x_d_from);
}

function y_d_to_s(y_d, h_s, y_d_from, y_d_to) {
    return h_s * (y_d_to - y_d) / (y_d_to - y_d_from);
}

circle();