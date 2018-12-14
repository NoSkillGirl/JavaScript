function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  let t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function alarmSet(){
  let alarmTime = document.getElementById('alarm-time').value;
  let currentTime = document.getElementById('txt').innerHTML;
  if (alarmTime === currentTime){
    document.getElementById('ring-txt').innerHTML = "Your alarm is Ringing";
    setTimeout(function(){               
      document.getElementById("ring-txt").innerHTML = '';
    }, 30000);
  };
  let t = setTimeout(alarmSet, 500);
}
  
function onload(){               
  startTime();
  document.getElementById('alarm-time').value = "00:00:00";           //reset input box 
}
