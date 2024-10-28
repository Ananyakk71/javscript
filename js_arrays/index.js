//let featuredposts = ["check netflix","code for my project","relaunched my portfolio"]
//console.log(featuredposts.length)//3
// create an array tht list your ie. experi,edu,licenses,skills
//console.log(featuredposts[2])
//let experience = ["ceo","frontend","peoplecounter"]
//console.log(experience[1])
let cards = [7,4]
//console.log("hello")
cards.push(6)
//console.log(cards)
let messages = ["how'it doing","thank you what about you", "all good"]
let newmessage = "same here"
messages.push(newmessage)
console.log(newmessage)
console.log(messages)
//counting in js

for (let count = 1; count<21; count += 1){
    console.log(count)
}

for(let i= 10; i<101; i += 10){
    console.log(i)
} //create a for loop

let cads = [7,3,9]
for (let i=0; i<cads.length;i++){
    console.log(cads[i])
}

let player1time = 102
let player2time = 107

function getFastestRaceTime(){
    if (player1time<player2time){
        console.log(player1time)
    } else if (player2time < player1time){
        console.log(player2time)
    } else {
        console.log(player1time)
    }
}
//let getFastestRace = getFastestRaceTime()
function gettotalRaceTime(){
    return player1time + player2time
}
let totalTime = gettotalRaceTime()
console.log(totalTime)

let hasCompletedCource = true
let givecertificate = true

if (hasCompletedCource === true ||givecertificate === true){
    generatecertificate()
   // if (givecertificate === true){
     //   generatecertificate()
    //}
}
function generatecertificate(){
    console.log("generaating certificate")
}

let hasSolvedChallenge = false
let hasHintsLeft = false
if (hasSolvedChallenge === false && hasHintsLeft ===false){
    showSolution()
}
function showSolution(){
    console.log("Showing the solution....")
}

let likesDocumentaries = true
let likeStrtups = true
if (likesDocumentaries === true || likeStrtups === true)
    recommendedMovie()
function recommendedMovie(){
    console.log("hey, chekout this new film we think you wil like")
}

let course = {
    title: "learn css",
    lessions: 16,
    creator:"per",
    length:63,
    level:2
}
console.log(course.creator)

