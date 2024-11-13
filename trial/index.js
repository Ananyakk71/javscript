head = document.getElementById("head")
head.innerHTML = "My java script"

para =document.getElementById("para")
function myfunc() {
    para.innerHTML = "paragraph changed"
}

let x = 5;
let y = 2;
let z = x + y;
document.getElementById("sum").innerHTML = "The sum of x+y is: " + z;
let text1 = 20;
let text2 = 5;
let result = text1 < text2;
document.getElementById("text").innerHTML = "is 20 less than 5 " + result;

document.getElementById("pow").innerHTML = Math.pow(x,2);

let b = myFunction(4, 8);
document.getElementById("mul").innerHTML = b;
function myFunction(m, n) {
    return m * n;
}

const person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolorr: "blue"
};

document.getElementById("detail").innerHTML = person["firstname"] + " is " + person["age"] + " years old. ";

const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}

document.getElementById("fruit").innerHTML = text;

const personal = {
    name: "john",
    age: 30,
    city: "new york"
};
document.getElementById("person").innerHTML = JSON.stringify(person);

 function date() {
    document.getElementById('timedate').innerHTML=Date()
 }

 function replace() {
    let text = document.getElementById("visit").innerHTML;
    document.getElementById("visit").innerHTML =
    text.replace("Microsoft","W3Schools");
 }
 
 let textreplace = "I love cats. Cats are very easy to love. Cats are very popular."
 textreplace = textreplace.replaceAll("Cats","Dogs");
 textreplace = textreplace.replaceAll("cats","dogs")
 document.getElementById("replaceall").innerHTML = textreplace;



 /*let test = "abcdefghijklmnopqrstuvwxyz";
 console.log(test.length);

 var test = "Helloworld";
 console.log(test.toUpperCase());
 console.log(test.toLowerCase());
 console.log(test.charCodeAt(2));

 const name = "W3Schools";
 let letter = name.at(6);
 console.log(letter);

 let text = "Apple, Banana, Kiwi";
 console.log(text.substring(-4));
 let part = text.slice(7,13)
 console.log(part);

 let text = "hello";
 let result = text.repeat(20);
 console.log(result);
 
let text = "Please locate where 'locate' occurs!";
let indexs = text.search(/locate/);
console.log(indexs);
let index = text.lastIndexOf("locate",15);
console.log(index);

let text = "Hello world, welcome to the universe";
console.log(text.endsWith("universe"));

let x = 0.2 + 0.1;
console.log(x);

let x = "10";
let y = "20";
let z = x + y;
console.log(z);*/




