var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var myColor = "black";

document.getElementById('color').oninput = function() {
    myColor = this.value;
    
    ctx.beginPath();

}

document.getElementById('clearAll').onclick = function() {
    ctx.clearRect(0,0,400,200);
    ctx.beginPath();
}

canvas.onmousedown = function(event) {
    
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.strokeStyle = myColor;
    ctx.lineCap = "round";
    ctx.lineWidth = 5;
    ctx.moveTo (x,y);
    
    canvas.onmousemove = function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        
        ctx.lineTo (x,y);
        ctx.stroke();
        
//        ctx.fillRect(x-5, y-5, 10, 10);
//        ctx.fillStyle = myColor;
//        ctx.fill();
    }
    canvas.onmouseup = function() {
        canvas.onmousemove = null;
    }
}