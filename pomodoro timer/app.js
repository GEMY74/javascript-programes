// select the elements
var timeDiv = document.getElementById("timerDisplay");
var breakDiv = document.getElementById("breakDisplay");
var startBtn = document.getElementById("startTimer");
var breakBtn = document.getElementById("startBreak");
var resumeBtn = document.getElementById("resumeTimer");
var endBtn = document.getElementById("endTimer");

//declere variabls
var workSec = 0;
var breakSec = 0;
var interval = null;

// adding events to each btn
startBtn.addEventListener("click", startTimer);
breakBtn.addEventListener("click", startBreak);
resumeBtn.addEventListener("click", resume);
endBtn.addEventListener("click", end);

// the work timer function
function workTimer() {
  workSec++;

  var hrs = Math.floor(workSec / 3600);
  var mins = Math.floor((workSec - hrs * 3600) / 60);
  var secs = workSec % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  timeDiv.innerText = hrs + " : " + mins + " : " + secs;
}

// the break timer function
function breakTimer() {
  breakSec++;

  var hrs = Math.floor(breakSec / 3600);
  var mins = Math.floor((breakSec - hrs * 3600) / 60);
  var secs = breakSec % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  breakDiv.innerText = hrs + " : " + mins + " : " + secs;
}

function startTimer() {
  if (interval) return;
  interval = setInterval(workTimer, 1000);
}

function startBreak() {
  clearInterval(interval);
  interval = null;

  if (interval) return;
  intervalBreak = setInterval(breakTimer, 1000);
}

function resume() {
  clearInterval(intervalBreak);
  startTimer();
}

function end() {
   alert("your work hours is : " + timeDiv.innerText + " , your break hours is : " + breakDiv.innerText ) 
  clearInterval(interval);
  clearInterval(intervalBreak);
  workSec = 0;
  breakSec = 0;
  interval = null;

  timeDiv.innerText = "00" + " : " + "00" + " : " + "00";
  breakDiv.innerText = "00" + " : " + "00" + " : " + "00";
}
