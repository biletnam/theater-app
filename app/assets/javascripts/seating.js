// $(function() {

// var seatColor = "#5e80ae";
// var seatHoverColor = "DeepSkyBlue";
// var seatFillColor = "#5e80ae";
// var radius = 7;
// var xCircle = 12;
// var yCircle = 130;

// // var section_count = gon.section_count;
// // var rows = gon.row_count;
// // var sections = gon.sections;
// // console.log(sections[0].number_rows);
// // // console.log(sections[0].rows.count);

// var canvas = document.getElementById("seating")
// var stage = new createjs.Stage(canvas);
// // stage.enableMouseOver();

// // for(var i = 0; i < sections.length; i++){
// //  var section_row_count = sections[i].number_rows;
// //    for(var j = 0; j < section_row_count;j++ ){
// //     var seat = new createjs.Shape();

// //     xCircle += 19;

// //     seat.graphics.beginFill(seatColor).drawCircle(xCircle,yCircle,radius);

// //     (function(s, x, y, r){
// //       s.on('mouseover', function(event) {
// //         s.graphics.beginFill(seatHoverColor).drawCircle(x, y, r);
// //         stage.update(event);
// //       });

// //       s.on('mouseout', function(event) {
// //         s.graphics.beginFill(seatFillColor).drawCircle(x, y, r);
// //         stage.update(event);
// //       });

// //       s.on('click', function(event) { 
// //         window.open("http://localhost:3000/seats/1/seat_photos/");
// //       });

// //     })(seat, xCircle, yCircle, radius)

// //     stage.addChild(seat);
    
// //    }
// //    xCircle = 12;
// //   yCircle += 19;  
// // }
// // stage.update();

// var vstage = new createjs.Shape();
//   vstage.graphics.beginStroke("#000");
//   vstage.graphics.setStrokeStyle(2, "square");
//   vstage.graphics.drawRoundRect(10,10,399,70, 10);
//   stage.addChild(vstage);
//   stage.update();

// var stageText = new createjs.Text("Stage", "20px Helvetica", "#bbb");
//  stageText.x = 184;
//  stageText.y = 50;
//  stageText.textBaseline = "alphabetic";
//  stage.addChild(stageText);

// var vhouseRight = new createjs.Shape();
//   vhouseRight.graphics.beginStroke("#000");
//   vhouseRight.graphics.setStrokeStyle(2, "square");
//   vhouseRight.graphics.drawRoundRect(223,94,186,129,10);
//   stage.addChild(vhouseRight);
//   stage.update();

// var rightfronttable1 = new createjs.Shape();
//   rightfronttable1.graphics.beginFill("#bbb").drawRect(262,104,14,14);
//   stage.addChild(rightfronttable1);

// var rightfronttable2 = new createjs.Shape();
//   rightfronttable2.graphics.beginFill("#bbb").drawRect(300,104,14,14);
//   stage.addChild(rightfronttable2);

// var rightfronttable3 = new createjs.Shape();
//   rightfronttable3.graphics.beginFill("#bbb").drawRect(357,104,14,14);
//   stage.addChild(rightfronttable3);

// var seatright1 = new createjs.Shape();

//   seatright1.graphics.beginFill("#5e80ae").drawCircle(240,130,7);

//   stage.enableMouseOver();

//   seatright1.on('mouseover', function(event) { 
//     seatright1.graphics.beginFill("DeepSkyBlue").drawCircle(240, 130, 7);
//     stage.update(event);
//   });

//   seatright1.on('mouseout', function(event) { 
//     seatright1.graphics.beginFill("#5e80ae").drawCircle(240, 130, 7);
//     stage.update(event);
//   });

//   seatright1.on('click', function(event) { 
//     window.open("/seats/1/seat_photos/");
//     // alert("seatright1 clicked");
//   });

//   stage.addChild(seatright1);
//   stage.update();

// var seatright2 = new createjs.Shape();

//   seatright2.graphics.beginFill("#5e80ae").drawCircle(259,130,7);

//   stage.enableMouseOver();

//   seatright2.on('mouseover', function(event) { 
//     seatright2.graphics.beginFill("DeepSkyBlue").drawCircle(259, 130, 7);
//     stage.update(event);
//   });

//   seatright2.on('mouseout', function(event) { 
//     seatright2.graphics.beginFill("#5e80ae").drawCircle(259, 130, 7);
//     stage.update(event);
//   });

//   seatright2.on('click', function(event) { 
//     window.open("/seats/2/seat_photos/");
//     // alert("seatright2 clicked");
//   });

//   stage.addChild(seatright2);
//   stage.update();

// var seatright3 = new createjs.Shape();

//   seatright3.graphics.beginFill("#5e80ae").drawCircle(278,130,7);

//   stage.enableMouseOver();

//   seatright3.on('mouseover', function(event) { 
//     seatright3.graphics.beginFill("DeepSkyBlue").drawCircle(278, 130, 7);
//     stage.update(event);
//   });

//   seatright3.on('mouseout', function(event) { 
//     seatright3.graphics.beginFill("#5e80ae").drawCircle(278, 130, 7);
//     stage.update(event);
//   });

//   seatright3.on('click', function(event) { 
//     window.open("/seats/3/seat_photos/");
//     // alert("seatright3 clicked");
//   });

//   stage.addChild(seatright3);
//   stage.update();

// var seatright4 = new createjs.Shape();

//   seatright4.graphics.beginFill("#5e80ae").drawCircle(297,130,7);

//   stage.enableMouseOver();

//   seatright4.on('mouseover', function(event) { 
//     seatright4.graphics.beginFill("DeepSkyBlue").drawCircle(297, 130, 7);
//     stage.update(event);
//   });

//   seatright4.on('mouseout', function(event) { 
//     seatright4.graphics.beginFill("#5e80ae").drawCircle(297, 130, 7);
//     stage.update(event);
//   });

//   seatright4.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/4/seat_photos/");
//     // alert("seatright4 clicked");
//   });

//   stage.addChild(seatright4);
//   stage.update();

// var seatright5 = new createjs.Shape();

//   seatright5.graphics.beginFill("#5e80ae").drawCircle(316,130,7);

//   stage.enableMouseOver();

//   seatright5.on('mouseover', function(event) { 
//     seatright5.graphics.beginFill("DeepSkyBlue").drawCircle(316, 130, 7);
//     stage.update(event);
//   });

//   seatright5.on('mouseout', function(event) { 
//     seatright5.graphics.beginFill("#5e80ae").drawCircle(316, 130, 7);
//     stage.update(event);
//   });

//   seatright5.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/5/seat_photos/");
//     // alert("seatright5 clicked");
//   });

//   stage.addChild(seatright5);
//   stage.update();

// var seatright6 = new createjs.Shape();

//   seatright6.graphics.beginFill("#5e80ae").drawCircle(335,130,7);

//   stage.enableMouseOver();

//   seatright6.on('mouseover', function(event) { 
//     seatright6.graphics.beginFill("DeepSkyBlue").drawCircle(335, 130, 7);
//     stage.update(event);
//   });

//   seatright6.on('mouseout', function(event) { 
//     seatright6.graphics.beginFill("#5e80ae").drawCircle(335, 130, 7);
//     stage.update(event);
//   });

//   seatright6.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/6/seat_photos/");
//     // alert("seatright6 clicked");
//   });

//   stage.addChild(seatright6);
//   stage.update();

// var seatright7 = new createjs.Shape();

//   seatright7.graphics.beginFill("#5e80ae").drawCircle(354,130,7);

//   stage.enableMouseOver();

//   seatright7.on('mouseover', function(event) { 
//     seatright7.graphics.beginFill("DeepSkyBlue").drawCircle(354, 130, 7);
//     stage.update(event);
//   });

//   seatright7.on('mouseout', function(event) { 
//     seatright7.graphics.beginFill("#5e80ae").drawCircle(354, 130, 7);
//     stage.update(event);
//   });

//   seatright7.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/7/seat_photos/");
//     // alert("seatright7 clicked");
//   });

//   stage.addChild(seatright7);
//   stage.update();

// var seatright8 = new createjs.Shape();

//   seatright8.graphics.beginFill("#5e80ae").drawCircle(373,130,7);

//   stage.enableMouseOver();

//   seatright8.on('mouseover', function(event) { 
//     seatright8.graphics.beginFill("DeepSkyBlue").drawCircle(373, 130, 7);
//     stage.update(event);
//   });

//   seatright8.on('mouseout', function(event) { 
//     seatright8.graphics.beginFill("#5e80ae").drawCircle(373, 130, 7);
//     stage.update(event);
//   });

//   seatright8.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/8/seat_photos/");
//     // alert("seatright8 clicked");
//   });

//   stage.addChild(seatright8);
//   stage.update();

// var seatright9 = new createjs.Shape();

//   seatright9.graphics.beginFill("#5e80ae").drawCircle(392,130,7);

//   stage.enableMouseOver();

//   seatright9.on('mouseover', function(event) { 
//     seatright9.graphics.beginFill("DeepSkyBlue").drawCircle(392, 130, 7);
//     stage.update(event);
//   });

//   seatright9.on('mouseout', function(event) { 
//     seatright9.graphics.beginFill("#5e80ae").drawCircle(392, 130, 7);
//     stage.update(event);
//   });

//   seatright9.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/9/seat_photos/");
//     // alert("seatright9 clicked");
//   });

//   stage.addChild(seatright9);
//   stage.update();

// var seatright10 = new createjs.Shape();

//   seatright10.graphics.beginFill("#5e80ae").drawCircle(240,149,7);

//   stage.enableMouseOver();

//   seatright10.on('mouseover', function(event) { 
//     seatright10.graphics.beginFill("DeepSkyBlue").drawCircle(240, 149, 7);
//     stage.update(event);
//   });

