var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

var x = 200;
var y = 100;
var stepCount = 0;
var direction;
var timer;
var myX;
var myY;

function drawDot() {
    ctx.clearRect(0, 0, 400, 200);
    if (stepCount == 0) {
        stepCount = Math.floor(15 * Math.random()); //0-14
        direction = Math.floor(8 * Math.random()); // 0-7
    }
    else {
        stepCount--;
    }
    switch (direction) {
        case 0:
            //up
            y-=1;
            break;
        case 1:
            //right
            x+=1;
            break;
        case 2:
            //down
            y+=1;
            break;
        case 3:
            //left
            x-=1;
            break;
            
        case 4: 
            //left up
            y-=1;
            x+=1;
            break;
        case 5:
            //right down
            x+=1;
            y+=1;
            break;
        case 6:
            //down left
            y+=1;
            x-=1;
            break;
        case 7:
            //left up
            x-=1;
            y-=1;
            break;
    }
    if (x<0 || x>400 || y<0 || y>200) {
        stepCount = 0;
    }
    ctx.fillRect(x-3, y-3, 6, 6);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(myX, myY);
    ctx.stroke();
    timer = setTimeout(drawDot, 100);
}
drawDot();

canvas.onmousemove = function(event) {
    myX = event.offsetX;
    myY = event.offsetY;
}
