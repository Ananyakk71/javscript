let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")
function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}
function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}
function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}
function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

const container = document.getElementById("buy")
container.innerHTML = "Buy"

const mytext = "the weather is cold";
const newstring = mytext.replace("cold", "warm")
console.log(newstring);

const colorbtn = document.getElementById("color");
function random(number){
    return Math.floor(Math.random() * (number + 1));
}

colorbtn.addEventListener("click", ()=> {
    const rndcol = `rgb(${random(255)} ${random(2555)} ${random(255)})`;
    document.body.style.backgroundColor = rndcol;
})

const textbox = document.querySelector("#textbox");
const output = document.querySelector("#output");
textbox.addEventListener("keydown", (event) => {
    output.textContent = `you pressed "${event.key}".`;
})

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.getElementById("para1");

form.addEventListener("submit", (e) => { //e or event
    if (fname.value === "" || lname.value === ""){
        e.preventDefault();
        para.textContent = "you need to fill in the both names"
    }
})


