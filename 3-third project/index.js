const yearNumber = document.getElementById("year-name");
const monthName = document.getElementById("month-name");

const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");

const date = new Date();
monthName.innerText = date.toLocaleString('en', { month: "long" })
dayName.innerText = date.toLocaleString('en', { weekday: "long" })
dayNumber.innerText = date.getDate()
yearNumber.innerText = date.getFullYear()
