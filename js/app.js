// grab all elements

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const sound = document.querySelector('.sound');
let timer = 0;
let interval;
let isRunning = false;

// Function
function startTimer() {
	if (isRunning) return;

	isRunning = true;
	interval = setInterval(setTimer, 1000);
}
function stopTimer() {
	if (!isRunning) return;
	isRunning = false;
	clearInterval(interval);
}
function resetTimer() {
	stopTimer();
	timer = 0;
	hours.innerHTML = '00';
	minutes.innerHTML = '00';
	seconds.innerHTML = '00';
}

function setTimer() {
	timer++;
	const numOfSecs = timer % 60;
	const numOfMins = Math.floor((timer % 3600) / 60);
	const numOfHours = Math.floor(timer / 3600);

	hours.innerHTML = pad(numOfHours);
	minutes.innerHTML = pad(numOfMins);
	seconds.innerHTML = pad(numOfSecs);

	sound.play();
}

function pad(num) {
	return num < 10 ? '0' + num : num;
}
// Add event listener
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