//   seatright10.on('mouseout', function(event) { 
//     seatright10.graphics.beginFill("#5e80ae").drawCircle(240, 149, 7);
//     stage.update(event);
//   });

//   seatright10.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/10/seat_photos/");
//     // alert("seatright10 clicked");
//   });

//   stage.addChild(seatright10);
//   stage.update();

// var seatright11 = new createjs.Shape();

//   seatright11.graphics.beginFill("#5e80ae").drawCircle(259,149,7);

//   stage.enableMouseOver();

//   seatright11.on('mouseover', function(event) { 
//     seatright11.graphics.beginFill("DeepSkyBlue").drawCircle(259, 149, 7);
//     stage.update(event);
//   });

//   seatright11.on('mouseout', function(event) { 
//     seatright11.graphics.beginFill("#5e80ae").drawCircle(259, 149, 7);
//     stage.update(event);
//   });

//   seatright11.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/11/seat_photos/");
//     // alert("seatright11 clicked");
//   });

//   stage.addChild(seatright11);
//   stage.update();

// var righttable1 = new createjs.Shape();
//   righttable1.graphics.beginFill("#bbb").drawRect(271,142,14,14);
//   stage.addChild(righttable1);

// var seatright12 = new createjs.Shape();

//   seatright12.graphics.beginFill("#5e80ae").drawCircle(297,149,7);

//   stage.enableMouseOver();

//   seatright12.on('mouseover', function(event) { 
//     seatright12.graphics.beginFill("DeepSkyBlue").drawCircle(297, 149, 7);
//     stage.update(event);
//   });

//   seatright12.on('mouseout', function(event) { 
//     seatright12.graphics.beginFill("#5e80ae").drawCircle(297, 149, 7);
//     stage.update(event);
//   });

//   seatright12.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/12/seat_photos/");
//     // alert("seatright12 clicked");
//   });

//   stage.addChild(seatright12);
//   stage.update();

// var seatright13 = new createjs.Shape();

//   seatright13.graphics.beginFill("#5e80ae").drawCircle(316,149,7);

//   stage.enableMouseOver();

//   seatright13.on('mouseover', function(event) { 
//     seatright13.graphics.beginFill("DeepSkyBlue").drawCircle(316, 149, 7);
//     stage.update(event);
//   });

//   seatright13.on('mouseout', function(event) { 
//     seatright13.graphics.beginFill("#5e80ae").drawCircle(316, 149, 7);
//     stage.update(event);
//   });

//   seatright13.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/13/seat_photos/");
//     // alert("seatright13 clicked");
//   });

//   stage.addChild(seatright13);
//   stage.update();

// var seatright14 = new createjs.Shape();

//   seatright14.graphics.beginFill("#5e80ae").drawCircle(335,149,7);

//   stage.enableMouseOver();

//   seatright14.on('mouseover', function(event) { 
//     seatright14.graphics.beginFill("DeepSkyBlue").drawCircle(335, 149, 7);
//     stage.update(event);
//   });

//   seatright14.on('mouseout', function(event) { 
//     seatright14.graphics.beginFill("#5e80ae").drawCircle(335, 149, 7);
//     stage.update(event);
//   });

//   seatright14.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/14/seat_photos/");
//     // alert("seatright14 clicked");
//   });

//   stage.addChild(seatright14);
//   stage.update();

// var seatright15 = new createjs.Shape();

//   seatright15.graphics.beginFill("#5e80ae").drawCircle(354,149,7);

//   stage.enableMouseOver();

//   seatright15.on('mouseover', function(event) { 
//     seatright15.graphics.beginFill("DeepSkyBlue").drawCircle(354, 149, 7);
//     stage.update(event);
//   });

//   seatright15.on('mouseout', function(event) { 
//     seatright15.graphics.beginFill("#5e80ae").drawCircle(354, 149, 7);
//     stage.update(event);
//   });

//   seatright15.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/15/seat_photos/");
//     // alert("seatright15 clicked");
//   });

//   stage.addChild(seatright15);
//   stage.update();

// var seatright16 = new createjs.Shape();

//   seatright16.graphics.beginFill("#5e80ae").drawCircle(373,149,7);

//   stage.enableMouseOver();

//   seatright16.on('mouseover', function(event) { 
//     seatright16.graphics.beginFill("DeepSkyBlue").drawCircle(373, 149, 7);
//     stage.update(event);
//   });

//   seatright16.on('mouseout', function(event) { 
//     seatright16.graphics.beginFill("#5e80ae").drawCircle(373, 149, 7);
//     stage.update(event);
//   });

//   seatright16.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/16/seat_photos/");
//     // alert("seatright16 clicked");
//   });

//   stage.addChild(seatright16);
//   stage.update();

// var seatright17 = new createjs.Shape();

//   seatright17.graphics.beginFill("#5e80ae").drawCircle(240,168,7);

//   stage.enableMouseOver();

//   seatright17.on('mouseover', function(event) { 
//     seatright17.graphics.beginFill("DeepSkyBlue").drawCircle(240, 168, 7);
//     stage.update(event);
//   });

//   seatright17.on('mouseout', function(event) { 
//     seatright17.graphics.beginFill("#5e80ae").drawCircle(240, 168, 7);
//     stage.update(event);
//   });

//   seatright17.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/17/seat_photos/");
//     // alert("seatright17 clicked");
//   });

//   stage.addChild(seatright17);
//   stage.update();

// var seatright18 = new createjs.Shape();

//   seatright18.graphics.beginFill("#5e80ae").drawCircle(259,168,7);

//   stage.enableMouseOver();

//   seatright18.on('mouseover', function(event) { 
//     seatright18.graphics.beginFill("DeepSkyBlue").drawCircle(259, 168, 7);
//     stage.update(event);
//   });

//   seatright18.on('mouseout', function(event) { 
//     seatright18.graphics.beginFill("#5e80ae").drawCircle(259, 168, 7);
//     stage.update(event);
//   });

//   seatright18.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/18/seat_photos/");
//     // alert("seatright18 clicked");
//   });

//   stage.addChild(seatright18);
//   stage.update();

// var seatright19 = new createjs.Shape();

//   seatright19.graphics.beginFill("#5e80ae").drawCircle(278,168,7);

//   stage.enableMouseOver();

//   seatright19.on('mouseover', function(event) { 
//     seatright19.graphics.beginFill("DeepSkyBlue").drawCircle(278, 168, 7);
//     stage.update(event);
//   });

//   seatright19.on('mouseout', function(event) { 
//     seatright19.graphics.beginFill("#5e80ae").drawCircle(278, 168, 7);
//     stage.update(event);
//   });

//   seatright19.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/19/seat_photos/");
//     // alert("seatright19 clicked");
//   });

//   stage.addChild(seatright19);
//   stage.update();

// var righttable2 = new createjs.Shape();
//   righttable2.graphics.beginFill("#bbb").drawRect(290,161,14,14);
//   stage.addChild(righttable2);
//   stage.update();

// var seatright20 = new createjs.Shape();

//   seatright20.graphics.beginFill("#5e80ae").drawCircle(316,168,7);

//   stage.enableMouseOver();

//   seatright20.on('mouseover', function(event) { 
//     seatright20.graphics.beginFill("DeepSkyBlue").drawCircle(316, 168, 7);
//     stage.update(event);
//   });

//   seatright20.on('mouseout', function(event) { 
//     seatright20.graphics.beginFill("#5e80ae").drawCircle(316, 168, 7);
//     stage.update(event);
//   });

//   seatright20.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/20/seat_photos/");
//     // alert("seatright20 clicked");
//   });

//   stage.addChild(seatright20);
//   stage.update();

// var seatright21 = new createjs.Shape();

//   seatright21.graphics.beginFill("#5e80ae").drawCircle(335,168,7);

//   stage.enableMouseOver();

//   seatright21.on('mouseover', function(event) { 
//     seatright21.graphics.beginFill("DeepSkyBlue").drawCircle(335, 168, 7);
//     stage.update(event);
//   });

//   seatright21.on('mouseout', function(event) { 
//     seatright21.graphics.beginFill("#5e80ae").drawCircle(335, 168, 7);
//     stage.update(event);
//   });

//   seatright21.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/21/seat_photos/");
//     // alert("seatright21 clicked");
//   });

//   stage.addChild(seatright21);
//   stage.update();

// var seatright22 = new createjs.Shape();

//   seatright22.graphics.beginFill("#5e80ae").drawCircle(354,168,7);

//   stage.enableMouseOver();

//   seatright22.on('mouseover', function(event) { 
//     seatright22.graphics.beginFill("DeepSkyBlue").drawCircle(354, 168, 7);
//     stage.update(event);
//   });

//   seatright22.on('mouseout', function(event) { 
//     seatright22.graphics.beginFill("#5e80ae").drawCircle(354, 168, 7);
//     stage.update(event);
//   });

//   seatright22.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/22/seat_photos/");
//     // alert("seatright22 clicked");
//   });

//   stage.addChild(seatright22);
//   stage.update();

// var seatright23 = new createjs.Shape();

//   seatright23.graphics.beginFill("#5e80ae").drawCircle(373,168,7);

//   stage.enableMouseOver();

//   seatright23.on('mouseover', function(event) { 
//     seatright23.graphics.beginFill("DeepSkyBlue").drawCircle(373, 168, 7);
//     stage.update(event);
//   });

//   seatright23.on('mouseout', function(event) { 
//     seatright23.graphics.beginFill("#5e80ae").drawCircle(373, 168, 7);
//     stage.update(event);
//   });

//   seatright23.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/22/seat_photos/");
//     // alert("seatright23 clicked");
//   });

//   stage.addChild(seatright23);
//   stage.update();

// var seatright24 = new createjs.Shape();

//   seatright24.graphics.beginFill("#5e80ae").drawCircle(240,187,7);

//   stage.enableMouseOver();

