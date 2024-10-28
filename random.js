//let randomNumber = Math.random()
//console.log(randomNumber)//generates a random no. b/w 0 &1
let flooredNumber = Math.floor(3.4568)
console.log(flooredNumber)
let randomNumber = Math.floor(Math.random() * 6)

console.log(randomNumber)
function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}
console.log(rollDice())
