// Set variables
let time = 6540;
var interval;
let counter = 0;

var click = new Audio("sounds/click.mp3");
var bell = new Audio("sounds/bell.mp3");

console.log(time, seconds, minutes)

// Get DOM elements
var button = document.getElementById('button');
var body = document.getElementById('body');
var counterGUI = document.getElementById('counterGUI');
var title = document.getElementById('title');

counterGUI.innerHTML = `${counter}/4`   

function start() {
    interval = setInterval(timer, 10);
}

function pause() {
    counter++;
    console.log(counter);
    clearInterval(interval);

    button.style.backgroundColor = 'red';
    button.innerHTML = 'PAUSE';
    body.style.backgroundColor = 'lightcoral';
}

function go() {
    // change styling
    button.style.backgroundColor = 'green';
    button.innerHTML = 'FOCUS';
    body.style.backgroundColor = 'lightgreen';
}

function timer() {
    let seconds = time % 60;
    let minutes = Math.floor(time/60);

    go();
    
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('minutes').innerHTML = minutes;

    title.innerHTML = `🍅 ${minutes}:${seconds}`;
    
    console.log(`time:${time}s, minutes:${minutes}, seconds:${seconds}, counter:${counter}`);

    time--;

    // if (time < 0){
    //     pause();
    // }
}