//   seatright24.on('mouseover', function(event) { 
//     seatright24.graphics.beginFill("DeepSkyBlue").drawCircle(240, 187, 7);
//     stage.update(event);
//   });

//   seatright24.on('mouseout', function(event) { 
//     seatright24.graphics.beginFill("#5e80ae").drawCircle(240, 187, 7);
//     stage.update(event);
//   });

//   seatright24.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/24/seat_photos/");
//     // alert("seatright24 clicked");
//   });

//   stage.addChild(seatright24);
//   stage.update();

// var seatright25 = new createjs.Shape();

//   seatright25.graphics.beginFill("#5e80ae").drawCircle(259,187,7);

//   stage.enableMouseOver();

//   seatright25.on('mouseover', function(event) { 
//     seatright25.graphics.beginFill("DeepSkyBlue").drawCircle(259, 187, 7);
//     stage.update(event);
//   });

//   seatright25.on('mouseout', function(event) { 
//     seatright25.graphics.beginFill("#5e80ae").drawCircle(259, 187, 7);
//     stage.update(event);
//   });

//   seatright25.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/25/seat_photos/");
//     // alert("seatright25 clicked");
//   });

//   stage.addChild(seatright25);
//   stage.update();

// var seatright26 = new createjs.Shape();

//   seatright26.graphics.beginFill("#5e80ae").drawCircle(278,187,7);

//   stage.enableMouseOver();

//   seatright26.on('mouseover', function(event) { 
//     seatright26.graphics.beginFill("DeepSkyBlue").drawCircle(278, 187, 7);
//     stage.update(event);
//   });

//   seatright26.on('mouseout', function(event) { 
//     seatright26.graphics.beginFill("#5e80ae").drawCircle(278, 187, 7);
//     stage.update(event);
//   });

//   seatright26.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/26/seat_photos/");
//     // alert("seatright26 clicked");
//   });

//   stage.addChild(seatright26);
//   stage.update();

// var seatright27 = new createjs.Shape();

//   seatright27.graphics.beginFill("#5e80ae").drawCircle(297,187,7);

//   stage.enableMouseOver();

//   seatright27.on('mouseover', function(event) { 
//     seatright27.graphics.beginFill("DeepSkyBlue").drawCircle(297, 187, 7);
//     stage.update(event);
//   });

//   seatright27.on('mouseout', function(event) { 
//     seatright27.graphics.beginFill("#5e80ae").drawCircle(297, 187, 7);
//     stage.update(event);
//   });

//   seatright27.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/27/seat_photos/");
//     // alert("seatright27 clicked");
//   });

//   stage.addChild(seatright27);
//   stage.update();

// var righttable3 = new createjs.Shape();
//   righttable3.graphics.beginFill("#bbb").drawRect(309,180,14,14);
//   stage.addChild(righttable3);
//   stage.update();

// var seatright28 = new createjs.Shape();

//   seatright28.graphics.beginFill("#5e80ae").drawCircle(335,187,7);

//   stage.enableMouseOver();

//   seatright28.on('mouseover', function(event) { 
//     seatright28.graphics.beginFill("DeepSkyBlue").drawCircle(335, 187, 7);
//     stage.update(event);
//   });

//   seatright28.on('mouseout', function(event) { 
//     seatright28.graphics.beginFill("#5e80ae").drawCircle(335, 187, 7);
//     stage.update(event);
//   });

//   seatright28.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/28/seat_photos/");
//     // alert("seatright28 clicked");
//   });

//   stage.addChild(seatright28);
//   stage.update();

// var seatright29 = new createjs.Shape();

//   seatright29.graphics.beginFill("#5e80ae").drawCircle(354,187,7);

//   stage.enableMouseOver();

//   seatright29.on('mouseover', function(event) { 
//     seatright29.graphics.beginFill("DeepSkyBlue").drawCircle(354, 187, 7);
//     stage.update(event);
//   });

//   seatright29.on('mouseout', function(event) { 
//     seatright29.graphics.beginFill("#5e80ae").drawCircle(354, 187, 7);
//     stage.update(event);
//   });

//   seatright29.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/29/seat_photos/");
//     // alert("seatright29 clicked");
//   });

//   stage.addChild(seatright29);
//   stage.update();

// var seatright30 = new createjs.Shape();

//   seatright30.graphics.beginFill("#5e80ae").drawCircle(373,187,7);

//   stage.enableMouseOver();

//   seatright30.on('mouseover', function(event) { 
//     seatright30.graphics.beginFill("DeepSkyBlue").drawCircle(373, 187, 7);
//     stage.update(event);
//   });

//   seatright30.on('mouseout', function(event) { 
//     seatright30.graphics.beginFill("#5e80ae").drawCircle(373, 187, 7);
//     stage.update(event);
//   });

//   seatright30.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/30/seat_photos/");
//     // alert("seatright30 clicked");
//   });

//   stage.addChild(seatright30);
//   stage.update();

// var seatright31 = new createjs.Shape();

//   seatright31.graphics.beginFill("#5e80ae").drawCircle(392,187,7);

//   stage.enableMouseOver();

//   seatright31.on('mouseover', function(event) { 
//     seatright31.graphics.beginFill("DeepSkyBlue").drawCircle(392, 187, 7);
//     stage.update(event);
//   });

//   seatright31.on('mouseout', function(event) { 
//     seatright31.graphics.beginFill("#5e80ae").drawCircle(392, 187, 7);
//     stage.update(event);
//   });

//   seatright31.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/31/seat_photos/");
//     // alert("seatright31 clicked");
//   });

//   stage.addChild(seatright31);
//   stage.update();

// var seatright32 = new createjs.Shape();

//   seatright32.graphics.beginFill("#5e80ae").drawCircle(259,206,7);

//   stage.enableMouseOver();

//   seatright32.on('mouseover', function(event) { 
//     seatright32.graphics.beginFill("DeepSkyBlue").drawCircle(259, 206, 7);
//     stage.update(event);
//   });

//   seatright32.on('mouseout', function(event) { 
//     seatright32.graphics.beginFill("#5e80ae").drawCircle(259, 206, 7);
//     stage.update(event);
//   });

//   seatright32.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/32/seat_photos/");
//     // alert("seatright32 clicked");
//   });

//   stage.addChild(seatright32);
//   stage.update();

// var seatright33 = new createjs.Shape();

//   seatright33.graphics.beginFill("#5e80ae").drawCircle(278,206,7);

//   stage.enableMouseOver();

//   seatright33.on('mouseover', function(event) { 
//     seatright33.graphics.beginFill("DeepSkyBlue").drawCircle(278, 206, 7);
//     stage.update(event);
//   });

//   seatright33.on('mouseout', function(event) { 
//     seatright33.graphics.beginFill("#5e80ae").drawCircle(278, 206, 7);
//     stage.update(event);
//   });

//   seatright33.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/33/seat_photos/");
//     // alert("seatright33 clicked");
//   });

//   stage.addChild(seatright33);
//   stage.update();

// var seatright34 = new createjs.Shape();

//   seatright34.graphics.beginFill("#5e80ae").drawCircle(297,206,7);

//   stage.enableMouseOver();

//   seatright34.on('mouseover', function(event) { 
//     seatright34.graphics.beginFill("DeepSkyBlue").drawCircle(297, 206, 7);
//     stage.update(event);
//   });

//   seatright34.on('mouseout', function(event) { 
//     seatright34.graphics.beginFill("#5e80ae").drawCircle(297, 206, 7);
//     stage.update(event);
//   });

//   seatright34.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/34/seat_photos/");
//     // alert("seatright34 clicked");
//   });

//   stage.addChild(seatright34);
//   stage.update();

// var seatright34 = new createjs.Shape();

//   seatright34.graphics.beginFill("#5e80ae").drawCircle(297,206,7);

//   stage.enableMouseOver();

//   seatright34.on('mouseover', function(event) { 
//     seatright34.graphics.beginFill("DeepSkyBlue").drawCircle(297, 206, 7);
//     stage.update(event);
//   });

//   seatright34.on('mouseout', function(event) { 
//     seatright34.graphics.beginFill("#5e80ae").drawCircle(297, 206, 7);
//     stage.update(event);
//   });

//   seatright34.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/34/seat_photos/");
//     // alert("seatright34 clicked");
//   });

//   stage.addChild(seatright34);
//   stage.update();

// var seatright35 = new createjs.Shape();

//   seatright35.graphics.beginFill("#5e80ae").drawCircle(316,206,7);

//   stage.enableMouseOver();

//   seatright35.on('mouseover', function(event) { 
//     seatright35.graphics.beginFill("DeepSkyBlue").drawCircle(316, 206, 7);
//     stage.update(event);
//   });

//   seatright35.on('mouseout', function(event) { 
//     seatright35.graphics.beginFill("#5e80ae").drawCircle(316, 206, 7);
//     stage.update(event);
//   });

//   seatright35.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/35/seat_photos/");
//     // alert("seatright35 clicked");
//   });

//   stage.addChild(seatright35);
//   stage.update();

// var seatright36 = new createjs.Shape();

//   seatright36.graphics.beginFill("#5e80ae").drawCircle(335,206,7);

//   stage.enableMouseOver();

//   seatright36.on('mouseover', function(event) { 
//     seatright36.graphics.beginFill("DeepSkyBlue").drawCircle(335, 206, 7);
//     stage.update(event);
//   });

//   seatright36.on('mouseout', function(event) { 
//     seatright36.graphics.beginFill("#5e80ae").drawCircle(335, 206, 7);
//     stage.update(event);
//   });

//   seatright36.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/36/seat_photos/");
//     // alert("seatright36 clicked");
//   });

//   stage.addChild(seatright36);
//   stage.update();

// var seatright37 = new createjs.Shape();

//   seatright37.graphics.beginFill("#5e80ae").drawCircle(354,206,7);

