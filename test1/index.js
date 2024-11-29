/*console.log("start");

setTimeout(function cb() {
  console.log("callback");
},0);*/
 /*function cb() {
  console.log("Callback");
 }

 setTimeout(cb, 0);

console.log("end");

/*let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000) {
  endDate = new Date().getTime()
}

console.log("while expires");*/


const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function(radius) {
  return 2 * Math.PI * radius;
};

const diameter = function(radius) {
  return 2 * radius;
};

Array.prototype.calculate =function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.map(area));

console.log(radius.calculate( area));

/*const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};*/




//console.log(calculate(radius, circumference));
//console.log(calculate(radius, diameter))



/*const calculateCircumference = function(radius){
const output = [];
for (let i = 0; i < radius.length; i++) {
   output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(calculateCircumference(radius));

const calculatDiameter = function(radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
console.log(calculatDiameter(radius))*/

/*const arr = [5, 1, 3, 2, 6];

//double = [10, 2, 6, 4 12]

//triple = [15, 3, 9, 6, 18]

//binary = ["101", "1", "11", "10", "110"]

/*function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

const output = arr.map((x) =>  x.toString(2));

console.log(output);*/

const arr = [5, 1, 3, 2, 6];

// filter odd values

function isOdd(x) {
  return x % 2;
}

const output = arr.filter(isOdd);
console.log(output);

function isEven(x) {
  return x % 2 === 0;
}

const Output = arr.filter(isEven);
console.log(Output);


const output2 = arr.filter((x) =>  x > 4);
console.log(output2);

//sum or max

function findSum (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));

const output3 = arr.reduce(function(acc, curr) {
  acc = acc + curr;
  return acc;
},0);
console.log(output3)

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));

const output4 = arr.reduce(function (max, curr){
 if (curr > max) {
  max = curr;
 }
 return max
},0)

console.log(output4)


const users = [
  { firstName: "akshay", lastName: "saini", age:26 },
  { firstName: "donald", lastName: "trump", age:75 },
  { firstName: "elon", lastName: "musk", age:50 },
  { firstName: "deepika", lastName: "padukone", age:26},
];


const output5 = users.map(x => x.firstName + x.lastName);
console.log(output5);



const output6 = users.reduce(function(acc, curr){
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc
},{})

console.log(output6);

const output7 = users.filter((x) => x.age<30).map((x) => x.firstName);
console.log(output7)

const person = {
  firstName : "john",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue",
  language : "english",
  get lang() {
    return this.language.toUpperCase();
  }
};

let text = Object.values(person);
document.getElementById("detail").innerHTML = person.lang;


let xhr = new XMLHttpRequest();
xhr.open(method, URL, [async, users, password])

xhr.onload = function() {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function() {
  alert('Network Error');
};

xhr.onprogress = function(event) {
  alert(`Received ${event.loaded} of ${event.total}`);
};



