var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

var pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "yellow";
ctx.fillStyle = "blue";
ctx.arc(150, 100, 75, 0, 2*pi, false);
//ctx.arc(x, y, радиус, начало угла, конец угла, против часовой стрелки);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "orange";
ctx.fillStyle = "green";
ctx.arc(250, 100, 75, 0, 2*pi, false);
ctx.stroke();
ctx.fill();

ctx.clearRect(0,0,400,200);

canvas.onmousemove = function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.clearRect(0,0,400,200);
    ctx.beginPath();
    var radius = Math.pow(Math.pow(x-200, 2) + Math.pow(y-100, 2), 0.5);
    ctx.arc(200, 100, radius, 0, 2*pi, false);
    ctx.stroke();
    ctx.fill();
}