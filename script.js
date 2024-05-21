const timer= document.getElementById('timer')

const startButton =document.getElementById('startButton')

const stopButton =document.getElementById('stopButton')

const resetButton =document.getElementById('resetButton')


let interval;
const timeleft = 1500;
function updateTimer() {
  let minutes = Math.floor( timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:
                       ${seconds.toString().padStart(2, "0")}`;
  timer.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => { timeLeft--;updateTimer();
      if (timeLeft === 0)
        { clearInterval(interval);
        alert("Time's up!");
        timeLeft = 1500;
        updateTimer();
      }
    }, 1000);
  }
function stopTimer() {
    clearInterval(interval);
  }
function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startButton.addEventListener('click',startTimer)
stopButton.addEventListener('click',stopTimer)
resetButton.addEventListener('click',resetTimer)