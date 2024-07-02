let millisecond = 0;
let sec = 0;
let minutes = 0;
let hours = 0;
// let [millisecond, sec , minutes,hours] = [0,0,0,0]
let handleInterval = null;
const stopWatchContainer = document.getElementById('timer-display');

function startWatch(){
    if(handleInterval !== null){
        clearInterval(handleInterval)
    }
    handleInterval = setInterval(displayTime,10);
};
function pauseWatch(){
    clearInterval(handleInterval);
};
function resetWatch(){
    clearInterval(handleInterval);
    millisecond = 0;
    sec = 0;
    minutes =0;
    hours = 0;
    // [millisecond, sec , minutes,hours] = [0,0,0,0]
    stopWatchContainer.innerHTML = " 00 : 00 : 00 : 000 ";
};
// main 
function displayTime(){
    millisecond+=10;
    if(millisecond === 1000){
        millisecond = 0;
        sec++;
        if(sec === 60){
            sec = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let ho = hours < 10? "0" + hours: hours;
    let mi = minutes < 10? "0"+ minutes: minutes;
    let se = sec < 10? "0" + sec : sec;
    let mil = 
                    millisecond<10? 
                    "00"+ millisecond:
                    millisecond<100? 
                    "0" + millisecond:
                    millisecond;
    // stopWatchContainer.innerHTML = `${hours} : ${minutes} : ${sec} : ${millisecond} `;
    stopWatchContainer.innerHTML = ho + ":" + mi + ":" + se + ":" + mil ;
}