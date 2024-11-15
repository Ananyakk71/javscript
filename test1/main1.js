const name ="ann";
function greeting(){
    alert(`Hello ${name}: welcome to our company. `);
}

const body = document.body;
const panel = document.createElement("div");
panel.setAttribute("class", "msgbox");
body.appendChild(panel);

const msg = document.createElement("p");
msg.textContent = "this is a message box";
panel.appendChild(msg);

const closebtn = document.createElement("button");
closebtn.textContent = "x";
panel.appendChild(closebtn);

closebtn.addEventListener("click", () =>
panel.parentNode.removeChild(panel),
);

const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount ;
}
console.log(text);

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function() {
        return this.firstName + " " + this.lastName
    };
}
const myFather = new person("john", "Doe", 50, "blue");
console.log("my father is" + myFather.fullName());
const myMother = new person("sally", "rally", 48, "green");
console.log("my father is " + myFather.age + "." + " my mother is", + myMother.age + ".");

console.log((123).toString());
console.log((100+23).toString());

let x = 9.656;
console.log(x.toPrecision(1));

console.log(Number.isSafeInteger(123344435+98686));
console.log(Number.parseFloat("10.33"));

console.log(Number.EPSILON);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.POSITIVE_INFINITY);

console.log(2 / 0);
console.log(-1 / 0);

console.log(Number.NaN);

console.log(100 / "apple");

const cars = ["saab", "volvo", "bmw"];
console.log(cars[2]);

const fruit = ["banana", "orange", "apple", "mango"];
fruit[0] = "kiwi";
console.log(fruit);
delete fruit[0];
console.log(fruit);

const array1 = ["cecilie", "lone"];
const array2 = ["emil", "tobias", "linus"];
const array3 = ["robin", "morgan"];

const myChildren = array1.concat(array2, array3);
console.log(myChildren);