//   stage.enableMouseOver();

//   seatright37.on('mouseover', function(event) { 
//     seatright37.graphics.beginFill("DeepSkyBlue").drawCircle(354, 206, 7);
//     stage.update(event);
//   });

//   seatright37.on('mouseout', function(event) { 
//     seatright37.graphics.beginFill("#5e80ae").drawCircle(354, 206, 7);
//     stage.update(event);
//   });

//   seatright37.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/37/seat_photos/");
//     // alert("seatright37 clicked");
//   });

//   stage.addChild(seatright37);
//   stage.update();

// var seatright38 = new createjs.Shape();

//   seatright38.graphics.beginFill("#5e80ae").drawCircle(373,206,7);

//   stage.enableMouseOver();

//   seatright38.on('mouseover', function(event) { 
//     seatright38.graphics.beginFill("DeepSkyBlue").drawCircle(373, 206, 7);
//     stage.update(event);
//   });

//   seatright38.on('mouseout', function(event) { 
//     seatright38.graphics.beginFill("#5e80ae").drawCircle(373, 206, 7);
//     stage.update(event);
//   });

//   seatright38.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/38/seat_photos/");
//     // alert("seatright38 clicked");
//   });

//   stage.addChild(seatright38);
//   stage.update();


// var vhouseRightLev1 = new createjs.Shape();
//   vhouseRightLev1.graphics.beginStroke("#000");
//   vhouseRightLev1.graphics.setStrokeStyle(2, "square");
//   vhouseRightLev1.graphics.drawRoundRect(223,228,186,34,10);
//   stage.addChild(vhouseRightLev1);
//   stage.update();

// var seatright39 = new createjs.Shape();

//   seatright39.graphics.beginFill("#5e80ae").drawCircle(259,245,7);

//   stage.enableMouseOver();

//   seatright39.on('mouseover', function(event) { 
//     seatright39.graphics.beginFill("DeepSkyBlue").drawCircle(259, 245, 7);
//     stage.update(event);
//   });

//   seatright39.on('mouseout', function(event) { 
//     seatright39.graphics.beginFill("#5e80ae").drawCircle(259, 245, 7);
//     stage.update(event);
//   });

//   seatright39.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/39/seat_photos/");
//     // alert("seatright39 clicked");
//   });

//   stage.addChild(seatright39);
//   stage.update();

// var seatright40 = new createjs.Shape();

//   seatright40.graphics.beginFill("#5e80ae").drawCircle(278,245,7);

//   stage.enableMouseOver();

//   seatright40.on('mouseover', function(event) { 
//     seatright40.graphics.beginFill("DeepSkyBlue").drawCircle(278, 245, 7);
//     stage.update(event);
//   });

//   seatright40.on('mouseout', function(event) { 
//     seatright40.graphics.beginFill("#5e80ae").drawCircle(278, 245, 7);
//     stage.update(event);
//   });

//   seatright40.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/40/seat_photos/");
//     // alert("seatright40 clicked");
//   });

//   stage.addChild(seatright40);
//   stage.update();

// var righttable4 = new createjs.Shape();
//   righttable2.graphics.beginFill("#bbb").drawRect(290,238,14,14);
//   stage.addChild(righttable2);
//   stage.update();

// var seatright41 = new createjs.Shape();

//   seatright41.graphics.beginFill("#5e80ae").drawCircle(316,245,7);

//   stage.enableMouseOver();

//   seatright41.on('mouseover', function(event) { 
//     seatright41.graphics.beginFill("DeepSkyBlue").drawCircle(316, 245, 7);
//     stage.update(event);
//   });

//   seatright41.on('mouseout', function(event) { 
//     seatright41.graphics.beginFill("#5e80ae").drawCircle(316, 245, 7);
//     stage.update(event);
//   });

//   seatright41.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/41/seat_photos/");
//     // alert("seatright41 clicked");
//   });

//   stage.addChild(seatright41);
//   stage.update();

// var seatright42 = new createjs.Shape();

//   seatright42.graphics.beginFill("#5e80ae").drawCircle(335,245,7);

//   stage.enableMouseOver();

//   seatright42.on('mouseover', function(event) { 
//     seatright42.graphics.beginFill("DeepSkyBlue").drawCircle(335, 245, 7);
//     stage.update(event);
//   });

//   seatright42.on('mouseout', function(event) { 
//     seatright42.graphics.beginFill("#5e80ae").drawCircle(335, 245, 7);
//     stage.update(event);
//   });

//   seatright42.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/42/seat_photos/");
//     // alert("seatright42 clicked");
//   });

//   stage.addChild(seatright42);
//   stage.update();

// var seatright43 = new createjs.Shape();

//   seatright43.graphics.beginFill("#5e80ae").drawCircle(354,245,7);

//   stage.enableMouseOver();

//   seatright43.on('mouseover', function(event) { 
//     seatright43.graphics.beginFill("DeepSkyBlue").drawCircle(354, 245, 7);
//     stage.update(event);
//   });

//   seatright43.on('mouseout', function(event) { 
//     seatright43.graphics.beginFill("#5e80ae").drawCircle(354, 245, 7);
//     stage.update(event);
//   });

//   seatright43.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/43/seat_photos/");
//     // alert("seatright43 clicked");
//   });

//   stage.addChild(seatright43);
//   stage.update();

// var seatright44 = new createjs.Shape();

//   seatright44.graphics.beginFill("#5e80ae").drawCircle(373,245,7);

//   stage.enableMouseOver();

//   seatright44.on('mouseover', function(event) { 
//     seatright44.graphics.beginFill("DeepSkyBlue").drawCircle(373, 245, 7);
//     stage.update(event);
//   });

//   seatright44.on('mouseout', function(event) { 
//     seatright44.graphics.beginFill("#5e80ae").drawCircle(373, 245, 7);
//     stage.update(event);
//   });

//   seatright44.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/44/seat_photos/");
//     // alert("seatright44 clicked");
//   });

//   stage.addChild(seatright44);
//   stage.update();

// var vhouseRightLev2 = new createjs.Shape();
//   vhouseRightLev2.graphics.beginStroke("#000");
//   vhouseRightLev2.graphics.setStrokeStyle(2, "square");
//   vhouseRightLev2.graphics.drawRoundRect(223,267,186,34,10);
//   stage.addChild(vhouseRightLev2);
//   stage.update();

// var seatright45 = new createjs.Shape();

//   seatright45.graphics.beginFill("#5e80ae").drawCircle(259,284,7);

//   stage.enableMouseOver();

//   seatright45.on('mouseover', function(event) { 
//     seatright45.graphics.beginFill("DeepSkyBlue").drawCircle(259, 284, 7);
//     stage.update(event);
//   });

//   seatright45.on('mouseout', function(event) { 
//     seatright45.graphics.beginFill("#5e80ae").drawCircle(259, 284, 7);
//     stage.update(event);
//   });

//   seatright45.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/45/seat_photos/");
//     // alert("seatright45 clicked");
//   });

//   stage.addChild(seatright45);
//   stage.update();

// var seatright46 = new createjs.Shape();

//   seatright46.graphics.beginFill("#5e80ae").drawCircle(278,284,7);

//   stage.enableMouseOver();

//   seatright46.on('mouseover', function(event) { 
//     seatright46.graphics.beginFill("DeepSkyBlue").drawCircle(278, 284, 7);
//     stage.update(event);
//   });

//   seatright46.on('mouseout', function(event) { 
//     seatright46.graphics.beginFill("#5e80ae").drawCircle(278, 284, 7);
//     stage.update(event);
//   });

//   seatright46.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/46/seat_photos/");
//     // alert("seatright46 clicked");
//   });

//   stage.addChild(seatright46);
//   stage.update();

// var righttable5 = new createjs.Shape();
//   righttable5.graphics.beginFill("#bbb").drawRect(290,277,14,14);
//   stage.addChild(righttable5);
//   stage.update();

// var seatright47 = new createjs.Shape();

//   seatright47.graphics.beginFill("#5e80ae").drawCircle(316,284,7);

//   stage.enableMouseOver();

//   seatright47.on('mouseover', function(event) { 
//     seatright47.graphics.beginFill("DeepSkyBlue").drawCircle(316, 284, 7);
//     stage.update(event);
//   });

//   seatright47.on('mouseout', function(event) { 
//     seatright47.graphics.beginFill("#5e80ae").drawCircle(316, 284, 7);
//     stage.update(event);
//   });

//   seatright47.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/47/seat_photos/");
//     // alert("seatright47 clicked");
//   });

//   stage.addChild(seatright47);
//   stage.update();

// var seatright48 = new createjs.Shape();

//   seatright48.graphics.beginFill("#5e80ae").drawCircle(335,284,7);

//   stage.enableMouseOver();

//   seatright48.on('mouseover', function(event) { 
//     seatright48.graphics.beginFill("DeepSkyBlue").drawCircle(335, 284, 7);
//     stage.update(event);
//   });

//   seatright48.on('mouseout', function(event) { 
//     seatright48.graphics.beginFill("#5e80ae").drawCircle(335, 284, 7);
//     stage.update(event);
//   });

//   seatright48.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/48/seat_photos/");
//     // alert("seatright48 clicked");
//   });

//   stage.addChild(seatright48);
//   stage.update();

// var seatright49 = new createjs.Shape();

//   seatright49.graphics.beginFill("#5e80ae").drawCircle(354,284,7);

//   stage.enableMouseOver();

//   seatright49.on('mouseover', function(event) { 
//     seatright49.graphics.beginFill("DeepSkyBlue").drawCircle(354, 284, 7);
//     stage.update(event);
//   });

//   seatright49.on('mouseout', function(event) { 
//     seatright49.graphics.beginFill("#5e80ae").drawCircle(354, 284, 7);
//     stage.update(event);
//   });

