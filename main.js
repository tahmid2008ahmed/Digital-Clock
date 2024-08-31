function updateClock() {
  let now = new Date();

  // Update time
  let time = now.toLocaleTimeString();
  let timeDiv = document.getElementById("time");
  timeDiv.textContent = time;

  // Update date
  let todayDate = now.toDateString();
  let dateDiv = document.getElementById("date");
  dateDiv.textContent = todayDate;

  setTimeout(updateClock, 1000);
}

updateClock();
