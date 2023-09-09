var buttonColours = ["green","yellow","red","blue"];

var userClickedPattern = [];
var gamepattern = [];

var level = 0;
var started =  false;


$(document).keypress(function(){
    if(!started){
      $("#level-title").text("Level " + level);
      
      nextSequence();
      started = true;
    }
  });




$(".btn").click(function(){


    var userClickedColor = $(this).attr("id");

    userClickedPattern.push(userClickedColor);
    buttonAnimation(userClickedColor);
    playsound(userClickedColor);
    checkanswer(userClickedPattern.length-1);
    
})

function checkanswer(currentlevel){
    if (gamepattern[currentlevel] === userClickedPattern[currentlevel]){
        if (userClickedPattern.length === gamepattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
    
        } else {
            playsound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);

            startover();
        }

};

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomnextColor = buttonColours[Math.floor(Math.random()*4)];
    gamepattern.push(randomnextColor);
    playPattern(gamepattern,0)
};

function buttonAnimation(currentColour){

    $("#"+ currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+ currentColour ).removeClass("pressed");

    }, 100);


}

function playsound(currentColourname){
    var audio = new Audio("sounds/" + currentColourname + ".mp3");
    audio.play();

}

function startover(){

    level = 0;
    gamepattern =[];
    started = false;
}

function playPattern(pattern, index) {
    if (index < pattern.length) {
      setTimeout(function () {
        playsound(pattern[index]); // Play the sound for the current color
        buttonAnimation(pattern[index]); // Trigger the animation for the current color
        playPattern(pattern, index + 1); // Continue playing the next color
      }, 400); // Adjust the delay as needed (in milliseconds)
    }
  }