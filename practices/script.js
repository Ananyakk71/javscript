document.getElementById("hello").innerHTML = myFunction(55);
function myFunction(a) {
    let power = 10;
    return;
    a * power;
}

const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("Hello");}, 3000);
});
myPromise.then(function(value) {
    document.getElementById("promise").innerHTML = value;
});

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

// let x = sum(4,9,16,25,29,100,66,77);
//document.getElementById("total").innerHTML = x;

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "king");
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "queen");
});

Promise.allSettled([myPromise1, myPromise2]).then((results) =>
results.forEach((x) => myDisplay(x.status)),
);

function myDisplay(some) {
    document.getElementById("demo").innerHTML += some;
}

function myfunc(x,y=10) {
    return x + y;
}
console.log(myfunc(5));

function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(2,4,8,6));

/*const details = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const detail1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(details.fullName.apply(detail1));*/

console.log(Math.min.apply(null,[1,2,3]));
console.log(Math.max.apply(Math, [2,5,7]));

const details = {
    firstName:"John",
    lastName:"Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName:"Hedge",
    lastName:"Nilsen"
}

let fullName = details.fullName.bind(member);
console.log(fullName());

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    get cnam() {
        return  this.carname;
    }
    set cnam(x) {
        this.carname = x;
    }
}

const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = myCar.cnam;

function myDisplayer(some) {
    document.getElementById("demo1").innerHTML = some;
}
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result = myCalculator(5,5);
myDisplayer(result);

/*function myDisplayer(some) {
    document.getElementById("demo1").innerHTML = some;
}
function myFirst() {
    myDisplayer("hello");
}
function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();
mySecond();*/

const myNumbers = [4,1,-20,-7,5,9,-6];
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
document.getElementById("demo2").innerHTML = posNumbers;

function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("time").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}

const x = document.forms["frml"];
let text = "";
for (let i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;

const element = document.getElementById("id01");
element.innerHTML = "New Heading";

function newDoc() {
    window.location.assign("https://www.w3schools.com")
  }

  function alertbox() {
    alert("I am an alert box");
  }

  function pressbtn() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("yourchoice").innerHTML = txt;
  }

function enter() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == " ") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello" + person + "! How are you today?";
    }
    document.getElementById("greeting").innerHTML = text;
}

let myVar = setInterval(myTimer, 1000);
function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

const y = document.getElementById("allow");

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        x.innerHTML = err;
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function ok() {
    let text;
    if (document.getElementById("id2").validity.rangeUnderflow){
        text = "value too small";
    } else {
        text = "input ok";
    }
    document.getElementById("num").innerHTML = text;
}

function myFunction() {
    window.history.go(-2);
}