/*const data = "Manchester,London,Liverpool,Birmingham, Leeds, Carlisle";
const cities = data.split(",");
console.log(cities);
console.log(cities[0]);
console.log[cities.length - 1];

const commaSeparated = cities.join(",");
console.log(commaSeparated);

const dogName = ["Rocket", "flash", "bella", "slugger"];
console.log(dogName.toString());*/

const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
    eval(textarea.value);
  }