//   seatright49.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/49/seat_photos/");
//     // alert("seatright49 clicked");
//   });

//   stage.addChild(seatright49);
//   stage.update();

// var seatright50 = new createjs.Shape();

//   seatright50.graphics.beginFill("#5e80ae").drawCircle(373,284,7);

//   stage.enableMouseOver();

//   seatright50.on('mouseover', function(event) { 
//     seatright50.graphics.beginFill("DeepSkyBlue").drawCircle(373, 284, 7);
//     stage.update(event);
//   });

//   seatright50.on('mouseout', function(event) { 
//     seatright50.graphics.beginFill("#5e80ae").drawCircle(373, 284, 7);
//     stage.update(event);
//   });

//   seatright50.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/50/seat_photos/");
//     // alert("seatright50 clicked");
//   });

//   stage.addChild(seatright50);
//   stage.update();

// var vhouseRightLev3 = new createjs.Shape();
//   vhouseRightLev3.graphics.beginStroke("#000");
//   vhouseRightLev3.graphics.setStrokeStyle(2, "square");
//   vhouseRightLev3.graphics.drawRoundRect(223,306,186,34,10);
//   stage.addChild(vhouseRightLev3);
//   stage.update();

// var seatright51 = new createjs.Shape();

//   seatright51.graphics.beginFill("#5e80ae").drawCircle(240,323,7);

//   stage.enableMouseOver();

//   seatright51.on('mouseover', function(event) { 
//     seatright51.graphics.beginFill("DeepSkyBlue").drawCircle(240, 323, 7);
//     stage.update(event);
//   });

//   seatright51.on('mouseout', function(event) { 
//     seatright51.graphics.beginFill("#5e80ae").drawCircle(240, 323, 7);
//     stage.update(event);
//   });

//   seatright51.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/51/seat_photos/");
//     // alert("seatright51 clicked");
//   });

//   stage.addChild(seatright51);
//   stage.update();

// var seatright52 = new createjs.Shape();

//   seatright52.graphics.beginFill("#5e80ae").drawCircle(259,323,7);

//   stage.enableMouseOver();

//   seatright52.on('mouseover', function(event) { 
//     seatright52.graphics.beginFill("DeepSkyBlue").drawCircle(259, 323, 7);
//     stage.update(event);
//   });

//   seatright52.on('mouseout', function(event) { 
//     seatright52.graphics.beginFill("#5e80ae").drawCircle(259, 323, 7);
//     stage.update(event);
//   });

//   seatright52.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/52/seat_photos/");
//     // alert("seatright52 clicked");
//   });

//   stage.addChild(seatright52);
//   stage.update();

// var seatright53 = new createjs.Shape();

//   seatright53.graphics.beginFill("#5e80ae").drawCircle(297,323,7);

//   stage.enableMouseOver();

//   seatright53.on('mouseover', function(event) { 
//     seatright53.graphics.beginFill("DeepSkyBlue").drawCircle(297, 323, 7);
//     stage.update(event);
//   });

//   seatright53.on('mouseout', function(event) { 
//     seatright53.graphics.beginFill("#5e80ae").drawCircle(297, 323, 7);
//     stage.update(event);
//   });

//   seatright53.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/53/seat_photos/");
//     // alert("seatright53 clicked");
//   });

//   stage.addChild(seatright53);
//   stage.update();

// var seatright54 = new createjs.Shape();

//   seatright54.graphics.beginFill("#5e80ae").drawCircle(316,323,7);

//   stage.enableMouseOver();

//   seatright54.on('mouseover', function(event) { 
//     seatright54.graphics.beginFill("DeepSkyBlue").drawCircle(316, 323, 7);
//     stage.update(event);
//   });

//   seatright54.on('mouseout', function(event) { 
//     seatright54.graphics.beginFill("#5e80ae").drawCircle(316, 323, 7);
//     stage.update(event);
//   });

//   seatright54.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/54/seat_photos/");
//     // alert("seatright54 clicked");
//   });

//   stage.addChild(seatright54);
//   stage.update();

// var seatright55 = new createjs.Shape();

//   seatright55.graphics.beginFill("#5e80ae").drawCircle(335,323,7);

//   stage.enableMouseOver();

//   seatright55.on('mouseover', function(event) { 
//     seatright55.graphics.beginFill("DeepSkyBlue").drawCircle(335, 323, 7);
//     stage.update(event);
//   });

//   seatright55.on('mouseout', function(event) { 
//     seatright55.graphics.beginFill("#5e80ae").drawCircle(335, 323, 7);
//     stage.update(event);
//   });

//   seatright55.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/55/seat_photos/");
//     // alert("seatright55 clicked");
//   });

//   stage.addChild(seatright55);
//   stage.update();

// var seatright56 = new createjs.Shape();

//   seatright56.graphics.beginFill("#5e80ae").drawCircle(354,323,7);

//   stage.enableMouseOver();

//   seatright56.on('mouseover', function(event) { 
//     seatright56.graphics.beginFill("DeepSkyBlue").drawCircle(354, 323, 7);
//     stage.update(event);
//   });

//   seatright56.on('mouseout', function(event) { 
//     seatright56.graphics.beginFill("#5e80ae").drawCircle(354, 323, 7);
//     stage.update(event);
//   });

//   seatright56.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/56/seat_photos/");
//     // alert("seatright56 clicked");
//   });

//   stage.addChild(seatright56);
//   stage.update();

// var seatright57 = new createjs.Shape();

//   seatright57.graphics.beginFill("#5e80ae").drawCircle(373,323,7);

//   stage.enableMouseOver();

//   seatright57.on('mouseover', function(event) { 
//     seatright57.graphics.beginFill("DeepSkyBlue").drawCircle(373, 323, 7);
//     stage.update(event);
//   });

//   seatright57.on('mouseout', function(event) { 
//     seatright57.graphics.beginFill("#5e80ae").drawCircle(373, 323, 7);
//     stage.update(event);
//   });

//   seatright57.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/57/seat_photos/");
//     // alert("seatright57 clicked");
//   });

//   stage.addChild(seatright57);
//   stage.update();

// var vhouseRightLev4 = new createjs.Shape();
//   vhouseRightLev4.graphics.beginStroke("#000");
//   vhouseRightLev4.graphics.setStrokeStyle(2, "square");
//   vhouseRightLev4.graphics.drawRoundRect(223,345,186,34,10);
//   stage.addChild(vhouseRightLev4);
//   stage.update();

// var seatright58 = new createjs.Shape();

//   seatright58.graphics.beginFill("#5e80ae").drawCircle(259,362,7);

//   stage.enableMouseOver();

//   seatright58.on('mouseover', function(event) { 
//     seatright58.graphics.beginFill("DeepSkyBlue").drawCircle(259, 362, 7);
//     stage.update(event);
//   });

//   seatright58.on('mouseout', function(event) { 
//     seatright58.graphics.beginFill("#5e80ae").drawCircle(259, 362, 7);
//     stage.update(event);
//   });

//   seatright58.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/58/seat_photos/");
//     // alert("seatright58 clicked");
//   });

//   stage.addChild(seatright58);
//   stage.update();

// var seatright59 = new createjs.Shape();

//   seatright59.graphics.beginFill("#5e80ae").drawCircle(278,362,7);

//   stage.enableMouseOver();

//   seatright59.on('mouseover', function(event) { 
//     seatright59.graphics.beginFill("DeepSkyBlue").drawCircle(278, 362, 7);
//     stage.update(event);
//   });

//   seatright59.on('mouseout', function(event) { 
//     seatright59.graphics.beginFill("#5e80ae").drawCircle(278, 362, 7);
//     stage.update(event);
//   });

//   seatright59.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/59/seat_photos/");
//     // alert("seatright59 clicked");
//   });

//   stage.addChild(seatright59);
//   stage.update();

// var seatright60 = new createjs.Shape();

//   seatright60.graphics.beginFill("#5e80ae").drawCircle(297,362,7);

//   stage.enableMouseOver();

//   seatright60.on('mouseover', function(event) { 
//     seatright60.graphics.beginFill("DeepSkyBlue").drawCircle(297, 362, 7);
//     stage.update(event);
//   });

//   seatright60.on('mouseout', function(event) { 
//     seatright60.graphics.beginFill("#5e80ae").drawCircle(297, 362, 7);
//     stage.update(event);
//   });

//   seatright60.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/60/seat_photos/");
//     // alert("seatright60 clicked");
//   });

//   stage.addChild(seatright60);
//   stage.update();


// var seatright61 = new createjs.Shape();

//   seatright61.graphics.beginFill("#5e80ae").drawCircle(316,362,7);

//   stage.enableMouseOver();

//   seatright61.on('mouseover', function(event) { 
//     seatright61.graphics.beginFill("DeepSkyBlue").drawCircle(316, 362, 7);
//     stage.update(event);
//   });

//   seatright61.on('mouseout', function(event) { 
//     seatright61.graphics.beginFill("#5e80ae").drawCircle(316, 362, 7);
//     stage.update(event);
//   });

//   seatright61.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/61/seat_photos/");
//     // alert("seatright61 clicked");
//   });

//   stage.addChild(seatright61);
//   stage.update();

// var seatright62 = new createjs.Shape();

//   seatright62.graphics.beginFill("#5e80ae").drawCircle(335,362,7);

//   stage.enableMouseOver();

//   seatright62.on('mouseover', function(event) { 
//     seatright62.graphics.beginFill("DeepSkyBlue").drawCircle(335, 362, 7);
//     stage.update(event);
//   });

//   seatright62.on('mouseout', function(event) { 
//     seatright62.graphics.beginFill("#5e80ae").drawCircle(335, 362, 7);
//     stage.update(event);
//   });

//   seatright62.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/62/seat_photos/");
//     // alert("seatright62 clicked");
//   });

