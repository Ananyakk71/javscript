const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x, x * 10]);
document.getElementById("map").innerHTML = newArr;

const fruit = ["banana", "orange", "apple", "mango"];
document.getElementById("fruit1").innerHTML = fruit;
fruit.sort();
document.getElementById("fruit3").innerHTML = fruit;
fruit.reverse();
document.getElementById("fruit4").innerHTML = fruit
fruit.splice(2, 0, "lemon", "kiwi");
document.getElementById("fruit2").innerHTML = fruit;



const temp = [27,28,30,40,42,35,30];
let high = temp.findLast(x => x > 40);
document.getElementById("array").innerHTML = "The last temperature over 40 was " + high;

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;  

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}
function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}