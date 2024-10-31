
/*var meat = true
console.log(meat)
console.log(7>9)
console.log(Boolean(7>3))
console.log(Boolean(""))


x=4
console.log(x)
console.log(x!= 8)

var myAge = 25;
if (myAge < 18 || myAge >30 || myAge === 25){ //logical operature
    console.log("comming")
} else {
    console.log("cool")
}

var age = 5;
while (age < 10){
    console.log("age is less than10")
    age++ ;
}
console.log("over10")

function getAvrge(a,b){
    var average = (a + b)/2; //local var
    console.log(average);
    return average;
}
var myResult = getAvrge(7,11) //global variable

function logResult(){
    console.log("the average is " + myResult + "inside the function");
}

logResult();

var a = 5;
var b = 5;
console.log(a + b)
console.log(typeof (a + b));

console.log(Math.round(7.865))
console.log(Math.ceil(7.865))
console.log(Math.max(4,6,8,7,9))
console.log(Math.PI)


var c = 6;
var d = 5;
if (isNaN(c)){ //not a number 
    console.log("that an even no.");
} else{
    console.log("meaning is" + (c*d));
}
if (!isNaN(c)){ //double neg.
    console.log("meaning is" + (c*d));
} 
var string = 'i\'m a "fun" string'
console.log(string.length)
console.log(string.indexOf("string"))

var string1 = "Abc";
var string2 = "Bcd";
console.log(string1 < string2);

var str = "hello, world";
console.log(str)
var str2 = str.slice(0,5)
console.log(str2)
var tags = "meat , ham , salami , pork , beef, chicken"
console.log(tags)
var array = tags.split(",");
console.log(array)

var myArray = []
myArray[0] = 25
console.log(myArray[0])
myArray[1]=35
console.log(myArray[1])
myArray[2] = true
console.log(myArray[2])
myArray[3] = "hello"
console.log(myArray[3])
console.log(myArray)


mycar.test();
console.log(mycar.maxspeed);
console.log(mycar.drive(50,3));

  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }

//var myDate =  new Date();
//console.log(myDate);
//
//var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
//console.log(myPastDate)

let myVariable;
myVariable = "bob"
myVariable = "steve"
console.log(myVariable)

let icecream = "chocolate";
if (icecream === "chocolate"){
    console.log("yay")
} else {
   console.log("Aww")
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")
function setUsername(){
    const myName = prompt("please enter your name");
    localStorage.setItem("name",myName)
    myHeading.textContent = `mozilla is cool, ${myName}`
}*/
alert("helloworld")

const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName(){
  const name = prompt("please enter your name");
  button.textContent = `Player 1: ${name}`;
}

function createParagraph(){
  const para = document.createElement("p");
  para.textContent = "You clicked the button";
  document.body.appendChild(para)
}
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

let randomNumber = Math.floor(Math.random()*100)+1; //math.random in b/w 0 & 1
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Previous guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "!!!GAME OVER!!!";
      lowOrHi.textContent = "";
      setGameOver();
    } else {
      lastResult.textContent = "Wrong!";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high!";
      }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
  }
  guessCount === 1
  guessSubmit.addEventListener("click", checkGuess);

  function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame)
  }

  function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas){
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 100) + 1
  }

  const fruits = ["apples","banana","cherries"]
  for (const fruit of fruits){
    console.log(fruits)
  }

const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas){
    resetPara.textContent = "";
}

guessField.focus();

guesses.style.backgroundColor = "yellow";
guesses.style.fontSize = "200%";
guesses.style.padding = "10px";
guesses.style.boxShadow = "3px 3px 6px black";

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;
buttonA.onclick = () => {
    buttonA.textContent = "try again";
    headingA.textContent = `${count} click so far`;
    count += 1;
}

var myname;
var myage;
myname = "annu"
function logname(){
    console.log(myname);
}
logname();
var myname

let dog = {name: "spot", breed: "Dalmatian"};
console.log(dog.name)

let mynumber = 500;
console.log(typeof mynumber);

const bird = { species: "kestrel"};
//console.log(bird.species);
bird.species = "Strated Caracara"
console.log(bird.species)

const myint = 5;
const myfloat = 6.667;
console.log(myint)

