$(document).ready(function() {
var movementStrength = 75;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#top-image").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 100;
          var newvalueY = height * pageY * -1 - 100;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});