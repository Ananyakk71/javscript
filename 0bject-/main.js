alert("hello")
window.alert("hello")

var gVar = 5;
alert(window.gVar);

window.currentUser = {
    name: "john"
};

alert(currentUser.name);
alert(window.currentUser.name);

function ask(question, ...handlers) {
    let isyes = confirm(question);

    for(let handler of handlers) {
        if (handler.length == 0) {
            if (isyes) handler();
        } else {
            handler(isyes);
        }
    }
}

ask("question?", () => alert('you said yes'), result => alert(result));

function makeCounter() {
    function counter() {
        return counter.count++;
    };

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
counter.count = 10;
alert( counter() );
alert( counter() );

function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }

  alert( sum(1)(2) );
  alert( sum(5)(-1)(2))

  function getFunc() {
    let value = "test";

    let func = function() {alert(value);};

    return func;
  }

  getFunc()();

  function sayhi() {
    alert('hooo');
  }

  setTimeout(sayhi, 1000);

function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "hello", "john")


/*let timerId = setInterval(() => alert('tick'), 2000);
setTimeout(() => { clearInterval(timerId); alert('stop');}, 5000);*/



/*function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    },1000);
}

printNumbers(5, 10)

function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }

printNumbers(5, 10);*/

function printNumbers(from, to) {
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
printNumbers(5, 10);

let i = 0;

setTimeout(() => alert(i), 100);

for(let j = 0; j < 100000000; j++) {
    i++;
}

function slow(x) {

    alert(`Called with ${x}`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {  
        return cache.get(x); 
      }
  
      let result = func(x); 
  
      cache.set(x, result); 
      return result;
    };
  }
  
  slow = cachingDecorator(slow);

  alert( slow(1) ); 
  alert( "Again: " + slow(1) ); 
  
  alert( slow(2) ); 
  alert( "Again: " + slow(2) ); 



  