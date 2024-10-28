let firstcard = 10
let secondcard = 4
let cards = [firstcard, secondcard] //orderd list of items
let sum = firstcard + secondcard 
let hasblackjack = false
//console.log(sum)
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")//store message-el paragraph in a variable called messageEl
console.log(messageEl)
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("body")  use"body it will print another page
//let sumEl = document.querySelector(".sum-el") in th case of id= ;ues#sum-el , class= ; use .sum-el.
//create startgame function
//console.log(messageEl)
let cardsEl = document.getElementById("cards-el")
//create a new fun clled startgame() htat calls rendergame
function startgame(){
    rendergame()
}
function rendergame(){
    //cardsEl.textContent = "Cards: " + firstcard + " " + secondcard
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "sum: " + sum
    if (sum <= 20){
        message = "drow a new card"
    } else if (sum === 21){
        message = "you dot blackjack"
        hasblackjack = true
    } else {
        message = "out of the game"
        isAlive = false
    }
    messageEl.textContent = message //display the message using text content
}
function newcard(){
    console.log("drow a new card from the deck")
    let card = 8
    // add a new card to sum variable
    sum += card
    cards.push(card)//push the card to the cards array
    console.log(cards)
    //call startgame
    rendergame()
}
//let isAlive = true
//if (sum <= 20){
//    console.log("drow a new card")
//} else if (sum === 21){
//    console.log("you dot blackjack")
//    hasblackjack = true
//} else {
//    console.log("out of the game")
//    isAlive = false
//}
//console.log(hasblackjack)
//
//let age = 22
//if (age < 21){
//    console.log("cannot enter the club")
//} else {
//    console.log("welcome")
//}
//
//let Age =100
//if (Age < 100){
//    console.log("not eligible")
//} else if (Age===100){
//    console.log("birthdaycared from king")
//} else {
//    console.log("already gotten")
//}
//console.log(4 === 3)//false
//console.log(5>2)//true
//console.log(11<=11) //true

