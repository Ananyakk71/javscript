
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

