//const credits = 0
//if (credits){
//    console.log("lets play")
//} else {
//    console.log("sorry")
//}
//
//let currentViewers = ["may"]
//console.log(currentViewers[5])
console.log(Boolean(""))//false
console.log(Boolean("0"))//true
console.log(Boolean(100))//true
console.log(Boolean(null))//false
console.log(Boolean([0]))//true
console.log(Boolean(-0))//false
console.log(Boolean(0))//false

const player = "Ann"
const opponent = "Nick"
const game = "Ludo"

let points = 0
let haswon = false

points += 100
haswon = true

if (haswon){
    console.log(`${player} got ${points} points and won the ${game}  game!`)
} else {
    console.log(`The winner is ${opponent} ! ${player} lost the game"`)
}

let mycources = ["css", "ui", "clean code"]

function logItems(arr){
    for (let i=0; i < arr.length;i++){
        console.log(arr[i])
    }
}
logItems(mycources)

let data = [
    {
        player: "jane",
        score: 52
    },
    {
        player: "mark",
        score:41
    }
]
const janeBtn = document.getElementById("jane-btn")
janeBtn.addEventListener("click", function(){
    console.log(data[0].score)
})


function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are`
    const lastIndex = arr.length-1
    for (let i = 0; i < arr.length; i++){
        baseString += arr[i] + ","
    }
    return baseString
}
const sentence = generateSentence("heigh",["mount","K2"])
console.log(sentence)