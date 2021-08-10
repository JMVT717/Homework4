let startBttn = document.querySelector("#start-quiz");
var timeEl = document.querySelector(".timer-sec");
let box = document.querySelector(".quizBox");
let option = document.querySelector(".options")

var secondsLeft = 180;

function start (){ //start button
    box.classList.add("show")
    setTime()

}
startBttn.addEventListener("click", start);

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        
        sendMessage();
      }
  
    }, 1000);
  }

function answer () {

}