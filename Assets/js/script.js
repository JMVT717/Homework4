let startBttn = document.querySelector("#start-quiz");
var timeEl = document.querySelector(".timer-sec");

var secondsLeft = 180;

function start (){ //start button
    // startContainer.setAttribute("class", "hidden");
    setTime()

}
startBttn.addEventListener("click", start);

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }