/*console.log("=== requesting");

 getJson('https://jsonplaceholder.typicode.com/todos/1')
   .then((data) => {
   console.log(data);
   console.log('=== requesting 2');
   return getJson('https://jsonplaceholder.typicode.com/todos/2');
})

.then((data) => {
    console.log(data);
    console.log('=== requesting 3')
    return getJson('https://jsonplaceholder.typicode.com/todos/3')
})

.then((data) => {
    console.log(data);
})

.catch((err) => {
    console.log('ERROR:',err);
    return {};
});*/

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error")
    }
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);

const myPromise1 = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("Hello");}, 3000);
});
myPromise1.then(
    function(value) {
        document.getElementById("head").innerHTML = value;
    }
);

try{
    adddlert("welcome!");
}
catch(err) {
    document.getElementById("eror").innerHTML = err.message;
}


console.log('started');

let a, b, result;
try {
    console.log('on try');
    a = getVal1();
    b = getVal2();
    result = processValues(a, b);
}  finally {
    console.log('in finally')
}

console.log(result);

console.log('ended');

function getVal1() {
    return 12;
}

function getVal2() {
    console.log('inside get val2')
    throw 'my own eror';
    return 22;
}

function processValues(a, b) {
    return a + b;
}

function myFunction() {
    const message = document.getElementById("message");
    message.innerHTML = "";
    let x = document.getElementById("test").value;
    try { 
      if(x == "")  throw "is Empty";
      if(isNaN(x)) throw "not a number";
      if(x > 10)   throw "too high";
      if(x < 5)  throw "too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
  }






