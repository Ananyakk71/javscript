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



