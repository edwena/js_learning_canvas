var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

ctx.beginPath();

ctx.strokeStyle = "green";
ctx.lineWidth = "5";
ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.lineCap = "square"; 
ctx.stroke();


ctx.beginPath();

ctx.strokeStyle = "pink";
ctx.lineWidth = "20";
ctx.moveTo(200, 50);
ctx.lineTo(300, 50);
ctx.lineCap = "round"; 
//ctx.lineCap = "butt"; 
ctx.stroke();

ctx.clearRect(0,0,400,200);

ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(200, 100);
//ctx.lineTo(50, 150);
ctx.fillStyle = "green";
ctx.closePath(); //замыкает путь
ctx.stroke();

ctx.fill();
