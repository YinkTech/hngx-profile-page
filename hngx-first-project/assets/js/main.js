const setDay = () => {
  const day = document.getElementById("day");
  const setDay = new Date();
  const dayOfWeek = setDay.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[dayOfWeek];
  day.textContent = "Today is " + dayName;
};

const getTime = () => {
  const setTime = document.getElementById("time");

  var startTime = Date.now();

  var interval = setInterval(function () {
    var elapsedTime = Date.now();
    setTime.innerHTML = elapsedTime;
  }, 100);
};
getTime();
setDay();
