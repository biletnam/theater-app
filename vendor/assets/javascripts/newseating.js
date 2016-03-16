$(function() {

  window.callSeating = function(){

    console.log("seating function started");
    console.log(window.seatData);

    var seatColor = "#5e80ae";
    var seatHoverColor = "DeepSkyBlue";
    var seatFillColor = "#5e80ae";
    var radius = 5;
    // console.log(sections[0].rows.count);

    var canvas = document.getElementById("seating");
    var stage = new createjs.Stage(canvas);
    stage.enableMouseOver();

    var sections = window.seatData;

    for(var i = 0; i < sections.length; i++){
      var section = sections[i];
      var sectionContainer = new createjs.Container();
      sectionContainer.x = section.x_offset;
      sectionContainer.y = section.y_offset;
      stage.addChild(sectionContainer); 
      var rows = section.rows;

      for(var j = 0; j < rows.length;j++ ){
        var row = rows[j];
        var seats = row.seats;
        
        for(var k = 0; k < seats.length; k++){
          var seat = seats[k];
          var chair = new createjs.Shape();
          var xCircle = seat.x_offset;
          var yCircle = seat.y_offset;     
          chair.graphics.beginFill(seatColor).drawCircle(xCircle,yCircle,radius);

          (function(c, x, y, r){
            c.on('mouseover', function(event) {
              c.graphics.beginFill(seatHoverColor).drawCircle(x, y, r);
              stage.update(event);
            });

            c.on('mouseout', function(event) {
              c.graphics.beginFill(seatFillColor).drawCircle(x, y, r);
              stage.update(event);
            });
            
            // c.on('mouseover', function(event) {
            //             stage.canvas.title = 'put your tooltip text here';
            //           });

            // c.on('mouseout', function(event) {
            //   stage.canvas.title = 'put your tooltip text here';
            // });

            var seatNumber = seat.id;
            c.on('click', function(event) { 
              window.open("/seats/" + seatNumber + "/seat_photos/");
            });
          })(chair, xCircle, yCircle, radius)
          sectionContainer.addChild(chair);
        }   
      }
    }

    var vstage = new createjs.Shape();
      vstage.graphics.beginStroke("#000");
      vstage.graphics.setStrokeStyle(2, "square");
      vstage.graphics.drawRoundRect(5,10,315,70, 10);
      stage.addChild(vstage);
      stage.update();

    var stageText = new createjs.Text("Stage", "20px Helvetica", "#bbb");
      stageText.x = 140;
      stageText.y = 50;
      stageText.textBaseline = "alphabetic";
      stage.addChild(stageText);

    stage.update();
  };
});