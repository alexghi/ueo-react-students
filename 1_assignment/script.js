const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

let stopwatchTimer;
let stopwatchRunning = false;

function startStopwatch(minutes) {
  if (stopwatchRunning) return;

  const duration = minutes * 60;
  let elapsed = 0;

  stopwatchRunning = true;
  startButton.disabled = true;

  stopwatchTimer = setInterval(() => {
    if (elapsed >= duration) {
      stopStopwatch();
      return;
    }

    const secondsAngle = (elapsed / duration) * 360;
    secondHand.style.transform = `rotate(${secondsAngle}deg)`;
    elapsed++;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchTimer);
  stopwatchRunning = false;
  startButton.disabled = false;
  secondHand.style.transform = "rotate(0deg)";
}

startButton.addEventListener("click", () => {
  stopStopwatch();
  startStopwatch(2); 
});

resetButton.addEventListener("click", () => {
  stopStopwatch();
  hourHand.style.transform = "rotate(0deg)";
  minuteHand.style.transform = "rotate(0deg)";
});