//   stage.addChild(seatright62);
//   stage.update();

// var seatright63 = new createjs.Shape();

//   seatright63.graphics.beginFill("#5e80ae").drawCircle(354,362,7);

//   stage.enableMouseOver();

//   seatright63.on('mouseover', function(event) { 
//     seatright63.graphics.beginFill("DeepSkyBlue").drawCircle(354, 362, 7);
//     stage.update(event);
//   });

//   seatright63.on('mouseout', function(event) { 
//     seatright63.graphics.beginFill("#5e80ae").drawCircle(354, 362, 7);
//     stage.update(event);
//   });

//   seatright63.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/63/seat_photos/");
//     // alert("seatright63 clicked");
//   });

//   stage.addChild(seatright63);
//   stage.update();

// var seatright64 = new createjs.Shape();

//   seatright64.graphics.beginFill("#5e80ae").drawCircle(373,362,7);

//   stage.enableMouseOver();

//   seatright64.on('mouseover', function(event) { 
//     seatright64.graphics.beginFill("DeepSkyBlue").drawCircle(373, 362, 7);
//     stage.update(event);
//   });

//   seatright64.on('mouseout', function(event) { 
//     seatright64.graphics.beginFill("#5e80ae").drawCircle(373, 362, 7);
//     stage.update(event);
//   });

//   seatright64.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/64/seat_photos/");
//     // alert("seatright64 clicked");
//   });

//   stage.addChild(seatright64);
//   stage.update();

// var vhouseLeft = new createjs.Shape();
//   vhouseLeft.graphics.beginStroke("#000");
//   vhouseLeft.graphics.setStrokeStyle(2, "square");
//   vhouseLeft.graphics.drawRoundRect(10,94,186,129,10);
//   stage.addChild(vhouseLeft);
//   stage.update();

// var leftfronttable1 = new createjs.Shape();
//   leftfronttable1.graphics.beginFill("#bbb").drawRect(163,104,14,14);
//   stage.addChild(leftfronttable1);

// var leftfronttable2 = new createjs.Shape();
//   leftfronttable2.graphics.beginFill("#bbb").drawRect(68,104,14,14);
//   stage.addChild(leftfronttable2);

// var leftfronttable3 = new createjs.Shape();
//   leftfronttable3.graphics.beginFill("#bbb").drawRect(125,104,14,14);
//   stage.addChild(leftfronttable3);

// var seat65 = new createjs.Shape();

//   seat65.graphics.beginFill("#5e80ae").drawCircle(179,130,7);

//   stage.enableMouseOver();

//   seat65.on('mouseover', function(event) { 
//     seat65.graphics.beginFill("DeepSkyBlue").drawCircle(179, 130, 7);
//     stage.update(event);
//   });

//   seat65.on('mouseout', function(event) { 
//     seat65.graphics.beginFill("#5e80ae").drawCircle(179, 130, 7);
//     stage.update(event);
//   });

//   seat65.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/65/seat_photos/");
//     // alert("seat65 clicked");
//   });

//   stage.addChild(seat65);
//   stage.update();

// var seat66 = new createjs.Shape();

//   seat66.graphics.beginFill("#5e80ae").drawCircle(160,130,7);

//   stage.enableMouseOver();

//   seat66.on('mouseover', function(event) { 
//     seat66.graphics.beginFill("DeepSkyBlue").drawCircle(160, 130, 7);
//     stage.update(event);
//   });

//   seat66.on('mouseout', function(event) { 
//     seat66.graphics.beginFill("#5e80ae").drawCircle(160, 130, 7);
//     stage.update(event);
//   });

//   seat66.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/66/seat_photos/");
//     // alert("seat66 clicked");
//   });

//   stage.addChild(seat66);
//   stage.update();


// var seat67 = new createjs.Shape();

//   seat67.graphics.beginFill("#5e80ae").drawCircle(141,130,7);

//   stage.enableMouseOver();

//   seat67.on('mouseover', function(event) { 
//     seat67.graphics.beginFill("DeepSkyBlue").drawCircle(141, 130, 7);
//     stage.update(event);
//   });

//   seat67.on('mouseout', function(event) { 
//     seat67.graphics.beginFill("#5e80ae").drawCircle(141, 130, 7);
//     stage.update(event);
//   });

//   seat67.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/67/seat_photos/");
//     // alert("seat67 clicked");
//   });

//   stage.addChild(seat67);
//   stage.update();

// var seat68 = new createjs.Shape();

//   seat68.graphics.beginFill("#5e80ae").drawCircle(122,130,7);

//   stage.enableMouseOver();

//   seat68.on('mouseover', function(event) { 
//     seat68.graphics.beginFill("DeepSkyBlue").drawCircle(122, 130, 7);
//     stage.update(event);
//   });

//   seat68.on('mouseout', function(event) { 
//     seat68.graphics.beginFill("#5e80ae").drawCircle(122, 130, 7);
//     stage.update(event);
//   });

//   seat68.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/68/seat_photos/");
//     // alert("seat68 clicked");
//   });

//   stage.addChild(seat68);
//   stage.update();

// var seat69 = new createjs.Shape();

//   seat69.graphics.beginFill("#5e80ae").drawCircle(103,130,7);

//   stage.enableMouseOver();

//   seat69.on('mouseover', function(event) { 
//     seat69.graphics.beginFill("DeepSkyBlue").drawCircle(103, 130, 7);
//     stage.update(event);
//   });

//   seat69.on('mouseout', function(event) { 
//     seat69.graphics.beginFill("#5e80ae").drawCircle(103, 130, 7);
//     stage.update(event);
//   });

//   seat69.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/69/seat_photos/");
//     // alert("seat69 clicked");
//   });

//   stage.addChild(seat69);
//   stage.update();

// var seat70 = new createjs.Shape();

//   seat70.graphics.beginFill("#5e80ae").drawCircle(84,130,7);

//   stage.enableMouseOver();

//   seat70.on('mouseover', function(event) { 
//     seat70.graphics.beginFill("DeepSkyBlue").drawCircle(84, 130, 7);
//     stage.update(event);
//   });

//   seat70.on('mouseout', function(event) { 
//     seat70.graphics.beginFill("#5e80ae").drawCircle(84, 130, 7);
//     stage.update(event);
//   });

//   seat70.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/70/seat_photos/");
//     // alert("seat70 clicked");
//   });

//   stage.addChild(seat70);
//   stage.update();

// var seat71 = new createjs.Shape();
  
//   seat71.graphics.beginFill("#5e80ae").drawCircle(65,130,7);

//   stage.enableMouseOver();

//   seat71.on('mouseover', function(event) { 
//     seat71.graphics.beginFill("DeepSkyBlue").drawCircle(65, 130, 7);
//     stage.update(event);
//   });

//   seat71.on('mouseout', function(event) { 
//     seat71.graphics.beginFill("#5e80ae").drawCircle(65, 130, 7);
//     stage.update(event);
//   });

//   seat71.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/71/seat_photos/");
//     // alert("seat71 clicked");
//   });

//   stage.addChild(seat71);
//   stage.update();

// var seat72 = new createjs.Shape();
  
//   seat72.graphics.beginFill("#5e80ae").drawCircle(46,130,7);

//   stage.enableMouseOver();

//   seat72.on('mouseover', function(event) { 
//     seat72.graphics.beginFill("DeepSkyBlue").drawCircle(46, 130, 7);
//     stage.update(event);
//   });

//   seat72.on('mouseout', function(event) { 
//     seat72.graphics.beginFill("#5e80ae").drawCircle(46, 130, 7);
//     stage.update(event);
//   });

//   seat72.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/72/seat_photos/");
//     // alert("seat72 clicked");
//   });

//   stage.addChild(seat72);
//   stage.update();

// var seat73 = new createjs.Shape();
  
//   seat73.graphics.beginFill("#5e80ae").drawCircle(27,130,7);

//   stage.enableMouseOver();

//   seat73.on('mouseover', function(event) { 
//     seat73.graphics.beginFill("DeepSkyBlue").drawCircle(27, 130, 7);
//     stage.update(event);
//   });

//   seat73.on('mouseout', function(event) { 
//     seat73.graphics.beginFill("#5e80ae").drawCircle(27, 130, 7);
//     stage.update(event);
//   });

//   seat73.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/73/seat_photos/");
//     // alert("seat73 clicked");
//   });

//   stage.addChild(seat73);
//   stage.update();

// var seat74 = new createjs.Shape();

//   seat74.graphics.beginFill("#5e80ae").drawCircle(179,149,7);

//   stage.enableMouseOver();

//   seat74.on('mouseover', function(event) { 
//     seat74.graphics.beginFill("DeepSkyBlue").drawCircle(179, 149, 7);
//     stage.update(event);
//   });

//   seat74.on('mouseout', function(event) { 
//     seat74.graphics.beginFill("#5e80ae").drawCircle(179, 149, 7);
//     stage.update(event);
//   });

//   seat74.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/74/seat_photos/");
//     // alert("seat74 clicked");
//   });

//   stage.addChild(seat74);
//   stage.update();

// var seat75 = new createjs.Shape();

//   seat75.graphics.beginFill("#5e80ae").drawCircle(160,149,7);

//   stage.enableMouseOver();

//   seat75.on('mouseover', function(event) { 
//     seat75.graphics.beginFill("DeepSkyBlue").drawCircle(160, 149, 7);
//     stage.update(event);
//   });

//   seat75.on('mouseout', function(event) { 
//     seat75.graphics.beginFill("#5e80ae").drawCircle(160, 149, 7);
//     stage.update(event);
//   });

//   seat75.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/75/seat_photos/");
//     // alert("seat75 clicked");
//   });

//   stage.addChild(seat75);
//   stage.update();


// var seat76 = new createjs.Shape();

//   seat76.graphics.beginFill("#5e80ae").drawCircle(141,149,7);

