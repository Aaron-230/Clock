setTimeout(ClockSync, 1000);
const MName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function ClockSync() {
  Clock = new Date();
  Y1 = Clock.getFullYear();
  M2 = Clock.getMonth();
  D1 = Clock.getDate();
  H1 = Clock.getHours();
  M1 = Clock.getMinutes();
  S1 = Clock.getSeconds();
  MonthName = MName[M2];
  document.getElementById('Printer').innerHTML =  H1 + " : " + M1 + " : " + S1;
  document.getElementById('Add').innerHTML =  D1 + " " + MonthName + " " + Y1;
  T = setTimeout(function(){ClockSync()}, 500);
}ClockSync;
