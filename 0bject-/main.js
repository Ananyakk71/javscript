
function sayHi() {
  alert("hi");
  sayHi.counter++;
}
sayHi.counter = 0;

sayHi();
sayHi();
alert(`called ${sayHi.counter} times`);


function getfunc() {
  let value = "test";
  let func = function() {alert(value);};
  return func;
}

getfunc()();

/*function printNumber(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }
  go();
  let timerId = setInterval(go, 1000);
}

printNumber(5, 10);*/

function slow(x) {
  alert(`called with ${x}`);
  return x;
}

function cahingDecorator(func) {
  let cahe = new Map();

  return function(x) {
    if (cahe.has(x)) {
      return cahe.get(x);
    }
     
    let result = func(x);

    cahe.set(x, result);
    return result;
  };
}

slow = cahingDecorator(slow);

alert( slow(1) );
alert( "again: " + slow(1) );

alert( slow(2) );
alert( "again: " + slow(2) );

/*let user = {
  firstName: "john",
  sayHi() {
      alert(`hello, ${this.firstName}!`);
  }
};

setTimeout(() => {
  user.sayHi();
}, 1000);

user = {
  sayHi() { alert("Another user in setTimeout")}
}

let user = {
  firstName: "john",
  sayHi() {
    alert(`hello, ${this.firstName}!`);
  }
};
let sayHi = user.sayHi.bind(user);

sayHi();
setTimeout(sayHi, 1000);

user = {
  sayHi() { alert("another user in setTimeout!");}
};*/

function askPassword(ok, fail) {
  let password = prompt("password?", '');
  if (password == "rockstar") ok();
  else fail();
}

/*let user = {
  name: 'john',

  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));*/

class User {
  name = prompt("Name, please?", "john");
}
let user = new User();
alert(user.name);

class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    alert(this.value);
  }
}
let button = new Button("hey");
setTimeout(button.click, 1000);

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
let clock = new Clock({template: 'h:m:s'});
clock.start();

function createCounter(n) {
  return function() {
      return n++;
  };
}
const counter = createCounter(5); 

console.log(counter());
console.log(counter());


function expect(val) {
  return {
      toBe: function(expected) {
          if (val === expected) {
              return true;
          } else {
              throw new Error("Not Equal");
          }
      },
      notToBe: function(expected) {
          if (val !== expected) {
              return true;
          } else {
              throw new Error("Equal");
          }
      }
  };
}
console.log(expect(5).toBe(5));       // Outputs: true
console.log(expect(5).notToBe(10));

function mul(a, b) {
  return a * b;
 
}
console.log(mul(110, 3));

function next(side1,side2) {
  return side1 + side2 - 1;
}
console.log(next(8, 10));

function cube(a) {
  return a ** 3;
}
console.log(cube(3));

function hello() {
  return {
    
  }
}

function add(num) {
  return num + 1
}
console.log(add(5));
console.log(add(10));

function getfirst(arr) {
 return arr[2];
}
console.log(getfirst([1,3,5]));

function remainder(a, b) {
  return a % b;
}
console.log(remainder(3, 4));
console.log(remainder(-9, 45));

function number(n) {
  if (n <= 0) {
    return true;
  } else {
    return false;
  }
};
console.log(number(-2));
console.log(number(0));

function game(a, b) {
  return a*2 + b*3;
}
console.log(game(38, 8));
console.log(game(7, 5));


function namestring(name) {
  let result = name + " edabit";
  return result;
}
console.log(namestring("ann"));


function numbers(a, b) {
  if (a + b < 100){
    return true;
  } else {
    return false;
  }
}
console.log(numbers(83,34));
console.log(numbers(22,15));

function footbal(wins,draws,losses) {
  return wins*3 + draws*1 + losses*0;
}
console.log(footbal(3,4,2));

