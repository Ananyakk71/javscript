//let player = {
//    name: "per",
//    chips: 200,
//    sayHello: function(){
//        console.log("heisann")
//    }

//console.log()
//player.sayHello()
//let cards = []
//let sum = 0 
//let hasblackjack = false
//let isAlive = false
//let message = ""
//let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
//let cardsEl = document.getElementById("cards-el")
//let playerEl = document.getElementById(player-el)
//playerEl.textContent = player.name + ": $" + player.chips

//function getRandomCard(){
//    let randomNumber = Math.floor(Math.random()*13)+1
//    if (randomNumber > 10){
//        return 10
//    } else if (randomNumber === 1){
//        return 11
//    } else {
//        return randomNumber
//    }
//}
//function startgame(){
//    isAlive = true
//    let firstcard =getRandomCard()
//    let secondcard = getRandomCard()
//    cards = [firstcard, secondcard]
//    sum = firstcard + secondcard
//    rendergame()
//}
//function rendergame(){
//    cardsEl.textContent = "Cards: "
//    for (let i = 0; i < cards.length; i++){
//        cardsEl.textContent += cards[i] + " "
//    }
//    sumEl.textContent = "sum: " + sum
//    if (sum <= 20){
//        message = "drow a new card"
//    } else if (sum === 21){
//        message = "you dot blackjack"
//        hasblackjack = true
//    } else {
//        message = "out of the game"
//        isAlive = false
//    }
//    messageEl.textContent = message 
//}
let person = {
    name: "ann",
    age:22,
    country: "India"
}
function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
logData()

let age = 22
if (age <6){
    console.log("free")
} else if (age<18){
    console.log("child discount")
} else if (age <27){
    console.log("student dis")
} else if (age<66){
    console.log("fullprize")
} else {
    console.log("senior dis")
}

let largCountries = ["china", "India", "USA", "Indonesia", "Pakistan"]
console.log("5largest countries")
for (let i=0; i <largCountries.length; i++){
    console.log("-"+ largCountries[i])
}


let largcountries = ["Tuvalu","India", "USA", "Indonesia", "Monaco"]//fix up larg countries
largcountries.pop()
largcountries.push("Pakistan")// China and pakistan added into thir respective places
largcountries.shift()
largcountries.unshift("china")
console.log(largcountries)

let dayofmonth = 31
let weekday = "friday"
if (dayofmonth === 13 && weekday === "friday"){
    console.log("spooky face")
}

let hands = ["rock", "paper", "scissor"]
function getHand(){
    let randomindex =Math.floor(Math.random()*3)
    return hands[randomindex]
}
console.log(getHand())

//let fruit = ["a","o","a","a","o"]
//let appleshelf = document.getElementById("apple-shelf")
//let orrangeshelf=document.getElementById("orange-shelf")
//function sort(){
//    for (let i=0; i<fruit.length; i++){
//        if (fruit[i] === "a"){
//            appleshelf.textContent += "a"
//        } else if (fruit[i] === "o"){
//            orrangeshelf.textContent += "o"
//        }
//    }
//}
//sort()
    let myLeads = []
    const inputEl = document.getElementById("input-el")
    const inputBtn = document.getElementById("input-btn")
       ////grab unordered list and store it in a const var clled ulEl
    const ulEl = document.getElementById("ul-el")
       ////save a keyvalue pair in localstorage
       //// refresh the page. get the value and log it to the console. clear localstorage
       //
       ////localStorage.setItem("myName","anna")
    const deleteBtn = document.getElementById("delete-btn")
    const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
    const tabBtn = document.getElementById("tab-btn")

    if (leadsFromLocalStorage){
     myLeads = leadsFromLocalStorage
     render(myLeads)
    }

    const tabs = [
        {url: "https://www.linkedin.com/in/per-harald-borgen/"}
    ]
    tabBtn.addEventListener("click", function(){
        chrome.tabs.query({active: true, currentwindow: true}, function(tabs){
            let activeTab = tabs[0]
            let activeTabId = activeTab.idpp
        })
        //save the url instead of logging it out
        //console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    function render(leads){
     let listItems = ""
     for (let i = 0; i < leads.length; i++){
        // listItems +="<li>" + myLeads[i] + "</li>"
         listItems += `
            <li>
               <a target='_blank' href='${myLeads[i]}'> 
                ${leads[i]}
                </a>
            </li>`
        }
        ulEl.innerHTML = listItems
    }
    deleteBtn.addEventListener("dblclick",function(){
     console.log("double clicked!")
     localStorage.clear()
     myLeads = []
     render(myLeads)
    })

//let name = localStorage.getItem("myName")
//console.log(name)

//localStorage.clear() 

          // //localy stored array
          // //turn myleads string into an array 
          // let myLeads = `["www.awesom.com]`
          // myLeads = JSON.parse(myLeads)//push new value to the array
          // myLeads.push(www.lead.com)//turn the array into string
          // myLeads = JSON.stringify(myLeads)
          // console.log(typeof myLeads)

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})

//for (let i = 0; i < myLeads.length; i++){
   //ulEl.innerHTML +="<li>" + myLeads[i] + "</li>" //diff method
  //create element, set text content, append to ul
           //const li = document.createElement("li")
           //li.textContent = myLeads[i]
           //ulEl.append(li)
//}
//create a render function