//   stage.enableMouseOver();

//   seat76.on('mouseover', function(event) { 
//     seat76.graphics.beginFill("DeepSkyBlue").drawCircle(141, 149, 7);
//     stage.update(event);
//   });

//   seat76.on('mouseout', function(event) { 
//     seat76.graphics.beginFill("#5e80ae").drawCircle(141, 149, 7);
//     stage.update(event);
//   });

//   seat76.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/76/seat_photos/");
//     // alert("seat76 clicked");
//   });

//   stage.addChild(seat76);
//   stage.update();

// var seat77 = new createjs.Shape();

//   seat77.graphics.beginFill("#5e80ae").drawCircle(122,149,7);

//   stage.enableMouseOver();

//   seat77.on('mouseover', function(event) { 
//     seat77.graphics.beginFill("DeepSkyBlue").drawCircle(122, 149, 7);
//     stage.update(event);
//   });

//   seat77.on('mouseout', function(event) { 
//     seat77.graphics.beginFill("#5e80ae").drawCircle(122, 149, 7);
//     stage.update(event);
//   });

//   seat77.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/77/seat_photos/");
//     // alert("seat77 clicked");
//   });

//   stage.addChild(seat77);
//   stage.update();

// var seat78 = new createjs.Shape();

//   seat78.graphics.beginFill("#5e80ae").drawCircle(103,149,7);

//   stage.enableMouseOver();

//   seat78.on('mouseover', function(event) { 
//     seat78.graphics.beginFill("DeepSkyBlue").drawCircle(103, 149, 7);
//     stage.update(event);
//   });

//   seat78.on('mouseout', function(event) { 
//     seat78.graphics.beginFill("#5e80ae").drawCircle(103, 149, 7);
//     stage.update(event);
//   });

//   seat78.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/78/seat_photos/");
//     // alert("seat78 clicked");
//   });

//   stage.addChild(seat78);
//   stage.update();

// var lefttable4 = new createjs.Shape();
//   lefttable4.graphics.beginFill("#bbb").drawRect(77,142,14,14);
//   stage.addChild(lefttable4);
//   stage.update();

// var seat79 = new createjs.Shape();

//   seat79.graphics.beginFill("#5e80ae").drawCircle(65,149,7);

//   stage.enableMouseOver();

//   seat79.on('mouseover', function(event) { 
//     seat79.graphics.beginFill("DeepSkyBlue").drawCircle(65, 149, 7);
//     stage.update(event);
//   });

//   seat79.on('mouseout', function(event) { 
//     seat79.graphics.beginFill("#5e80ae").drawCircle(65, 149, 7);
//     stage.update(event);
//   });

//   seat79.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/79/seat_photos/");
//     // alert("seat79 clicked");
//   });

//   stage.addChild(seat79);
//   stage.update();

// var seat80 = new createjs.Shape();

//   seat80.graphics.beginFill("#5e80ae").drawCircle(46,149,7);

//   stage.enableMouseOver();

//   seat80.on('mouseover', function(event) { 
//     seat80.graphics.beginFill("DeepSkyBlue").drawCircle(46, 149, 7);
//     stage.update(event);
//   });

//   seat80.on('mouseout', function(event) { 
//     seat80.graphics.beginFill("#5e80ae").drawCircle(46, 149, 7);
//     stage.update(event);
//   });

//   seat80.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/80/seat_photos/");
//     // alert("seat80 clicked");
//   });

//   stage.addChild(seat80);
//   stage.update();

// var seat81 = new createjs.Shape();

//   seat81.graphics.beginFill("#5e80ae").drawCircle(179,168,7);

//   stage.enableMouseOver();

//   seat81.on('mouseover', function(event) { 
//     seat81.graphics.beginFill("DeepSkyBlue").drawCircle(179, 168, 7);
//     stage.update(event);
//   });

//   seat81.on('mouseout', function(event) { 
//     seat81.graphics.beginFill("#5e80ae").drawCircle(179, 168, 7);
//     stage.update(event);
//   });

//   seat81.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/81/seat_photos/");
//     // alert("seat81 clicked");
//   });

//   stage.addChild(seat81);
//   stage.update();

// var seat82 = new createjs.Shape();

//   seat82.graphics.beginFill("#5e80ae").drawCircle(160,168,7);

//   stage.enableMouseOver();

//   seat82.on('mouseover', function(event) { 
//     seat82.graphics.beginFill("DeepSkyBlue").drawCircle(160, 168, 7);
//     stage.update(event);
//   });

//   seat82.on('mouseout', function(event) { 
//     seat82.graphics.beginFill("#5e80ae").drawCircle(160, 168, 7);
//     stage.update(event);
//   });

//   seat82.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/82/seat_photos/");
//     // alert("seat82 clicked");
//   });

//   stage.addChild(seat82);
//   stage.update();

// var lefttable5 = new createjs.Shape();
//   lefttable5.graphics.beginFill("#bbb").drawRect(134,161,14,14);
//   stage.addChild(lefttable5);
//   stage.update();

// var seat83 = new createjs.Shape();

//   seat83.graphics.beginFill("#5e80ae").drawCircle(122,168,7);

//   stage.enableMouseOver();

//   seat83.on('mouseover', function(event) { 
//     seat83.graphics.beginFill("DeepSkyBlue").drawCircle(122, 168, 7);
//     stage.update(event);
//   });

//   seat83.on('mouseout', function(event) { 
//     seat83.graphics.beginFill("#5e80ae").drawCircle(122, 168, 7);
//     stage.update(event);
//   });

//   seat83.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/83/seat_photos/");
//     // alert("seat83 clicked");
//   });

//   stage.addChild(seat83);
//   stage.update();

// var seat84 = new createjs.Shape();

//   seat84.graphics.beginFill("#5e80ae").drawCircle(103,168,7);

//   stage.enableMouseOver();

//   seat84.on('mouseover', function(event) { 
//     seat84.graphics.beginFill("DeepSkyBlue").drawCircle(103, 168, 7);
//     stage.update(event);
//   });

//   seat84.on('mouseout', function(event) { 
//     seat84.graphics.beginFill("#5e80ae").drawCircle(103, 168, 7);
//     stage.update(event);
//   });

//   seat84.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/84/seat_photos/");
//     // alert("seat84 clicked");
//   });

//   stage.addChild(seat84);
//   stage.update();

// var seat85 = new createjs.Shape();

//   seat85.graphics.beginFill("#5e80ae").drawCircle(84,168,7);

//   stage.enableMouseOver();

//   seat85.on('mouseover', function(event) { 
//     seat85.graphics.beginFill("DeepSkyBlue").drawCircle(84, 168, 7);
//     stage.update(event);
//   });

//   seat85.on('mouseout', function(event) { 
//     seat85.graphics.beginFill("#5e80ae").drawCircle(84, 168, 7);
//     stage.update(event);
//   });

//   seat85.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/85/seat_photos/");
//     // alert("seat85 clicked");
//   });

//   stage.addChild(seat85);
//   stage.update();

// var seat86 = new createjs.Shape();

//   seat86.graphics.beginFill("#5e80ae").drawCircle(65,168,7);

//   stage.enableMouseOver();

//   seat86.on('mouseover', function(event) { 
//     seat86.graphics.beginFill("DeepSkyBlue").drawCircle(65, 168, 7);
//     stage.update(event);
//   });

//   seat86.on('mouseout', function(event) { 
//     seat86.graphics.beginFill("#5e80ae").drawCircle(65, 168, 7);
//     stage.update(event);
//   });

//   seat86.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/86/seat_photos/");
//     // alert("seat86 clicked");
//   });

//   stage.addChild(seat86);
//   stage.update();

// var seat87 = new createjs.Shape();

//   seat87.graphics.beginFill("#5e80ae").drawCircle(46,168,7);

//   stage.enableMouseOver();

//   seat87.on('mouseover', function(event) { 
//     seat87.graphics.beginFill("DeepSkyBlue").drawCircle(46, 168, 7);
//     stage.update(event);
//   });

//   seat87.on('mouseout', function(event) { 
//     seat87.graphics.beginFill("#5e80ae").drawCircle(46, 168, 7);
//     stage.update(event);
//   });

//   seat87.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/87/seat_photos/");
//     // alert("seat87 clicked");
//   });

//   stage.addChild(seat87);
//   stage.update();

// var seat88 = new createjs.Shape();

//   seat88.graphics.beginFill("#5e80ae").drawCircle(179,187,7);

//   stage.enableMouseOver();

//   seat88.on('mouseover', function(event) { 
//     seat88.graphics.beginFill("DeepSkyBlue").drawCircle(179, 187, 7);
//     stage.update(event);
//   });

//   seat88.on('mouseout', function(event) { 
//     seat88.graphics.beginFill("#5e80ae").drawCircle(179, 187, 7);
//     stage.update(event);
//   });

//   seat88.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/88/seat_photos/");
//     // alert("seat88 clicked");
//   });

//   stage.addChild(seat88);
//   stage.update();

// var seat89 = new createjs.Shape();

//   seat89.graphics.beginFill("#5e80ae").drawCircle(160,187,7);

//   stage.enableMouseOver();

//   seat89.on('mouseover', function(event) { 
//     seat89.graphics.beginFill("DeepSkyBlue").drawCircle(160, 187, 7);
//     stage.update(event);
//   });

//   seat89.on('mouseout', function(event) { 
//     seat89.graphics.beginFill("#5e80ae").drawCircle(160, 187, 7);
//     stage.update(event);
//   });

//   seat89.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/89/seat_photos/");
//     // alert("seat89 clicked");
//   });

//   stage.addChild(seat89);
//   stage.update();

// var seat90 = new createjs.Shape();

//   seat90.graphics.beginFill("#5e80ae").drawCircle(141,187,7);

//   stage.enableMouseOver();

