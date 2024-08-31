let date = new Date();
// setting time
let time = date.toLocaleTimeString();
// console.log(time);

let timeDiv = document.getElementById("time");
timeDiv.textContent = time;

// setting Date
let todayDate = date.toDateString();
// console.log(todayDate);

let dateDiv = document.getElementById("date");
dateDiv.textContent = todayDate;
