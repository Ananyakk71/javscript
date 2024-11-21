/*const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let text = "";
for (const x of fruits.values()) {
    text += x + "<br>";
}

document.getElementById("foreach").innerHTML = text;
console.log(fruits.size);
console.log(fruits.delete("apples"));
console.log(fruits.size);
 fruits.clear();
console.log(fruits.size);
console.log(fruits.has("oranges"));*/

const fruits = [
    {name: "apples", quantity:300},
    {name: "bananas", quantity:500},
    {name: "oranges", quantity:200},
    {name: "kiwi", quantity:150}
];

function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  const result = Map.groupBy(fruits, myCallback);
  
  let text ="These fruits are Ok: <br>";
  for (let x of result.get("ok")) {
    text += x.name + " " + x.quantity + "<br>";
  }
  text += "<br>These fruits are low: <br>";
  for (let x of result.get("low")) {
    text += x.name + " " + x.quantity + "<br>";
  }
  document.getElementById("maps").innerHTML = text;
  
  console.log(result.get("ok"));


const time = new Date();
document.getElementById("date").innerHTML = "Date: " + (time instanceof Date);

let person = {
    firstname: "Navya",
    lastname: "doe",
    age:26,
    eyecolor: "blue"
};
console.log(typeof person);

console.log(Number("3.14"));
console.log(Number(Math.PI));

console.log(String("123"));
console.log(String(NaN));

console.log(("123").toString())

d = new Date();
console.log(d);

const Person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

let {firstName, lastName, country = "US"} = person;

document.getElementById("object").innerHTML =
firstName + " " + lastName + " " + country;

function myFunction() {
    let text = document.getElementById("string").innerHTML;
    document.getElementById("string").innerHTML = 
    text.replace("Hey","Hello");
}

function myfunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("test").value;
    try {
        if(x.trim()== "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "hight";
    }
    catch(err) {
        message.innerHTML = "input is 3 " + err;
    }
}

var x = 5;
var y = 7;

elem = document.getElementById("display");
elem.innerHTML = x + " " + y;

/*const detail = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("this").innerHTML = detail.fullName();*/

const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Benn",
    lastName: "Doe",
}

let k = person1.fullName.call(person2);
document.getElementById("this").innerHTML = k;

const person3 = {
    firstName:"Ann",
    lastName:"rose",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const member = {
    firstName: "Hedge",
    lastName: "Nilsen"
}

let fullName = person3.fullName.bind(member);
document.getElementById("bind").innerHTML = fullName();


class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("carAge").innerHTML=
"My car is " + myCar.age(year) + " years old.";



