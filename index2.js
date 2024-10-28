let errorParagraph=document.getElementById("error")
console.log(errorParagraph)
function purchase(){
    console.log("button clicked")
    errorParagraph.textContent="something went wrong"
}
//create 4fun
//call correct fun when user click
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById(sum-el)
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
