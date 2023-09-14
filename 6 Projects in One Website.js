//PROJECT 1 JAVASCRIPT :
resultsE1 = document.getElementById("input")

function Calculate(number) {
   resultsE1.value += number
}
function check(){
    try {
        resultsE1.value = eval(resultsE1.value);
    } catch (error) {
        alert("Please enter correct value");
    }
}
function Clear(){
    resultsE1.value = "";
}
function Del(){
    resultsE1.value = resultsE1.value.slice(-1,0);
}
//PROJECT 2 JAVASCRIPT :
const HoursE1 = document.getElementById("Hours");
const MinutesE1 = document.getElementById("Minutes");
const SecondsE1 = document.getElementById("Seconds");
const ampmE1 = document.getElementById("AmPm");

function updateClock(){
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "AM"


    if(hours > 12){
        hours = hours - 12
        ampm = "PM"
    }
    
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    HoursE1.innerHTML = hours;
    MinutesE1.innerHTML = minutes;
    SecondsE1.innerHTML = seconds;

    setTimeout(updateClock,1000);


}
updateClock()

                