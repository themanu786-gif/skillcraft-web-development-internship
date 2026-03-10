let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function updateDisplay(){
let h = String(hours).padStart(2,'0');
let m = String(minutes).padStart(2,'0');
let s = String(seconds).padStart(2,'0');

document.getElementById("time").innerText =
h + ":" + m + ":" + s;
}

function start(){

timer = setInterval(function(){

seconds++;

if(seconds == 60){
seconds = 0;
minutes++;
}

if(minutes == 60){
minutes = 0;
hours++;
}

updateDisplay();

},1000);

}

function stop(){
clearInterval(timer);
}

function reset(){

clearInterval(timer);

seconds = 0;
minutes = 0;
hours = 0;

updateDisplay();

}