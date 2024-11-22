function myFunction(x,y) {
    if(y === undefined){
        y = 0;
    }
    return x * y;
}
console.log(myFunction(4));

let day;
switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 4:
        day ="thursday";
        break;
    default:
        day = "A day";
}
console.log(day);

//let x = 10;
let y = "10"
console.log(Boolean(x == y));

console.log(typeof obj !== "undefined" && obj !== null);

var numbers1 = [45,4,9,16,25];
var over18 = numbers1.filter(myFunction);
function myFunction(value) {
    return value > 18;
}
console.log(over18);
var numbers2 = numbers1.map(myfunction);
function myfunction(value) {
    return value * 2;
}
console.log(numbers2);

var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " +this.lastName;
    }
}

const member = {
    firstName: "Hedge",
}


let language = "Javascript";
//let text = "";
for (let x of language) {
    text += x + "<br>"
}
console.log(text);

let x = 5;
let z = Math.pow(x,2)
console.log(z);

let text = "5";
console.log(text.padEnd(4,"0"));
text = text.padStart(4,"0")
console.log(text);

const temp = [27,28,30,40,42,35,30];
let high = temp.findLast(x => x > 40)

console.log(high);

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}

const myFather = new person("john", "doe", 50, "blue");
const myMother = new person("sally", "rally", 48, "green");

console.log("my father " + myFather.nationality + "my mother is" + myMother.nationality);

console.log(Date());

setInterval(myTimer, 1000);




