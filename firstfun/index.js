const welcomeEl = document.getElementById("welcome-el") 
function greetUser(greeting, name){
   welcomeEl.textContent = `${greeting},${name}`
}
greetUser("howdy", "Anna")

function add(num1, num2){
    return num1 + num2
}
console.log(add(3,4))

function getFirst(arr){
    return arr[1]
}
let firstcard = getFirst([10,2,5])
console.log(firstcard)
