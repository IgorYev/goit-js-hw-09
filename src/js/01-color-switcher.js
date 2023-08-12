
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function startColorChange() {
    intervalId = setInterval(changeBackgroundColor, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopColorChange() {
    clearInterval(intervalId);

    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);