const decimal = 1.7838748748637872;
console.log(decimal)
const twodecimal = decimal.toFixed(2)
console.log(twodecimal);

let mynum = "74";
mynum += 3;
console.log(typeof mynum);

let x = 3;
let y = 4;
console.log(x=y)

const string = "the revolution will not be televised.";
console.log(string);

const name = "chris";
const one = "hello"
//const greeting = `${one},${name}`;
//console.log(greeting);

/*console.log(5+10*3);
const num1 = 10;
const num2 = 50;
console.log(9 * num1);
console.log(num1 ** 3);
console.log((num2 % 9) * num1);

let num3 = 6;
num3--;
console.log(num3);*/

const btn = document.getElementById("button_B");
function greet(){
    const name = prompt("what is your name");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you`;
}
btn.addEventListener("click",greet)

const song = "Fight the youth";
const score = 9;
const highestScore = 10;
const output = `I like the song$ {song}. I gave it a score of ${
    (score/highestScore)*100
}%`;
console.log(output);

const mystring = "123";
const myNum = Number(mystring);
console.log(myNum);
console.log(typeof mystring);

const browsertype = "mozilla";
console.log(browsertype.length);
console.log(browsertype[0]);
if (browsertype.includes("zilla")){
    console.log("found zilla");
} else {
    console.log("no zilla here!");
}

if (browsertype.startsWith("zilla")){
    console.log("foun zilla")
} else {
    console.log("no zilla")
}
if (browsertype.endsWith("zilla")){
    console.log("foun zilla")
} else {
    console.log("no zilla")
}
console.log(browsertype.slice(1,4));
console.log(browsertype.slice(2));
const updated = browsertype.replace("moz", "van");
console.log(updated);
console.log(browsertype)

const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers"));
console.log(tagline.indexOf("x"));

const first = tagline.indexOf("developers");
const second = tagline.indexOf("developers",first + 1);
console.log(first);
console.log(second);

const radData = "My NaMe is anN";
console.log(radData.toLocaleLowerCase());
console.log(radData.toLocaleUpperCase());

let quote = "to be or not to be";
quote = quote.replaceAll("be", "code");
console.log(quote);

/*const shopping = ["bread", "milk","cheese","hummus","noodles"];
console.log(shopping);
console.log(shopping.length);
console.log(shopping[0]);
shopping[0] = "tahini";
console.log(shopping);

const seq = [1,1,2,3,4,,6,8,13,18];
const random = ["tree",795,[0,1,2]];
console.log(random[2]);

const birds = ["parrot", "falcon", "owl"];
console.log(birds.indexOf("owl"));
console.log(birds.indexOf("rabbit"));

const cities = ["manchester", "liverpool"];
const removecity = cities.pop();
console.log(removecity);

cities.pop(); //remove the last item
console.log(cities);
cities.unshift("ebinbugh");//add item int start
console.log(cities);
const newlength = cities.push("Bristol")
console.log(cities);
console.log(newlength);
cities.push("cardiff");
console.log(cities);
cities.push("bradord","brighton");
console.log(cities);

const startbtn = document.getElementById("machine-btn")
const txt = document.getElementById("stop")
startbtn.addEventListener("click", updatebtn);

function updatebtn(){
  if (startbtn.textContent === "start machine"){
    startbtn.textContent = "stop machine";
    txt.textContent = "the machine has started";
  } else {
    startbtn.textContent = "start machine";
    txttextContent = "the machine is stopped";
  }
}

const newline = `one day you finally knew 
what you had to do, and began,`;
console.log(newline);
//instead we write
//const newline = `one day you finally knew \nwhat you had to do, and began,`;
console.log(newline);

const one = 'she said "i think so';
console.log(one);
const two = `she said "I'm not doing in there"`;
console.log(two);

const cities = ["Manchester", "Liverpool", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index != -1){
  cities.splice(index, 2);//removing the  2 item
}
console.log(cities);

const birds = ["parrot", "falcon", "owl"];
for (const bird of birds){
  console.log(bird);
}

function double(number){
  return number * 2;
}
const number = [5,2,7,6];
const doubled = number.map(double);
console.log(doubled);

function isLong(city){
  return city.length > 8;
}
const city = ["London", "Liverpool","Totnes", "Edinbugh"];
const longer = city.filter(isLong);
console.log(longer);

  