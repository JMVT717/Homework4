let startBttn = document.querySelector("#start-quiz");
var timeEl = document.querySelector(".timer-sec");
let box = document.querySelector(".quizBox1");
let box = document.querySelector(".quizBox2");
let box = document.querySelector(".quizBox3");
let box = document.querySelector(".quizBox4");
let box = document.querySelector(".quizBox5");
let option = document.querySelector(".option")

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
