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



