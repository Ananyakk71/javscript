//document.getElementById("count-el").innerText=5
//let first = 5
//let second=7
//let count=first+second
//console.log(count)
// create variable,my age, and set its value to your age
//let myage = 22
//console.log(myage)
//let points = 50
//console.log(points)
//points=points+50
//console.log(points)
//points = points-75
//console.log(points)
//function increment(){
//    console.log("the button was clicked")
//}
//go for a race
//function countdown(){
//    console.log(5)
//    console.log(4)
//    console.log(3)
//    console.log(2)
//    console.log(1) 
//}
//countdown()

//function mylogger(){
//    console.log(42)
//}
//mylogger()

//let lap1=34
//let lap2=33
//let lap3=36
//function loglaptime(){
//    let total=lap1+lap2+lap3
//    console.log(total)
//}
//loglaptime()
//
//let lapscompleted = 0
//create a fun 
//run it 3 times
//function incrementlap(){
//    lapscompleted=lapscompleted+1
//}
//incrementlap()
//incrementlap()
//incrementlap()
//console.log(lapscompleted)
//
//let countEL = document.getElementById("count-el")
//console.log(countEL)
//let count=0
//function increment(){
//    console.log("clicked")
//    count=count+1
//    countEL.innerText=count
//}
//create save button
//function save(){
//    console.log(count)
//}
//let username="per"
//let message="tou have 3 notifications"
//console.log(message + "," + username + "!")
//
//let age = 22
//let greeting="hi, my age is "
//let mygreeting=greeting + age
//console.log(mygreeting)
//console.log(4+5)
//console.log("2"+"4")
let saveEl=document.getElementById("save-el")
let countEL=document.getElementById("count-el")
let count=0

function increment(){
    count += 1
    countEL.innerText=count
}

function save(){
    let countstr = count + "-"
    //saveEl.innerText += countstr
    saveEl.textContent += countstr
    countEL.textContent = 0
    console.log(count)
 }

 let firstname = "ann"
 let lastname=" K K"
 let fullname=firstname + " "+lastname
 console.log(fullname)
let greeting = "hi,there"
function greetann(){
    console.log(greeting + "," + firstname + "!")
}
greetann()

