let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    console.log(num); 
  }

  for (let char of "test") {
    console.log(char);
  }

  let str = '𝒳😂';
  for (let char of str) {
    console.log( char );
  }

/*let str = "hello";
let iterator = str [Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}*/

let arraylike = {
    0: "hello",
    1: "world",
    length: 2
};

//let arr = Array.from(arraylike);
console.log(arr.pop());

//let map = new Map();
map.set('1','str1'); //a string key
map.set(1, 'num1'); //a numeric key
map.set(true, 'bool1'); //a boolean key

console.log(map.get(1) ); 
console.log(map.get('1') );
console.log(map.size);

let john = { name: "john" };
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john));

let John = { name: "john" };
let Ben = { name: "ben" };

let visitsCountObj = {};

visitsCountObj[Ben] = 234;
visitsCountObj[John] = 123;

console.log( visitsCountObj["[object Object]"]);

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomato', 350],
  ['onion', 50]
]);

for (let vegetable of recipeMap.keys()) { //iterate over keys
  console.log(vegetable);
}

for (let amount of recipeMap.values()) { //iterates over values
  console.log(amount);
}

for (let entry of recipeMap) {
  console.log(entry);
}

let obj = {
  name: "John",
  age: 30
};

//let map = new Map(Object.entries(obj));
console.log( map.get('age'));

/*let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);*/

console.log(prices.orange);

//let set = new Set();

let jony = {name: "jony" };
let pete = {name: "pete" };
let mary = { name: "Mary" };

set.add(jony);
set.add(pete);
set.add(mary);
set.add(jony);
set.add(mary);

console.log(set.size); //it keeps only unique values

for (let user of set) {
  console.log(user.name)
}

let set = new Set (["orange", "apple", "banana"]);

for (let value of set) console.log(value);

set.forEach((value, valueAgain, set) => {
  console.log(value);
});

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

//let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );


var n = 2;
function square (num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

let map = new Map();
map.set("name", "john");

let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);

let message = [
  { text: "hello", from: "john"},
  { text: "how goes?", from: "john"},
  { text: "see you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(message[0]); //two messages have been read
readMessages.add(message[1]);

readMessages.add(message[0]); 
console.log("Read message 0: " +readMessages.has(message[0]));
message.shift();

let messages = [
  {text: "hello", from: "john"},
  {text: "how goes?", from: "john"},
  {text: "see you soon", from: "alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));

/*let user = {
  name: "john",
  age: 30
};

for (let value of Object.values(user)) { 
  console.log(value);
}*/

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(entry => [entry[0],entry[1] * 2])
);

console.log(doublePrices.orange);


function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  "john": 100,
  "pete": 300,
  "mary": 250
};

console.log(sumSalaries(salaries));

let user = {
  name: 'john',
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(user));

let arr = ["john", "smith"]
let [firstName, surname] = arr;
console.log(firstName);
console.log(surname);

/*let [firstName, surname] = "john smith".split(' ');
console.log(firstName); 
console.log(surname); */ 

//let [firstname, , title] = ["julius", "caesar", "consul", "of the Roman Republic"]
console.log(title);

let userid = {};
[userid.name, userid.surname] = "john smith".split(' ');
console.log(userid.name);
console.log(userid.surname);

let detail = {
  name: "john",
  age: 30
};

for (let [key, value] of Object.entries(detail)) {
  console.log(`${key}:${value}`);
}

let user1 = new Map();
user1.set("name", "john");

for (let [key, value] of user1) {
  console.log(`${key}:${value}`);
}

let guest = "jane";
let admin = "pete";

[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`);

/*let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
console.log(title);
console.log(width);
console.log(height);*/



let option = {
  title: "menu",
  width: 100,
  height: 200
};

let { title } = option;
console.log(title);

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["cakes","donut"],
  extra: true
};

let {
  size: {
    width,
    height
  },
  items: [item1,item2],
  title = "menu"
} = options;

console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);

