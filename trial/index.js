//let func = (a, b) => a * b;
//document.getElementById("demo").innerHTML = func(4,5)

for (let elem of document.body.children) {
    alert(elem);
}


const demo = document.getElementById("demo")
const demo1 = document.getElementById("demo1")
const or = document.getElementById("or")
let func = (a, b) => a * b;
demo.innerHTML = func(4, 5)

function hello() {
    return "helloworld.com";
}

let x = 6;
let y = 3;
demo1.innerHTML = 
(x < 10 && y > 1) + "<br>" + (x < 10 && y < 1);

or.innerHTML =
(x === 5 || y === 5) + "<br>" +
(x === 6 || y === 5) + "<br>" +
(x === 6 || y === 3);

const elem = document.getElementById("elem");
elem.style.background = 'red';

let elements = document.querySelectorAll('ul > li:last-child');

for (let element of elements) {
    alert(element.innerHTML);
}

let inputs = table.getElementsByTagName('input');

for (let input of inputs) {
    alert( input.value + ': ' + input.checked)
}

