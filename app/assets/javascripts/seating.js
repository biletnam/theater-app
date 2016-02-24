$(function() {
  
  var canvas = document.getElementById("seating-chart");
  var ctx = canvas.getContext('2d');

  ctx.rect(0,0,500,500); // 
  ctx.rect(10,10,480,100); // stage
  ctx.rect(10,120,230,200); // left section
  ctx.rect(260,120,230,200); // right section
  ctx.stroke();

  var moveX = 34;
  var x = 27;
  var y = 150;
  var radius = 7;
  var startAngle = 0;
  var endAngle = Math.PI*2;

  ctx.fillStyle = "#5e80ae";
  ctx.beginPath();
  ctx.moveTo(moveX,y)
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.fill();

  for(var i = 0; i < 8; i++) {

    moveX += 24;
    x += 24;

    ctx.moveTo(moveX, y)
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
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
    ctx.fill();
  }

  ctx.stroke();


});



