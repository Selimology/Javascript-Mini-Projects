const birthday = "Sept 17, 2022 12:00:00 GMT-4";
const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minutesE = document.getElementById("minutes");
const secondsE = document.getElementById("seconds");

function birthdayCountdown() {
  const myBirthDate = new Date(birthday).getTime();
  const currentDate = new Date().getTime();

  const totalseconds = (myBirthDate - currentDate) / 1000; // result given in millisecond, converted to seconds
  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  daysE.innerHTML = days;
  hoursE.innerHTML = addZeroFormatter(hours);
  minutesE.innerHTML = addZeroFormatter(minutes);
  secondsE.innerHTML = addZeroFormatter(seconds);
}

function addZeroFormatter(time) {
  return time < 10 ? `0${time}` : time;
}
birthdayCountdown();
setInterval(birthdayCountdown, 1000);
