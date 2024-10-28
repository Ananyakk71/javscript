//let firstcard = getRandomCard()
//let secondcard = getRandomCard()
let cards = []
let sum = 0 
let hasblackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// create a fun,that always return 5
//console.log(cards)



function getRandomCard(){
    //return Math.floor(Math.random()*13) + 1
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}
function startgame(){
    isAlive = true
    let firstcard =getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    rendergame()
}
function rendergame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
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
    messageEl.textContent = message 
}
//function newcard(){
   // console.log("drow a new card from the deck")
   // let card = getRandomCard()
    // add a new card to sum variable
   // sum += card
    //cards.push(card)//push the card to the cards array
   // console.log(cards)
    //call startgame
   // rendergame()
//}
function newcard(){
    if (isAlive === true && hasblackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame()
    }
}


