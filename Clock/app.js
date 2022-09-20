// selecting html elements
let hourLine = document.querySelector(".hour");
let minuteLine = document.querySelector(".minute");
let secondLine = document.querySelector(".second");
let dateDiv = document.querySelector(".date");

// day & month array
let days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thur",
  "Fri",
  "Sat",
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// function to get the current time
function setTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let day = time.getDay();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear()

  hourLine.style.transform = ` rotate(${setRotate(hours, 12)}deg)`;
  minuteLine.style.transform = `rotate(${setRotate(minutes, 60)}deg)`;
  secondLine.style.transform = ` rotate(${setRotate(seconds, 60)}deg)`;

  dateDiv.innerHTML = `${days[day]}, ${months[month]} ${date} ${year}`;
}

// function to set the rotation of each line
let setRotate = (time, num) => {
  return (time * 360) / num;
};

// call the function every time the page is load
setTime();

// call the function every 1second
setInterval(setTime, 1000);
