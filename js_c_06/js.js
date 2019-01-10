var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var x = 0;
var timer;

function drawSin() {
    y = 100 + 50*Math.sin(x);
    x+=0.1;
    ctx.fillRect(5*x, y, 2, 2);
    timer = setTimeout(drawSin, 100);
}

drawSin();
