var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(100, 50, 150, 75);
ctx.fillStyle = 'blue';
ctx.fillRect(150, 100, 100, 50);

ctx.clearRect(0, 0, 400, 200);

ctx.rect(50, 10, 100, 100);
ctx.strokeStyle = "orange";
ctx.lineWidth = "10";
ctx.stroke();

ctx.fill();