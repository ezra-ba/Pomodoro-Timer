// Set variables
let time;
let timeFocus = 1499;
let timePause = 300;
var interval;
let counter = 0;
let isTimeFocus = true;

var click = new Audio("sounds/click.mp3");
var bell = new Audio("sounds/bell.mp3");

// Get DOM elements
var button = document.getElementById('button');
var body = document.getElementById('body');
var counterGUI = document.getElementById('counterGUI');
var title = document.getElementById('title');

function start() {
    focus();
}

function pause() {
    bell.play();

    if(counter == 4){
        exit();
    } 

    document.getElementById(`checkbox${counter}`).checked = true;
    document.getElementById(`checkbox${counter}`).disabled = true;

    isTimeFocus = false;
    // change styling
    button.style.backgroundColor = 'red';
    button.innerHTML = 'PAUSE';
    body.style.backgroundColor = 'lightcoral';
    
    clearInterval(interval);

    timer(timePause);
}

function focus() {
console.log(`This is ${!4}`);

    click.play();

    counter++;
    
    counterGUI.innerHTML = `${counter}/4` 

    isTimeFocus = true;
    // change styling
    button.style.backgroundColor = 'green';
    button.innerHTML = 'FOCUS';
    body.style.backgroundColor = 'lightgreen';
   
    clearInterval(interval);

    timer(timeFocus);
}

function exit() {
    alert('exit');

    location.reload(); 

    clearInterval(interval);
    // change styling
    button.style.backgroundColor = 'yellow';
    button.innerHTML = 'FINISH';
    body.style.backgroundColor = 'lightgoldenrodyellow';
}

function timer(time) {

    interval = setInterval(function(){

        let seconds = time % 60;
        let minutes = Math.floor(time/60);

        document.getElementById('seconds').innerHTML = seconds;
        document.getElementById('minutes').innerHTML = minutes;

        title.innerHTML = `${minutes}:${seconds}`;
        
        // console.log(`time:${time}s, minutes:${minutes}, seconds:${seconds}, counter:${counter}`);

        time--;

        if (time < 0 && isTimeFocus == true){
            pause();
        } else if (time < 0 && isTimeFocus == false){
            focus();
        } 

    }, 1000); 
}