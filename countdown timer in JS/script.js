const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");

let countDown;
let totalSeconds = 3600;

const updateDisplay = () => {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  timer.textContent = `${String(hours).padStart(2, "0")}: ${String(
    minutes
  ).padStart(2, "0")}: ${String(seconds).padStart(2, "0")}`;
};

function startTimer() {
  countDown = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(countDown);
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(countDown);
}

function restartTimer() {
  clearInterval(countDown);
  totalSeconds = 3600;
  updateDisplay();
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
restart.addEventListener("click", restartTimer);

// update the display

updateDisplay();
