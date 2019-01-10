var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var myColor = "black";

var R = document.getElementById('R').value;
var r = document.getElementById('r').value;
var d = document.getElementById('d').value;
var teta = 0;
var timer;

function spiro() {
    var x = (R-r)*Math.cos(teta) + d* Math.cos((R-r) * teta/r);
    var y = (R-r)*Math.sin(teta) - d* Math.sin((R-r) * teta/r);
    teta+=0.01;
    console.log(teta);
    ctx.fillStyle = myColor;
    ctx.fillRect(300+x, 300+y, 2, 2);
    timer = setTimeout(spiro, 1);
}

document.getElementById('clear').onclick = function() {
    ctx.clearRect(0, 0, 600, 600);
    timer = 0;
    teta = 0;
}

document.getElementById('color').oninput = function() {
    ctx.closePath();
    myColor = this.value;
}

document.getElementById('redraw').onclick = function() {
    ctx.beginPath();
    R = document.getElementById('R').value;
    r = document.getElementById('r').value;
    d = document.getElementById('d').value;
    spiro();
}
