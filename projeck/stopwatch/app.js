class Stopwatch {
  constructor(display) {
    this.display = display;
    this.startTime = null;
    this.elapsedTime = 0;
    this.timerId = null;
    this.running = false;
  }

  formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, '0');
    return ` ${hours}:${minutes}:${seconds}`
  }

    updateDisplay() {
      this.display.textContent = this.formatTime(this.elapsedTime);
    }

  start() {
    if (this.running) return;
    this.running = true;
    this.startTime = Date.now() - this.elapsedTime;
    this.timerId = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.updateDisplay()
    }, 100);
    document.getElementById('pause').style.display = 'block'
    document.getElementById('start').style.display = 'none'
  }

  stop() {
    if (!this.running) return;
    this.running = false;
    clearInterval(this.timerId);
    document.getElementById('start').style.display = 'block'
    document.getElementById('pause').style.display = 'none'
  }

  reset() {
    this.stop();
    this.elapsedTime = 0;
    this.updateDisplay();
  }

}

const display = document.getElementById('display');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

const stopWacth = new Stopwatch(display);
start.addEventListener("click", () => stopWacth.start());
pause.addEventListener("click", () => stopWacth.stop());
reset.addEventListener("click", () => stopWacth.reset());
