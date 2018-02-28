$(document).ready(function(){ /* Er indhold på siden loadet ind før den går i gang med js dokumentet*/


/* Mouseover efect på fmenuen*/
      $(".fmenu").mouseover(function(){
          $(".facebookpost").animate({right:'0px'}, 200);
      });

      $(".fmenu").mouseleave(function(){
          $(".facebookpost").animate({right:'-600px'}, 1500);
      });
/* SLUT Mouseover efect på fmenuen*/



$(".biobox").mouseover(function(){
    $("#urtprofile").hide();
    $("#hexprofile").hide();
      $("#urtprofilered").show();
      $("#hexprofilered").show();

});


$(".biobox").mouseleave(function(){
    $("#urtprofile").show();
    $("#hexprofile").show();
      $("#urtprofilered").hide();
      $("#hexprofilered").hide();

});












/*return a DOM object
var video = document.getElementById('videoID'); //or
var video = $('#videoID').get(0); //or
var video = $('#videoID')[0];*/

//return a jQuery object
//var video = $('#myVideo');

//Play/Pause control clicked
/*$('#playbtn').on('click', function() {
  alert ("HELLO");
    if(video[0].paused) {
        video[0].play();
    }
    else {
        video[0].pause();
    }
    return false;
});


$('#playbtn').on('click', function() {
  //alert ("HELLO");
        video[0].play();
        $("#playbtn").toggleClass("hidden");
        $("#stop").toggleClass("hidden");
});
$('#stop').on('click', function() {
  //alert ("HELLO");
        video[0].pause();
        $("#stop").toggleClass("hidden");
        $("#playbtn").toggleClass("hidden");
 });
*/

}); /* SLUT Dokument ready function*/
