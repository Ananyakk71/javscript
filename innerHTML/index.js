//const basePrice = 520
//const discount = 120
//let shippingCost = 12
//let shippingTime = "5-12 days"
//
//shippingCost = 15
//shippingTime = "7-14 days"
//
//const fullPrice = basePrice - discount + shippingCost
//console.log("total" + fullPrice + " "+ shippingTime)

// use .innerHTML to render a buy! button inside the div container
const container = document.getElementById("container")
container.innerHTML = "<button onlick ='buy()'>Buy!</button>"
//when clicked the button that says "thank you for buying!"
function buy(){
    container.innerHTML = "<p>Thank you for buying!</p>"
}

//template strings
const recipient = "james"
//create a new var,sender, and set its value to your name
const sender = "Per"
const email = `
Hey ${recipient}! 
How is it going? 
cheers ${sender}`
console.log(email)
//one template string broken in to multiple lines




