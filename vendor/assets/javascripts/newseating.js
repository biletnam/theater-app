$(function() {

window.callSeating = function(sections, rows, seats){
  console.log("seating function started");

  var seatColor = "#5e80ae";
  var seatHoverColor = "DeepSkyBlue";
  var seatFillColor = "#5e80ae";
  var radius = 7;
  var xCircle = 12;
  var yCircle = 130;

  console.log(sections);
  // console.log(sections[0].rows.count);

  var canvas = document.getElementById("seating")
  var stage = new createjs.Stage(canvas);
  stage.enableMouseOver();

  for(var i = 0; i < sections; i++){
    console.log(sections);
    // var sectionRowCount = sections[i].number_rows;
    for(var j = 0; j < rows;j++ ){
      // console.log(sectionRowCount);
      for(var k = 0; k < seats; k++){

        var seat = new createjs.Shape();

        xCircle += 19;

        seat.graphics.beginFill(seatColor).drawCircle(xCircle,yCircle,radius);

        (function(s, x, y, r){
          s.on('mouseover', function(event) {
            s.graphics.beginFill(seatHoverColor).drawCircle(x, y, r);
            stage.update(event);
          });

          s.on('mouseout', function(event) {
            s.graphics.beginFill(seatFillColor).drawCircle(x, y, r);
            stage.update(event);
          });

          s.on('click', function(event) { 
            window.open("http://localhost:3000/seats/1/seat_photos/");
          });

        })(seat, xCircle, yCircle, radius)

        stage.addChild(seat);
      }
    xCircle = 12;
    yCircle += 19; 
    } 
  }

stage.update();

var vstage = new createjs.Shape();
  vstage.graphics.beginStroke("#000");
  vstage.graphics.setStrokeStyle(2, "square");
  vstage.graphics.drawRoundRect(10,10,399,70, 10);
  stage.addChild(vstage);
  stage.update();

var stageText = new createjs.Text("Stage", "20px Helvetica", "#bbb");
  stageText.x = 184;
  stageText.y = 50;
  stageText.textBaseline = "alphabetic";
  stage.addChild(stageText);

};

});