
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")

const audio_goodluck = new Audio("sound_goodluck.mp3");
const audio_half = new Audio("sound_half.mp3");
const half_time = 4050000;
const audio_final = new Audio("sound_final.mp3");
const final_time = 7200000;
const audio_game_over = new Audio("sound_game_over.mp3");
const final_game_over = 8100000;

/**+
 * 
 * @param @type d number 
 * @returns 
 */
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    stopInterval();
    audio_goodluck.play();
    setTimeout(function(){
        audio_half.play();
    },half_time);
    setTimeout(function(){
        audio_final.play();
    },final_time);
    setTimeout(function(){
        audio_game_over.play();
    },final_game_over);
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 2;
    m.value = pad(15);
    s.value = pad(0);
    //stop the timer after pressing "reset"
    stopInterval();
    h.style.color = "white"
    m.style.color = "white"
    s.style.color = "white"
    p1.style.color = "white"
    p2.style.color = "white"
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = pad(0);
        m.value = pad(0);
        s.value = pad(0);
    } else if(s.value != 0){
        s.value--;
        if(s.value < 10){
            s.value = pad(s.value);
        }
        // pad(s);
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
        if(h.value == 0 && m.value <= 15){
            h.style.color = "red"
            m.style.color = "red"
            s.style.color = "red"
            p1.style.color = "red"
            p2.style.color = "red"
        }
        if(m.value < 10){
            m.value = pad(m.value);
        }
        if(s.value < 10){
            s.value = pad(s.value);
        }
        // pad(m);
    } else if(h.value != 0 && m.value == 0){
        m.value = 59;
        s.value = 59;
        h.value--;
        if(h.value == 0){
            h.style.color = "orange"
            m.style.color = "orange"
            s.style.color = "orange"
            p1.style.color = "orange"
            p2.style.color = "orange"
        }
        if(m.value < 10){
            m.value = pad(m.value);
        }
        if(s.value < 10){
            s.value = pad(s.value);
        }         
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}