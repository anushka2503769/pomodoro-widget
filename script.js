let timer;
let timeLeft = 25 * 60; // 25 minutes converted into runtime seconds
let isRunning = false;
let isBreak = false;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const timerLabel = document.getElementById('timer-label');
const phraseDisplay = document.getElementById('renaissance-phrase');

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // Format numeric values cleanly with standard pad thresholds
  timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function toggleTimer() {
  if (isRunning) {
    // Pause execution states
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'START';
  } else {
    // Initialize counting process loops
    isRunning = true;
    startBtn.textContent = 'PAUSE';
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'START';
        switchSession();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isBreak = false;
  timeLeft = 25 * 60;
  startBtn.textContent = 'START';
  timerLabel.textContent = 'STUDY SESSION';
  phraseDisplay.textContent = '“Patience is the companion of wisdom.”';
  updateDisplay();
}

function switchSession() {
  if (!isBreak) {
    // Transition configuration rules into break mode states
    isBreak = true;
    timeLeft = 5 * 60; // 5 minute break period
    timerLabel.textContent = 'RESTING BREAK';
    phraseDisplay.textContent = '“Nature does not hurry, yet everything is accomplished.”';
  } else {
    // Return tracking configurations back into focused study intervals
    isBreak = false;
    timeLeft = 25 * 60;
    timerLabel.textContent = 'STUDY SESSION';
    phraseDisplay.textContent = '“Patience is the companion of wisdom.”';
  }
  updateDisplay();
}

// Anti-white flicker framework injection code block
(function() {
  function matchNotionTheme() {
    try {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.style.setProperty('background', isDark ? '#191919' : 'transparent', 'important');
      document.documentElement.style.setProperty('background', isDark ? '#191919' : 'transparent', 'important');
    } catch(e) {
      document.body.style.background = 'transparent';
    }
  }
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addListener(matchNotionTheme);
  }
  matchNotionTheme();
})();

// Set basic metric strings instantly on load sequence
updateDisplay();
