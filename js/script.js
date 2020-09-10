var HOURHAND = document.getElementById("hour");
var MINUTEHAND = document.getElementById("minute");
var SECONDHAND = document.getElementById("second");

var now = new Date(),
  min = now.getMinutes(),
  sec = now.getSeconds(),
  hr = now.getHours(),
  degree = 360 / 60;

var deltaSec = degree * sec,
  deltaMin = degree * min + (sec / 60) * degree,
  deltaHr = degree * 5 * hr + (min / 60) * degree * 5;

function moveArms() {
  deltaSec += degree; // second arm moves extra 6/60 deg every sec
  deltaMin += degree / 60; // minute arm moves extra 6/60 deg every sec
  deltaHr += degree / 60 / 60; // hour arm moves extra 6/60/60 deg every sec

  SECONDHAND.style.transform = `rotate(${deltaSec}deg)`;
  MINUTEHAND.style.transform = `rotate(${deltaMin}deg)`;
  HOURHAND.style.transform = `rotate(${deltaHr}deg)`;
}

setInterval(moveArms, 1000);
