var HOURHAND = document.getElementById("hour");
var MINUTEHAND = document.getElementById("minute");
var SECONDHAND = document.getElementById("second");

var now = new Date();
var sec = now.getSeconds();
var min = now.getMinutes();
var hr = now.getHours();
var angle = 360 / 60;

function moveArms() {
  sec += 1;
  var deltaSec = angle * sec;
  var deltaMin = angle * min + (deltaSec / 60) * angle;
  var deltaHr = angle * 5 * hr + (deltaMin / 60) * angle * 5;

  SECONDHAND.style.transform = `rotate(${deltaSec}deg)`;
  MINUTEHAND.style.transform = `rotate(${deltaMin}deg)`;
  HOURHAND.style.transform = `rotate(${deltaHr}deg)`;
}

setInterval(moveArms, 1000);
