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
          // var seatPhotos = seat.seat_photos;
         // if(seat.id === 1){
          // console.log(seat.seat_photos[0].image.thumb.url); } 
          chair.graphics.beginFill(seatColor).drawCircle(xCircle,yCircle,radius);
          var tip;
          var seatInfo;
          var seatText;
          var bitmap;

          (function(c, x, y, r){
            c.on('mouseover', function(event) {
              c.graphics.beginFill(seatHoverColor).drawCircle(x, y, r);
       

                seatInfo = new createjs.Shape();
                seatInfo.graphics.beginStroke("#000");
                seatInfo.graphics.setStrokeStyle(2, "square");
                seatInfo.graphics.drawRoundRect(stageWidth + 20,10,300,300,10);
                stage.addChild(seatInfo);
                stage.update();
                
                seatText = new createjs.Text("Section: " + seatSection + "\nRow: " + seatRow + "\nSeat: " + seatNumber, "16px Helvetica", "#aaa");
                seatText.x = (stageWidth + 40);
                seatText.y = 45;
                seatText.textBaseline = "alphabetic";
                stage.addChild(seatText);
                stage.update();

                bitmap = new createjs.Bitmap("https://seat-photos.s3.amazonaws.com/uploads/seat_photo/image/15/medium_DSC01226.JPG");
                bitmap.x = (stageWidth + 45);
                bitmap.y = 95;
                bitmap.scaleX = 1/2;
                bitmap.scaleY = 1/2;
                stage.addChild(bitmap);
                stage.update();

                tip = new foo9.createjs.Tooltip("abc12", 60, 30);
                tip.trackMouse;
                stage.addChild(tip);
                stage.update(tip);
                });

            c.on('mouseout', function(event) {
              c.graphics.beginFill(seatFillColor).drawCircle(x, y, r);
              stage.update(event);
              stage.removeChild(tip, seatInfo, seatText, bitmap);
              stage.update();

            });
            
            // c.on('mouseover', function(event) {
            //             stage.canvas.title = 'put your tooltip text here';
            //           });

            // c.on('mouseout', function(event) {
            //   stage.canvas.title = 'put your tooltip text here';
            // });
            // var seat;
            var seatSection = seat.seat_section;
            var seatRow = seat.seat_row;
            var seatNumber = seat.seat_number;

            var seatId = seat.id;
            c.on('click', function(event) { 
              window.open("/seats/" + seatId + "/seat_photos/");
            });
          })(chair, xCircle, yCircle, radius)
          sectionContainer.addChild(chair);
        }   
      }
    }

    var stageHeight = gon.stage_height;
    var stageWidth = gon.stage_width;
    var stageX = gon.stage_x;
    var stageY = gon.stage_y;

    var vstage = new createjs.Shape();
      vstage.graphics.beginStroke("#000");
      vstage.graphics.setStrokeStyle(2, "square");
      vstage.graphics.drawRoundRect(stageX,stageY,stageWidth,stageHeight, 10);
      stage.addChild(vstage);
      stage.update();

    var stageText = new createjs.Text("Stage", "20px Helvetica", "#bbb");
      stageText.x = (stageWidth / 2 - 20);
      stageText.y = 50;
      stageText.textBaseline = "alphabetic";
      stage.addChild(stageText);

    stage.update();
  };
});