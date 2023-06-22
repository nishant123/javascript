console.log("this is tutu 54.js");
const alarmSubmit = document.getElementById('alarmSubmit');
//add ana event linstner  to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

//function to set play the alarm ring tone 
function ringBell() {
    audio.play();

}


function setAlarm(e) {
    e.preventDefault();
    console.log('seeting alarm...');

    const alarm = document.getElementById('alarm');
    console.log(`setting alrm for ${alarmDate}...`);
    alarmDate = new Date(alarm.value);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm - now);

    if (timeToAlarm >= 0) {
        setTimeOut(() => {
            console.log("Ringing now");
            ringBell();
        }, timeToAlarm);
    }
}