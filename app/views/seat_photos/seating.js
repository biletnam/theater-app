var canvas = document.getElementById("seating");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#ff0000";
ctx.fillRect(0,0,150,75);


var canvas = document.getElementById("seating");
if (canvas.getContext){
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = "#5e80ae";
  ctx.fillRect(0,0,500,500); // 
  ctx.strokeRect(10,10,480,100); // stage
  ctx.strokeRect(10,120,230,200); // left section
  ctx.strokeRect(260,120,230,200); // right section
  
  var moveX = 34;
  var x = 27;
  var y = 150;
  var radius = 7;
  var startAngle = 0;
  var endAngle = Math.PI*2;

  ctx.moveTo(moveX,y)
  ctx.arc(x, y, radius, startAngle, endAngle);

  for(var i = 0; i < 8; i++) {
  
    moveX += 24;
    x += 24;

    ctx.moveTo(moveX, y)
    ctx.arc(x, y, radius, startAngle, endAngle);
  }

  var moveX = 284;
  var x = 277;

  ctx.moveTo(moveX,y)
  ctx.arc(x, y, radius, startAngle, endAngle);

  for(var i = 0; i < 8; i++) {
  
    moveX += 24;
    x += 24;
   
    ctx.moveTo(moveX, y)
    ctx.arc(x, y, radius, startAngle, endAngle);
  }

  ctx.stroke();

}