//   seat90.on('mouseover', function(event) { 
//     seat90.graphics.beginFill("DeepSkyBlue").drawCircle(141, 187, 7);
//     stage.update(event);
//   });

//   seat90.on('mouseout', function(event) { 
//     seat90.graphics.beginFill("#5e80ae").drawCircle(141, 187, 7);
//     stage.update(event);
//   });

//   seat90.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/90/seat_photos/");
//     // alert("seat90 clicked");
//   });

//   stage.addChild(seat90);
//   stage.update();

// var seat91 = new createjs.Shape();

//   seat91.graphics.beginFill("#5e80ae").drawCircle(122,187,7);

//   stage.enableMouseOver();

//   seat91.on('mouseover', function(event) { 
//     seat91.graphics.beginFill("DeepSkyBlue").drawCircle(122, 187, 7);
//     stage.update(event);
//   });

//   seat91.on('mouseout', function(event) { 
//     seat91.graphics.beginFill("#5e80ae").drawCircle(122, 187, 7);
//     stage.update(event);
//   });

//   seat91.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/91/seat_photos/");
//     // alert("seat91 clicked");
//   });

//   stage.addChild(seat91);
//   stage.update();

// var seat92 = new createjs.Shape();

//   seat92.graphics.beginFill("#5e80ae").drawCircle(103,187,7);

//   stage.enableMouseOver();

//   seat92.on('mouseover', function(event) { 
//     seat92.graphics.beginFill("DeepSkyBlue").drawCircle(103, 187, 7);
//     stage.update(event);
//   });

//   seat92.on('mouseout', function(event) { 
//     seat92.graphics.beginFill("#5e80ae").drawCircle(103, 187, 7);
//     stage.update(event);
//   });

//   seat92.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/92/seat_photos/");
//     // alert("seat92 clicked");
//   });

//   stage.addChild(seat92);
//   stage.update();

// var seat93 = new createjs.Shape();

//   seat93.graphics.beginFill("#5e80ae").drawCircle(84,187,7);

//   stage.enableMouseOver();

//   seat93.on('mouseover', function(event) { 
//     seat93.graphics.beginFill("DeepSkyBlue").drawCircle(84, 187, 7);
//     stage.update(event);
//   });

//   seat93.on('mouseout', function(event) { 
//     seat93.graphics.beginFill("#5e80ae").drawCircle(84, 187, 7);
//     stage.update(event);
//   });

//   seat93.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/93/seat_photos/");
//     // alert("seat93 clicked");
//   });

//   stage.addChild(seat93);
//   stage.update();

// var seat94 = new createjs.Shape();

//   seat94.graphics.beginFill("#5e80ae").drawCircle(65,187,7);

//   stage.enableMouseOver();

//   seat94.on('mouseover', function(event) { 
//     seat94.graphics.beginFill("DeepSkyBlue").drawCircle(65, 187, 7);
//     stage.update(event);
//   });

//   seat94.on('mouseout', function(event) { 
//     seat94.graphics.beginFill("#5e80ae").drawCircle(65, 187, 7);
//     stage.update(event);
//   });

//   seat94.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/94/seat_photos/");
//     // alert("seat94 clicked");
//   });

//   stage.addChild(seat94);
//   stage.update();

// var seat95 = new createjs.Shape();

//   seat95.graphics.beginFill("#5e80ae").drawCircle(46,187,7);

//   stage.enableMouseOver();

//   seat95.on('mouseover', function(event) { 
//     seat95.graphics.beginFill("DeepSkyBlue").drawCircle(46, 187, 7);
//     stage.update(event);
//   });

//   seat95.on('mouseout', function(event) { 
//     seat95.graphics.beginFill("#5e80ae").drawCircle(46, 187, 7);
//     stage.update(event);
//   });

//   seat95.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/95/seat_photos/");
//     // alert("seat95 clicked");
//   });

//   stage.addChild(seat95);
//   stage.update();

// var seat96 = new createjs.Shape();

//   seat96.graphics.beginFill("#5e80ae").drawCircle(179,206,7);

//   stage.enableMouseOver();

//   seat96.on('mouseover', function(event) { 
//     seat96.graphics.beginFill("DeepSkyBlue").drawCircle(179, 206, 7);
//     stage.update(event);
//   });

//   seat96.on('mouseout', function(event) { 
//     seat96.graphics.beginFill("#5e80ae").drawCircle(179, 206, 7);
//     stage.update(event);
//   });

//   seat96.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/96/seat_photos/");
//     // alert("seat96 clicked");
//   });

//   stage.addChild(seat96);
//   stage.update();

// var seat97 = new createjs.Shape();

//   seat97.graphics.beginFill("#5e80ae").drawCircle(160,206,7);

//   stage.enableMouseOver();

//   seat97.on('mouseover', function(event) { 
//     seat97.graphics.beginFill("DeepSkyBlue").drawCircle(160, 206, 7);
//     stage.update(event);
//   });

//   seat97.on('mouseout', function(event) { 
//     seat97.graphics.beginFill("#5e80ae").drawCircle(160, 206, 7);
//     stage.update(event);
//   });

//   seat97.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/97/seat_photos/");
//     // alert("seat97 clicked");
//   });

//   stage.addChild(seat97);
//   stage.update();

// var seat98 = new createjs.Shape();

//   seat98.graphics.beginFill("#5e80ae").drawCircle(141,206,7);

//   stage.enableMouseOver();

//   seat98.on('mouseover', function(event) { 
//     seat98.graphics.beginFill("DeepSkyBlue").drawCircle(141, 206, 7);
//     stage.update(event);
//   });

//   seat98.on('mouseout', function(event) { 
//     seat98.graphics.beginFill("#5e80ae").drawCircle(141, 206, 7);
//     stage.update(event);
//   });

//   seat98.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/98/seat_photos/");
//     // alert("seat98 clicked");
//   });

//   stage.addChild(seat98);
//   stage.update();

// var seat99 = new createjs.Shape();

//   seat99.graphics.beginFill("#5e80ae").drawCircle(122,206,7);

//   stage.enableMouseOver();

//   seat99.on('mouseover', function(event) { 
//     seat99.graphics.beginFill("DeepSkyBlue").drawCircle(122, 206, 7);
//     stage.update(event);
//   });

//   seat99.on('mouseout', function(event) { 
//     seat99.graphics.beginFill("#5e80ae").drawCircle(122, 206, 7);
//     stage.update(event);
//   });

//   seat99.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/99/seat_photos/");
//     // alert("seat99 clicked");
//   });

//   stage.addChild(seat99);
//   stage.update();

// var seat100 = new createjs.Shape();

//   seat100.graphics.beginFill("#5e80ae").drawCircle(103,206,7);

//   stage.enableMouseOver();

//   seat100.on('mouseover', function(event) { 
//     seat100.graphics.beginFill("DeepSkyBlue").drawCircle(103, 206, 7);
//     stage.update(event);
//   });

//   seat100.on('mouseout', function(event) { 
//     seat100.graphics.beginFill("#5e80ae").drawCircle(103, 206, 7);
//     stage.update(event);
//   });

//   seat100.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/100/seat_photos/");
//     // alert("seat100 clicked");
//   });

//   stage.addChild(seat100);
//   stage.update();

// var seat101 = new createjs.Shape();

//   seat101.graphics.beginFill("#5e80ae").drawCircle(84,206,7);

//   stage.enableMouseOver();

//   seat101.on('mouseover', function(event) { 
//     seat101.graphics.beginFill("DeepSkyBlue").drawCircle(84, 206, 7);
//     stage.update(event);
//   });

//   seat101.on('mouseout', function(event) { 
//     seat101.graphics.beginFill("#5e80ae").drawCircle(84, 206, 7);
//     stage.update(event);
//   });

//   seat101.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/101/seat_photos/");
//     // alert("seat101 clicked");
//   });

//   stage.addChild(seat101);
//   stage.update();

// var seat102 = new createjs.Shape();

//   seat102.graphics.beginFill("#5e80ae").drawCircle(65,206,7);

//   stage.enableMouseOver();

//   seat102.on('mouseover', function(event) { 
//     seat102.graphics.beginFill("DeepSkyBlue").drawCircle(65, 206, 7);
//     stage.update(event);
//   });

//   seat102.on('mouseout', function(event) { 
//     seat102.graphics.beginFill("#5e80ae").drawCircle(65, 206, 7);
//     stage.update(event);
//   });

//   seat102.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/102/seat_photos/");
//     // alert("seat102 clicked");
//   });

//   stage.addChild(seat102);
//   stage.update();

// var seat103 = new createjs.Shape();

//   seat103.graphics.beginFill("#5e80ae").drawCircle(46,206,7);

//   stage.enableMouseOver();

//   seat103.on('mouseover', function(event) { 
//     seat103.graphics.beginFill("DeepSkyBlue").drawCircle(46, 206, 7);
//     stage.update(event);
//   });

//   seat103.on('mouseout', function(event) { 
//     seat103.graphics.beginFill("#5e80ae").drawCircle(46, 206, 7);
//     stage.update(event);
//   });

//   seat103.on('click', function(event) { 
//     window.open("http://localhost:3000/seats/103/seat_photos/");
//     // alert("seat103 clicked");
//   });

//   stage.addChild(seat103);
//   stage.update();

// var vBar = new createjs.Shape();
//   vBar.graphics.beginStroke("#000");
//   vBar.graphics.setStrokeStyle(2, "square");
//   vBar.graphics.drawRoundRect(10,228,186,151,10);
//   stage.addChild(vBar);
//   stage.update();

// var barText = new createjs.Text("Bar", "20px Helvetica", "#bbb");
//  barText.x = 82;
//  barText.y = 305;
//  barText.textBaseline = "alphabetic";
//  stage.addChild(barText);
//  stage.update();



// });





