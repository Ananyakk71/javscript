function myFunction() {
    let voteable;
    let age = document.getElementById("age").value;
    if (isNaN(age)) {
        voteable = "input is not a number";
    } else {
     voteable = (age < 18) ? "Too young":"Old enough";
    }
    document.getElementById("demo").innerHTML = voteable + " to vote.";
}

let hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = 'good day';
} else {
    greeting = 'good eveing'
}
 document.getElementById("time").innerHTML = greeting


let time = new Date().getHours();
let greetings;

if (time < 10) {
    greetings = "good morning!";
} else if (time < 20) {
    greetings = "good day!";
} else {
    greetings = "good evening!";
}
document.getElementById('time1').innerHTML = greetings

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById('demo1').innerHTML = "today is " + day;

let text;
switch (new Date().getDay()) {
    default:
        text = "Looking forward to the weekend";
    case 6:
        text = "today is saturday";
        break;
    case 0:
        text = "today is sunday";
}
document.getElementById("demo").innerHTML =  text;

let x = "0";

switch(x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "no value found";
}
document.getElementById('demo2').innerHTML = text

const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

let text1 = "";
for (let i = 0; i < cars.length; i++) {
    text1 += cars[i];
}
console.log(text1);

