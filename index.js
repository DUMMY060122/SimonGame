var buttonColours = ["red","blue","green","yellow"];
var gamepattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;

  }




});


$(".btn").click(function(){

  var userchosencolour = $(this).attr("id");

  userClickedPattern.push(userchosencolour);
  playsound(userchosencolour);
  animatePress(userchosencolour);

})

function nextsequence(){

  userClickedPattern = [];
  
  level++;


  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour =  buttonColours[randomNumber];
  gamepattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playsound(randomChosenColour);
  
 

};


function playsound(name){


  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  

};

function animatePress(currentColour){

  $("#"+ currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
  

}

