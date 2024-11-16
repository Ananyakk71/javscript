

//var x = 7;
function getName() {
    console.log("hello")
}

getName();
console.log(x);
console.log(getName);

var x = 1;
a();
b();
console.log(x);
function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x=  100;
    console.log(x);
}

var a = 10;
function b() {
    var x = 10;
}

console.log(this.a);

const fruits = ["banana", "orange", "apple", "mango"];
console.log(fruits.reverse());
console.log(fruits);

const months = ["jan", "feb", "mar", "apr"];
const sorted = months.toSorted();
console.log(sorted);
const reverced = months.toReversed();
console.log(reverced);

/*const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());
points.sort(function (a, b) {
    return b - a
});
console.log(points);*/

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
    points.sort(function(){return 0.5 - Math.random()});
    document.getElementById("demo").innerHTML = points;
}

points.sort(function(a, b){
    return a-b
});
document.getElementById("num").innerHTML = points[5];

var a;
console.log(a);
a = 10;
console.log(a);
a = "hello"
console.log(a);

a = undefined;
console.log(a);

if(a === undefined) {
    console.log("a is undefined")
} else {
    console.log("not undefined")
}

function a() {
  var b = 10;
  c();
  function c() {
    
  }
}
a();
console.log(b);

const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatMap(x => [x, x*10]);
console.log(newArr);

let a = 10;
console.log(a);
var b = 100;


const cars = ["saab", "volvo", "bmw"];
console.log(cars[0]);
cars.push("audi")
console.log(cars);

var car = ["volvo", "bmw"];
var car = ["toyota", "bmw"];
car = ["volvo", "saab"];

const a = new Date(2018, 15, 24, 10, 33, 30);
console.log(a);

const b = new Date();
console.log(b.toString());

const c = new Date();
console.log(c.toISOString());
console.log(c.toUTCString());
console.log(c.toDateString());

