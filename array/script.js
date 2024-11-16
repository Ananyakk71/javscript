/*console.log('one')
//document.getElementById("button").onclick = myFunction;

const a = [2,3,7,6,4,5];

a.forEach(function (arg) {
    console.log(arg);
});

console.log('two');


function myFunction(val) {
    console.log("Hello Me", val)
}

const values = [1,2,3,4,5,6,7];
values.forEach(function (val) {
    console.log("hello world",val);
});*/

const fn = function(val) {
    console.log("Hello World =", val);
}
const fn2 = (val) => {
    console.log("Hello world..", val);
    return 19;
}
fn(1);
fn2(2);

const fun = function(a, b) {
    return a * b
}
const fun2 = (a, b) =>  a + b;

const mul =fun(3, 4);
const add = fun2(2, 6);

console.log(add, mul);

const fun3 = a => a + 100;
add100 = fun3(3);
console.log(add100);

const fun4 = () => [1,2,3,4,5];
const val = fun4()
console.log(val);

const obj = {
    a: 1,
    b:2
};

const fn1 = () => ({
    a:1,
    b:2
});

const val1 = fn1()
console.log(val1);

const obj1 = {
    a: 100,
    b:200,
    myFun: function() {
        return a + this.b;
    }
}
console.log(obj.myFun());