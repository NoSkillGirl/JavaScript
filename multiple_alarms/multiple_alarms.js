function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
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
  let currentTime = document.getElementById('txt').innerHTML;
  let x = document.getElementById("alarm-div");
  let y = x.getElementsByClassName("alarm-time");
  for (let i = 0; i < y.length; i++) {
    alarmTime = y[i].value;
    if (alarmTime === currentTime){
      document.getElementById('ring-txt').innerHTML = "Your alarm is Ringing";
      setTimeout(function(){               
        document.getElementById("ring-txt").innerHTML = '';
      }, 30000);
    };
  }

  let t = setTimeout(alarmSet, 500);
}
  
function onload(){               
  startTime();
  let x = document.getElementById("alarm-div");
    let y = x.getElementsByClassName("alarm-time");
    
    for (let i = 0; i < y.length; i++) {
        y[i].value = "00:00:00";
    }
}
