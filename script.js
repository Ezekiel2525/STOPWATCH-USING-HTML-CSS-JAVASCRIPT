let showTime = document.getElementById('showtime');
let stopWatchBtn = document.getElementById('stopwatch');
let startWatchBtn = document.getElementById('startwatch');
let resetWatchBtn = document.getElementById('resetwatch');
let timer = null;

let [seconds, minutes, hours] = [0, 0, 0];

const stopWatchTime = () => {
    seconds += 1;
    if(seconds == 60){
        seconds = 0;
        minutes += 1;
    }if(minutes == 60){
        minutes = 0;
        hours += 1;
    }

    let secs = (seconds < 10 ? "0" : "") + seconds;
    let mins = (minutes < 10 ? "0" : "") + minutes;
    let hrs = (hours < 10 ? "0" : "") + hours;

    showTime.textContent = `${hrs} : ${mins} : ${secs}`;
}

const startWatch = () => {
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatchTime, 1000);
}

startWatchBtn.addEventListener('click', startWatch);

const stopWatch = () => {
    clearInterval(timer);
}

stopWatchBtn.addEventListener('click', stopWatch);


const resetWatch = () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    showTime.textContent = "00 : 00 : 00";
}

resetWatchBtn.addEventListener('click', resetWatch);