var HOURHAND = document.getElementById("hour");
var MINUTEHAND = document.getElementById("minute");
var SECONDHAND = document.getElementById("second");

var now = new Date();
var sec = now.getSeconds();
var min = now.getMinutes();
var hr = now.getHours();

function moveArms() {
  sec += 1;
  var deltaSec = (360 / 60) * sec;
  var deltaMin = (min * 60) / 360 + deltaSec / 60;
  //var deltaMin = deltaSec / 60;
  var deltaHr = deltaMin / 60;

  SECONDHAND.style.transform = `rotate(${deltaSec}deg)`;
  MINUTEHAND.style.transform = `rotate(${deltaMin}deg)`;
  HOURHAND.style.transform = `rotate(${deltaHr}deg)`;
}

setInterval(moveArms, 1000);
