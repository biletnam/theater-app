$(function() {
  
var canvas = document.getElementById("seating")
var stage = new createjs.Stage(canvas);

var vstage = new createjs.Shape();
  vstage.graphics.beginStroke("#000");
  vstage.graphics.setStrokeStyle(1, "square");
  vstage.graphics.drawRoundRect(10,10,409,80, 10);
  stage.addChild(vstage);
  stage.update();

var stageText = new createjs.Text("Stage", "20px Helvetica", "#848484");
 stageText.x = 184;
 stageText.y = 55;
 stageText.textBaseline = "alphabetic";
 stage.addChild(stageText);

var seat = new createjs.Shape();
  
  seat.graphics.beginFill("#5e80ae").drawCircle(27,130,7);

  stage.enableMouseOver();

  seat.on('mouseover', function(event) { 
    seat.graphics.beginFill("DeepSkyBlue").drawCircle(27, 130, 7);
    stage.update(event);
  });

  seat.on('mouseout', function(event) { 
    seat.graphics.beginFill("#5e80ae").drawCircle(27, 130, 7);
    stage.update(event);
  });

  seat.on('click', function(event) { 
    window.open("http://localhost:3000/seats/1/seat_photos/");
    // alert("seat clicked");
  });

  stage.addChild(seat);
  stage.update();

var seat2 = new createjs.Shape();
  
  seat2.graphics.beginFill("#5e80ae").drawCircle(46,130,7);

  stage.enableMouseOver();

  seat2.on('mouseover', function(event) { 
    seat2.graphics.beginFill("DeepSkyBlue").drawCircle(46, 130, 7);
    stage.update(event);
  });

  seat2.on('mouseout', function(event) { 
    seat2.graphics.beginFill("#5e80ae").drawCircle(46, 130, 7);
    stage.update(event);
  });

  seat2.on('click', function(event) { 
    window.open("http://localhost:3000/seats/2/seat_photos/");
    // alert("seat2 clicked");
  });

  stage.addChild(seat2);
  stage.update();

var seat3 = new createjs.Shape();
  
  seat3.graphics.beginFill("#5e80ae").drawCircle(65,130,7);

  stage.enableMouseOver();

  seat3.on('mouseover', function(event) { 
    seat3.graphics.beginFill("DeepSkyBlue").drawCircle(65, 130, 7);
    stage.update(event);
  });

  seat3.on('mouseout', function(event) { 
    seat3.graphics.beginFill("#5e80ae").drawCircle(65, 130, 7);
    stage.update(event);
  });

  seat3.on('click', function(event) { 
    window.open("http://localhost:3000/seats/3/seat_photos/");
    // alert("seat3 clicked");
  });

  stage.addChild(seat3);
  stage.update();

var seat4 = new createjs.Shape();

  seat4.graphics.beginFill("#5e80ae").drawCircle(84,130,7);

  stage.enableMouseOver();

  seat4.on('mouseover', function(event) { 
    seat4.graphics.beginFill("DeepSkyBlue").drawCircle(84, 130, 7);
    stage.update(event);
  });

  seat4.on('mouseout', function(event) { 
    seat4.graphics.beginFill("#5e80ae").drawCircle(84, 130, 7);
    stage.update(event);
  });

  seat4.on('click', function(event) { 
    window.open("http://localhost:3000/seats/4/seat_photos/");
    // alert("seat4 clicked");
  });

  stage.addChild(seat4);
  stage.update();

var seat5 = new createjs.Shape();

  seat5.graphics.beginFill("#5e80ae").drawCircle(103,130,7);

  stage.enableMouseOver();

  seat5.on('mouseover', function(event) { 
    seat5.graphics.beginFill("DeepSkyBlue").drawCircle(103, 130, 7);
    stage.update(event);
  });

  seat5.on('mouseout', function(event) { 
    seat5.graphics.beginFill("#5e80ae").drawCircle(103, 130, 7);
    stage.update(event);
  });

  seat5.on('click', function(event) { 
    window.open("http://localhost:3000/seats/5/seat_photos/");
    // alert("seat5 clicked");
  });

  stage.addChild(seat5);
  stage.update();

var seat6 = new createjs.Shape();

  seat6.graphics.beginFill("#5e80ae").drawCircle(121,130,7);

  stage.enableMouseOver();

  seat6.on('mouseover', function(event) { 
    seat6.graphics.beginFill("DeepSkyBlue").drawCircle(122, 130, 7);
    stage.update(event);
  });

  seat6.on('mouseout', function(event) { 
    seat6.graphics.beginFill("#5e80ae").drawCircle(122, 130, 7);
    stage.update(event);
  });

  seat6.on('click', function(event) { 
    window.open("http://localhost:3000/seats/6/seat_photos/");
    // alert("seat6 clicked");
  });

  stage.addChild(seat6);
  stage.update();

var seat7 = new createjs.Shape();

  seat7.graphics.beginFill("#5e80ae").drawCircle(141,130,7);

  stage.enableMouseOver();

  seat7.on('mouseover', function(event) { 
    seat7.graphics.beginFill("DeepSkyBlue").drawCircle(141, 130, 7);
    stage.update(event);
  });

  seat7.on('mouseout', function(event) { 
    seat7.graphics.beginFill("#5e80ae").drawCircle(141, 130, 7);
    stage.update(event);
  });

  seat7.on('click', function(event) { 
    window.open("http://localhost:3000/seats/7/seat_photos/");
    // alert("seat7 clicked");
  });

  stage.addChild(seat7);
  stage.update();

var seat8 = new createjs.Shape();

  seat8.graphics.beginFill("#5e80ae").drawCircle(160,130,7);

  stage.enableMouseOver();

  seat8.on('mouseover', function(event) { 
    seat8.graphics.beginFill("DeepSkyBlue").drawCircle(160, 130, 7);
    stage.update(event);
  });

  seat8.on('mouseout', function(event) { 
    seat8.graphics.beginFill("#5e80ae").drawCircle(160, 130, 7);
    stage.update(event);
  });

  seat8.on('click', function(event) { 
    window.open("http://localhost:3000/seats/8/seat_photos/");
    // alert("seat8 clicked");
  });

  stage.addChild(seat8);
  stage.update();

var seat9 = new createjs.Shape();

  seat9.graphics.beginFill("#5e80ae").drawCircle(179,130,7);

  stage.enableMouseOver();

  seat9.on('mouseover', function(event) { 
    seat9.graphics.beginFill("DeepSkyBlue").drawCircle(179, 130, 7);
    stage.update(event);
  });

  seat9.on('mouseout', function(event) { 
    seat9.graphics.beginFill("#5e80ae").drawCircle(179, 130, 7);
    stage.update(event);
  });

  seat9.on('click', function(event) { 
    window.open("http://localhost:3000/seats/9/seat_photos/");
    // alert("seat9 clicked");
  });

  stage.addChild(seat9);
  stage.update();

var seatright1 = new createjs.Shape();

  seatright1.graphics.beginFill("#5e80ae").drawCircle(240,130,7);

  stage.enableMouseOver();

  seatright1.on('mouseover', function(event) { 
    seatright1.graphics.beginFill("DeepSkyBlue").drawCircle(240, 130, 7);
    stage.update(event);
  });

  seatright1.on('mouseout', function(event) { 
    seatright1.graphics.beginFill("#5e80ae").drawCircle(240, 130, 7);
    stage.update(event);
  });

  seatright1.on('click', function(event) { 
    window.open("http://localhost:3000/seats/1/seat_photos/");
    // alert("seatright1 clicked");
  });

  stage.addChild(seatright1);
  stage.update();

var seatright2 = new createjs.Shape();

  seatright2.graphics.beginFill("#5e80ae").drawCircle(259,130,7);

  stage.enableMouseOver();

  seatright2.on('mouseover', function(event) { 
    seatright2.graphics.beginFill("DeepSkyBlue").drawCircle(259, 130, 7);
    stage.update(event);
  });

  seatright2.on('mouseout', function(event) { 
    seatright2.graphics.beginFill("#5e80ae").drawCircle(259, 130, 7);
    stage.update(event);
  });

  seatright2.on('click', function(event) { 
    window.open("http://localhost:3000/seats/2/seat_photos/");
    // alert("seatright2 clicked");
  });

  stage.addChild(seatright2);
  stage.update();

var seatright3 = new createjs.Shape();

  seatright3.graphics.beginFill("#5e80ae").drawCircle(278,130,7);

  stage.enableMouseOver();

  seatright3.on('mouseover', function(event) { 
    seatright3.graphics.beginFill("DeepSkyBlue").drawCircle(278, 130, 7);
    stage.update(event);
  });

  seatright3.on('mouseout', function(event) { 
    seatright3.graphics.beginFill("#5e80ae").drawCircle(278, 130, 7);
    stage.update(event);
  });

  seatright3.on('click', function(event) { 
    window.open("http://localhost:3000/seats/3/seat_photos/");
    // alert("seatright3 clicked");
  });

  stage.addChild(seatright3);
  stage.update();

var seatright4 = new createjs.Shape();

  seatright4.graphics.beginFill("#5e80ae").drawCircle(297,130,7);

  stage.enableMouseOver();

  seatright4.on('mouseover', function(event) { 
    seatright4.graphics.beginFill("DeepSkyBlue").drawCircle(297, 130, 7);
    stage.update(event);
  });

  seatright4.on('mouseout', function(event) { 
    seatright4.graphics.beginFill("#5e80ae").drawCircle(297, 130, 7);
    stage.update(event);
  });

  seatright4.on('click', function(event) { 
    window.open("http://localhost:3000/seats/4/seat_photos/");
    // alert("seatright4 clicked");
  });

  stage.addChild(seatright4);
  stage.update();

var seatright5 = new createjs.Shape();

  seatright5.graphics.beginFill("#5e80ae").drawCircle(316,130,7);

  stage.enableMouseOver();

  seatright5.on('mouseover', function(event) { 
    seatright5.graphics.beginFill("DeepSkyBlue").drawCircle(316, 130, 7);
    stage.update(event);
  });

  seatright5.on('mouseout', function(event) { 
    seatright5.graphics.beginFill("#5e80ae").drawCircle(316, 130, 7);
    stage.update(event);
  });

  seatright5.on('click', function(event) { 
    window.open("http://localhost:3000/seats/5/seat_photos/");
    // alert("seatright5 clicked");
  });

  stage.addChild(seatright5);
  stage.update();

var seatright6 = new createjs.Shape();

  seatright6.graphics.beginFill("#5e80ae").drawCircle(335,130,7);

  stage.enableMouseOver();

  seatright6.on('mouseover', function(event) { 
    seatright6.graphics.beginFill("DeepSkyBlue").drawCircle(335, 130, 7);
    stage.update(event);
  });

  seatright6.on('mouseout', function(event) { 
    seatright6.graphics.beginFill("#5e80ae").drawCircle(335, 130, 7);
    stage.update(event);
  });

  seatright6.on('click', function(event) { 
    window.open("http://localhost:3000/seats/6/seat_photos/");
    // alert("seatright6 clicked");
  });

  stage.addChild(seatright6);
  stage.update();

var seatright7 = new createjs.Shape();

  seatright7.graphics.beginFill("#5e80ae").drawCircle(354,130,7);

  stage.enableMouseOver();

  seatright7.on('mouseover', function(event) { 
    seatright7.graphics.beginFill("DeepSkyBlue").drawCircle(354, 130, 7);
    stage.update(event);
  });

  seatright7.on('mouseout', function(event) { 
    seatright7.graphics.beginFill("#5e80ae").drawCircle(354, 130, 7);
    stage.update(event);
  });

  seatright7.on('click', function(event) { 
    window.open("http://localhost:3000/seats/7/seat_photos/");
    // alert("seatright7 clicked");
  });

  stage.addChild(seatright7);
  stage.update();

var seatright8 = new createjs.Shape();

  seatright8.graphics.beginFill("#5e80ae").drawCircle(373,130,7);

  stage.enableMouseOver();

  seatright8.on('mouseover', function(event) { 
    seatright8.graphics.beginFill("DeepSkyBlue").drawCircle(373, 130, 7);
    stage.update(event);
  });

  seatright8.on('mouseout', function(event) { 
    seatright8.graphics.beginFill("#5e80ae").drawCircle(373, 130, 7);
    stage.update(event);
  });

  seatright8.on('click', function(event) { 
    window.open("http://localhost:3000/seats/8/seat_photos/");
    // alert("seatright8 clicked");
  });

  stage.addChild(seatright8);
  stage.update();

var seatright9 = new createjs.Shape();

  seatright9.graphics.beginFill("#5e80ae").drawCircle(392,130,7);

  stage.enableMouseOver();

  seatright9.on('mouseover', function(event) { 
    seatright9.graphics.beginFill("DeepSkyBlue").drawCircle(392, 130, 7);
    stage.update(event);
  });

  seatright9.on('mouseout', function(event) { 
    seatright9.graphics.beginFill("#5e80ae").drawCircle(392, 130, 7);
    stage.update(event);
  });

  seatright9.on('click', function(event) { 
    window.open("http://localhost:3000/seats/9/seat_photos/");
    // alert("seatright9 clicked");
  });

  stage.addChild(seatright9);
  stage.update();

var seatright10 = new createjs.Shape();

  seatright10.graphics.beginFill("#5e80ae").drawCircle(240,149,7);

  stage.enableMouseOver();

  seatright10.on('mouseover', function(event) { 
    seatright10.graphics.beginFill("DeepSkyBlue").drawCircle(240, 149, 7);
    stage.update(event);
  });

  seatright10.on('mouseout', function(event) { 
    seatright10.graphics.beginFill("#5e80ae").drawCircle(240, 149, 7);
    stage.update(event);
  });

  seatright10.on('click', function(event) { 
    window.open("http://localhost:3000/seats/10/seat_photos/");
    // alert("seatright10 clicked");
  });

  stage.addChild(seatright10);
  stage.update();

var seatright11 = new createjs.Shape();

  seatright11.graphics.beginFill("#5e80ae").drawCircle(259,149,7);

  stage.enableMouseOver();

  seatright11.on('mouseover', function(event) { 
    seatright11.graphics.beginFill("DeepSkyBlue").drawCircle(259, 149, 7);
    stage.update(event);
  });

  seatright11.on('mouseout', function(event) { 
    seatright11.graphics.beginFill("#5e80ae").drawCircle(259, 149, 7);
    stage.update(event);
  });

  seatright11.on('click', function(event) { 
    window.open("http://localhost:3000/seats/11/seat_photos/");
    // alert("seatright11 clicked");
  });

  stage.addChild(seatright11);
  stage.update();

var righttable1 = new createjs.Shape();
  righttable1.graphics.beginFill("#bbb").drawRect(271,142,14,14);
  stage.addChild(righttable1);

var seatright12 = new createjs.Shape();

  seatright12.graphics.beginFill("#5e80ae").drawCircle(297,149,7);

  stage.enableMouseOver();

  seatright12.on('mouseover', function(event) { 
    seatright12.graphics.beginFill("DeepSkyBlue").drawCircle(297, 149, 7);
    stage.update(event);
  });

  seatright12.on('mouseout', function(event) { 
    seatright12.graphics.beginFill("#5e80ae").drawCircle(297, 149, 7);
    stage.update(event);
  });

  seatright12.on('click', function(event) { 
    window.open("http://localhost:3000/seats/12/seat_photos/");
    // alert("seatright12 clicked");
  });

  stage.addChild(seatright12);
  stage.update();

var seatright13 = new createjs.Shape();

  seatright13.graphics.beginFill("#5e80ae").drawCircle(316,149,7);

  stage.enableMouseOver();

  seatright13.on('mouseover', function(event) { 
    seatright13.graphics.beginFill("DeepSkyBlue").drawCircle(316, 149, 7);
    stage.update(event);
  });

  seatright13.on('mouseout', function(event) { 
    seatright13.graphics.beginFill("#5e80ae").drawCircle(316, 149, 7);
    stage.update(event);
  });

  seatright13.on('click', function(event) { 
    window.open("http://localhost:3000/seats/13/seat_photos/");
    // alert("seatright13 clicked");
  });

  stage.addChild(seatright13);
  stage.update();

var seatright14 = new createjs.Shape();

  seatright14.graphics.beginFill("#5e80ae").drawCircle(335,149,7);

  stage.enableMouseOver();

  seatright14.on('mouseover', function(event) { 
    seatright14.graphics.beginFill("DeepSkyBlue").drawCircle(335, 149, 7);
    stage.update(event);
  });

  seatright14.on('mouseout', function(event) { 
    seatright14.graphics.beginFill("#5e80ae").drawCircle(335, 149, 7);
    stage.update(event);
  });

  seatright14.on('click', function(event) { 
    window.open("http://localhost:3000/seats/14/seat_photos/");
    // alert("seatright14 clicked");
  });

  stage.addChild(seatright14);
  stage.update();

var seatright15 = new createjs.Shape();

  seatright15.graphics.beginFill("#5e80ae").drawCircle(354,149,7);

  stage.enableMouseOver();

  seatright15.on('mouseover', function(event) { 
    seatright15.graphics.beginFill("DeepSkyBlue").drawCircle(354, 149, 7);
    stage.update(event);
  });

  seatright15.on('mouseout', function(event) { 
    seatright15.graphics.beginFill("#5e80ae").drawCircle(354, 149, 7);
    stage.update(event);
  });

  seatright15.on('click', function(event) { 
    window.open("http://localhost:3000/seats/15/seat_photos/");
    // alert("seatright15 clicked");
  });

  stage.addChild(seatright15);
  stage.update();

var seatright16 = new createjs.Shape();

  seatright16.graphics.beginFill("#5e80ae").drawCircle(373,149,7);

  stage.enableMouseOver();

  seatright16.on('mouseover', function(event) { 
    seatright16.graphics.beginFill("DeepSkyBlue").drawCircle(373, 149, 7);
    stage.update(event);
  });

  seatright16.on('mouseout', function(event) { 
    seatright16.graphics.beginFill("#5e80ae").drawCircle(373, 149, 7);
    stage.update(event);
  });

  seatright16.on('click', function(event) { 
    window.open("http://localhost:3000/seats/16/seat_photos/");
    // alert("seatright16 clicked");
  });

  stage.addChild(seatright16);
  stage.update();

var seatright17 = new createjs.Shape();

  seatright17.graphics.beginFill("#5e80ae").drawCircle(240,168,7);

  stage.enableMouseOver();

  seatright17.on('mouseover', function(event) { 
    seatright17.graphics.beginFill("DeepSkyBlue").drawCircle(240, 168, 7);
    stage.update(event);
  });

  seatright17.on('mouseout', function(event) { 
    seatright17.graphics.beginFill("#5e80ae").drawCircle(240, 168, 7);
    stage.update(event);
  });

  seatright17.on('click', function(event) { 
    window.open("http://localhost:3000/seats/17/seat_photos/");
    // alert("seatright17 clicked");
  });

  stage.addChild(seatright17);
  stage.update();

var seatright18 = new createjs.Shape();

  seatright18.graphics.beginFill("#5e80ae").drawCircle(259,168,7);

  stage.enableMouseOver();

  seatright18.on('mouseover', function(event) { 
    seatright18.graphics.beginFill("DeepSkyBlue").drawCircle(259, 168, 7);
    stage.update(event);
  });

  seatright18.on('mouseout', function(event) { 
    seatright18.graphics.beginFill("#5e80ae").drawCircle(259, 168, 7);
    stage.update(event);
  });

  seatright18.on('click', function(event) { 
    window.open("http://localhost:3000/seats/18/seat_photos/");
    // alert("seatright18 clicked");
  });

  stage.addChild(seatright18);
  stage.update();

var seatright19 = new createjs.Shape();

  seatright19.graphics.beginFill("#5e80ae").drawCircle(278,168,7);

  stage.enableMouseOver();

  seatright19.on('mouseover', function(event) { 
    seatright19.graphics.beginFill("DeepSkyBlue").drawCircle(278, 168, 7);
    stage.update(event);
  });

  seatright19.on('mouseout', function(event) { 
    seatright19.graphics.beginFill("#5e80ae").drawCircle(278, 168, 7);
    stage.update(event);
  });

  seatright19.on('click', function(event) { 
    window.open("http://localhost:3000/seats/19/seat_photos/");
    // alert("seatright19 clicked");
  });

  stage.addChild(seatright19);
  stage.update();

var table2 = new createjs.Shape();
  table2.graphics.beginFill("#bbb").drawRect(290,161,14,14);
  stage.addChild(table2);
  stage.update();

var seatright20 = new createjs.Shape();

  seatright20.graphics.beginFill("#5e80ae").drawCircle(316,168,7);

  stage.enableMouseOver();

  seatright20.on('mouseover', function(event) { 
    seatright20.graphics.beginFill("DeepSkyBlue").drawCircle(316, 168, 7);
    stage.update(event);
  });

  seatright20.on('mouseout', function(event) { 
    seatright20.graphics.beginFill("#5e80ae").drawCircle(316, 168, 7);
    stage.update(event);
  });

  seatright20.on('click', function(event) { 
    window.open("http://localhost:3000/seats/20/seat_photos/");
    // alert("seatright20 clicked");
  });

  stage.addChild(seatright20);
  stage.update();

var seatright21 = new createjs.Shape();

  seatright21.graphics.beginFill("#5e80ae").drawCircle(335,168,7);

  stage.enableMouseOver();

  seatright21.on('mouseover', function(event) { 
    seatright21.graphics.beginFill("DeepSkyBlue").drawCircle(335, 168, 7);
    stage.update(event);
  });

  seatright21.on('mouseout', function(event) { 
    seatright21.graphics.beginFill("#5e80ae").drawCircle(335, 168, 7);
    stage.update(event);
  });

  seatright21.on('click', function(event) { 
    window.open("http://localhost:3000/seats/21/seat_photos/");
    // alert("seatright21 clicked");
  });

  stage.addChild(seatright21);
  stage.update();

var seatright22 = new createjs.Shape();

  seatright22.graphics.beginFill("#5e80ae").drawCircle(354,168,7);

  stage.enableMouseOver();

  seatright22.on('mouseover', function(event) { 
    seatright22.graphics.beginFill("DeepSkyBlue").drawCircle(354, 168, 7);
    stage.update(event);
  });

  seatright22.on('mouseout', function(event) { 
    seatright22.graphics.beginFill("#5e80ae").drawCircle(354, 168, 7);
    stage.update(event);
  });

  seatright22.on('click', function(event) { 
    window.open("http://localhost:3000/seats/22/seat_photos/");
    // alert("seatright22 clicked");
  });

  stage.addChild(seatright22);
  stage.update();

var seatright23 = new createjs.Shape();

  seatright23.graphics.beginFill("#5e80ae").drawCircle(373,168,7);

  stage.enableMouseOver();

  seatright23.on('mouseover', function(event) { 
    seatright23.graphics.beginFill("DeepSkyBlue").drawCircle(373, 168, 7);
    stage.update(event);
  });

  seatright23.on('mouseout', function(event) { 
    seatright23.graphics.beginFill("#5e80ae").drawCircle(373, 168, 7);
    stage.update(event);
  });

  seatright23.on('click', function(event) { 
    window.open("http://localhost:3000/seats/22/seat_photos/");
    // alert("seatright23 clicked");
  });

  stage.addChild(seatright23);
  stage.update();

var seatright24 = new createjs.Shape();

  seatright24.graphics.beginFill("#5e80ae").drawCircle(240,187,7);

  stage.enableMouseOver();

  seatright24.on('mouseover', function(event) { 
    seatright24.graphics.beginFill("DeepSkyBlue").drawCircle(240, 187, 7);
    stage.update(event);
  });

  seatright24.on('mouseout', function(event) { 
    seatright24.graphics.beginFill("#5e80ae").drawCircle(240, 187, 7);
    stage.update(event);
  });

  seatright24.on('click', function(event) { 
    window.open("http://localhost:3000/seats/24/seat_photos/");
    // alert("seatright24 clicked");
  });

  stage.addChild(seatright24);
  stage.update();

var seatright25 = new createjs.Shape();

  seatright25.graphics.beginFill("#5e80ae").drawCircle(259,187,7);

  stage.enableMouseOver();

  seatright25.on('mouseover', function(event) { 
    seatright25.graphics.beginFill("DeepSkyBlue").drawCircle(259, 187, 7);
    stage.update(event);
  });

  seatright25.on('mouseout', function(event) { 
    seatright25.graphics.beginFill("#5e80ae").drawCircle(259, 187, 7);
    stage.update(event);
  });

  seatright25.on('click', function(event) { 
    window.open("http://localhost:3000/seats/25/seat_photos/");
    // alert("seatright25 clicked");
  });

  stage.addChild(seatright25);
  stage.update();

var seatright26 = new createjs.Shape();

  seatright26.graphics.beginFill("#5e80ae").drawCircle(278,187,7);

  stage.enableMouseOver();

  seatright26.on('mouseover', function(event) { 
    seatright26.graphics.beginFill("DeepSkyBlue").drawCircle(278, 187, 7);
    stage.update(event);
  });

  seatright26.on('mouseout', function(event) { 
    seatright26.graphics.beginFill("#5e80ae").drawCircle(278, 187, 7);
    stage.update(event);
  });

  seatright26.on('click', function(event) { 
    window.open("http://localhost:3000/seats/26/seat_photos/");
    // alert("seatright26 clicked");
  });

  stage.addChild(seatright26);
  stage.update();

var seatright27 = new createjs.Shape();

  seatright27.graphics.beginFill("#5e80ae").drawCircle(297,187,7);

  stage.enableMouseOver();

  seatright27.on('mouseover', function(event) { 
    seatright27.graphics.beginFill("DeepSkyBlue").drawCircle(297, 187, 7);
    stage.update(event);
  });

  seatright27.on('mouseout', function(event) { 
    seatright27.graphics.beginFill("#5e80ae").drawCircle(297, 187, 7);
    stage.update(event);
  });

  seatright27.on('click', function(event) { 
    window.open("http://localhost:3000/seats/27/seat_photos/");
    // alert("seatright27 clicked");
  });

  stage.addChild(seatright27);
  stage.update();

var table3 = new createjs.Shape();
  table3.graphics.beginFill("#bbb").drawRect(309,180,14,14);
  stage.addChild(table3);
  stage.update();

var seatright28 = new createjs.Shape();

  seatright28.graphics.beginFill("#5e80ae").drawCircle(335,187,7);

  stage.enableMouseOver();

  seatright28.on('mouseover', function(event) { 
    seatright28.graphics.beginFill("DeepSkyBlue").drawCircle(335, 187, 7);
    stage.update(event);
  });

  seatright28.on('mouseout', function(event) { 
    seatright28.graphics.beginFill("#5e80ae").drawCircle(335, 187, 7);
    stage.update(event);
  });

  seatright28.on('click', function(event) { 
    window.open("http://localhost:3000/seats/28/seat_photos/");
    // alert("seatright28 clicked");
  });

  stage.addChild(seatright28);
  stage.update();

var seatright29 = new createjs.Shape();

  seatright29.graphics.beginFill("#5e80ae").drawCircle(354,187,7);

  stage.enableMouseOver();

  seatright29.on('mouseover', function(event) { 
    seatright29.graphics.beginFill("DeepSkyBlue").drawCircle(354, 187, 7);
    stage.update(event);
  });

  seatright29.on('mouseout', function(event) { 
    seatright29.graphics.beginFill("#5e80ae").drawCircle(354, 187, 7);
    stage.update(event);
  });

  seatright29.on('click', function(event) { 
    window.open("http://localhost:3000/seats/29/seat_photos/");
    // alert("seatright29 clicked");
  });

  stage.addChild(seatright29);
  stage.update();

var seatright30 = new createjs.Shape();

  seatright30.graphics.beginFill("#5e80ae").drawCircle(373,187,7);

  stage.enableMouseOver();

  seatright30.on('mouseover', function(event) { 
    seatright30.graphics.beginFill("DeepSkyBlue").drawCircle(373, 187, 7);
    stage.update(event);
  });

  seatright30.on('mouseout', function(event) { 
    seatright30.graphics.beginFill("#5e80ae").drawCircle(373, 187, 7);
    stage.update(event);
  });

  seatright30.on('click', function(event) { 
    window.open("http://localhost:3000/seats/30/seat_photos/");
    // alert("seatright30 clicked");
  });

  stage.addChild(seatright30);
  stage.update();

var seatright31 = new createjs.Shape();

  seatright31.graphics.beginFill("#5e80ae").drawCircle(392,187,7);

  stage.enableMouseOver();

  seatright31.on('mouseover', function(event) { 
    seatright31.graphics.beginFill("DeepSkyBlue").drawCircle(392, 187, 7);
    stage.update(event);
  });

  seatright31.on('mouseout', function(event) { 
    seatright31.graphics.beginFill("#5e80ae").drawCircle(392, 187, 7);
    stage.update(event);
  });

  seatright31.on('click', function(event) { 
    window.open("http://localhost:3000/seats/31/seat_photos/");
    // alert("seatright31 clicked");
  });

  stage.addChild(seatright31);
  stage.update();

var seatright32 = new createjs.Shape();

  seatright32.graphics.beginFill("#5e80ae").drawCircle(259,206,7);

  stage.enableMouseOver();

  seatright32.on('mouseover', function(event) { 
    seatright32.graphics.beginFill("DeepSkyBlue").drawCircle(259, 206, 7);
    stage.update(event);
  });

  seatright32.on('mouseout', function(event) { 
    seatright32.graphics.beginFill("#5e80ae").drawCircle(259, 206, 7);
    stage.update(event);
  });

  seatright32.on('click', function(event) { 
    window.open("http://localhost:3000/seats/32/seat_photos/");
    // alert("seatright32 clicked");
  });

  stage.addChild(seatright32);
  stage.update();

var seatright33 = new createjs.Shape();

  seatright33.graphics.beginFill("#5e80ae").drawCircle(278,206,7);

  stage.enableMouseOver();

  seatright33.on('mouseover', function(event) { 
    seatright33.graphics.beginFill("DeepSkyBlue").drawCircle(278, 206, 7);
    stage.update(event);
  });

  seatright33.on('mouseout', function(event) { 
    seatright33.graphics.beginFill("#5e80ae").drawCircle(278, 206, 7);
    stage.update(event);
  });

  seatright33.on('click', function(event) { 
    window.open("http://localhost:3000/seats/33/seat_photos/");
    // alert("seatright33 clicked");
  });

  stage.addChild(seatright33);
  stage.update();

var seatright34 = new createjs.Shape();

  seatright34.graphics.beginFill("#5e80ae").drawCircle(297,206,7);

  stage.enableMouseOver();

  seatright34.on('mouseover', function(event) { 
    seatright34.graphics.beginFill("DeepSkyBlue").drawCircle(297, 206, 7);
    stage.update(event);
  });

  seatright34.on('mouseout', function(event) { 
    seatright34.graphics.beginFill("#5e80ae").drawCircle(297, 206, 7);
    stage.update(event);
  });

  seatright34.on('click', function(event) { 
    window.open("http://localhost:3000/seats/34/seat_photos/");
    // alert("seatright34 clicked");
  });

  stage.addChild(seatright34);
  stage.update();

var seatright34 = new createjs.Shape();

  seatright34.graphics.beginFill("#5e80ae").drawCircle(297,206,7);

  stage.enableMouseOver();

  seatright34.on('mouseover', function(event) { 
    seatright34.graphics.beginFill("DeepSkyBlue").drawCircle(297, 206, 7);
    stage.update(event);
  });

  seatright34.on('mouseout', function(event) { 
    seatright34.graphics.beginFill("#5e80ae").drawCircle(297, 206, 7);
    stage.update(event);
  });

  seatright34.on('click', function(event) { 
    window.open("http://localhost:3000/seats/34/seat_photos/");
    // alert("seatright34 clicked");
  });

  stage.addChild(seatright34);
  stage.update();

var seatright35 = new createjs.Shape();

  seatright35.graphics.beginFill("#5e80ae").drawCircle(316,206,7);

  stage.enableMouseOver();

  seatright35.on('mouseover', function(event) { 
    seatright35.graphics.beginFill("DeepSkyBlue").drawCircle(316, 206, 7);
    stage.update(event);
  });

  seatright35.on('mouseout', function(event) { 
    seatright35.graphics.beginFill("#5e80ae").drawCircle(316, 206, 7);
    stage.update(event);
  });

  seatright35.on('click', function(event) { 
    window.open("http://localhost:3000/seats/35/seat_photos/");
    // alert("seatright35 clicked");
  });

  stage.addChild(seatright35);
  stage.update();

var seatright36 = new createjs.Shape();

  seatright36.graphics.beginFill("#5e80ae").drawCircle(335,206,7);

  stage.enableMouseOver();

  seatright36.on('mouseover', function(event) { 
    seatright36.graphics.beginFill("DeepSkyBlue").drawCircle(335, 206, 7);
    stage.update(event);
  });

  seatright36.on('mouseout', function(event) { 
    seatright36.graphics.beginFill("#5e80ae").drawCircle(335, 206, 7);
    stage.update(event);
  });

  seatright36.on('click', function(event) { 
    window.open("http://localhost:3000/seats/36/seat_photos/");
    // alert("seatright36 clicked");
  });

  stage.addChild(seatright36);
  stage.update();

var seatright37 = new createjs.Shape();

  seatright37.graphics.beginFill("#5e80ae").drawCircle(354,206,7);

  stage.enableMouseOver();

  seatright37.on('mouseover', function(event) { 
    seatright37.graphics.beginFill("DeepSkyBlue").drawCircle(354, 206, 7);
    stage.update(event);
  });

  seatright37.on('mouseout', function(event) { 
    seatright37.graphics.beginFill("#5e80ae").drawCircle(354, 206, 7);
    stage.update(event);
  });

  seatright37.on('click', function(event) { 
    window.open("http://localhost:3000/seats/37/seat_photos/");
    // alert("seatright37 clicked");
  });

  stage.addChild(seatright37);
  stage.update();

var seatright38 = new createjs.Shape();

  seatright38.graphics.beginFill("#5e80ae").drawCircle(373,206,7);

  stage.enableMouseOver();

  seatright38.on('mouseover', function(event) { 
    seatright38.graphics.beginFill("DeepSkyBlue").drawCircle(373, 206, 7);
    stage.update(event);
  });

  seatright38.on('mouseout', function(event) { 
    seatright38.graphics.beginFill("#5e80ae").drawCircle(373, 206, 7);
    stage.update(event);
  });

  seatright38.on('click', function(event) { 
    window.open("http://localhost:3000/seats/38/seat_photos/");
    // alert("seatright38 clicked");
  });

  stage.addChild(seatright38);
  stage.update();






});



