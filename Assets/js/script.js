let startBttn = document.querySelector("#start-quiz");
var timeEl = document.querySelector(".timer-sec");
let box = document.querySelector(".quizBox");

// let optA = document.querySelector("#optionA");
// let optB = document.querySelector("#optionB");
// let optC = document.querySelector("#optionC");

// let answerChoice = [optionA, optionB, optionC];

// let nxtQue;


var secondsLeft = 180;



//start button
function start (){ 
    box.classList.add("show")
    setTime()
    startBttn.classList.add("none")
}
startBttn.addEventListener("click", start);

// Time function
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
