/*function x() {
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
console.log(z);
z();

function z() {
    var b = 900;
    function x() {
        var a= 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();*/

function x(){
    var i = 1;
    for(var i =1;i<=5; i++) {
        function close(x) {
            setInterval(function() {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
    console.log("hello")
}
x();

let map = new Map();

map.set('1', 'str1');
map.set(1, "num1");
map.set(true, 'bool1');

console.log(map.get('1'));
console.log(map.get(1));
console.log(map.get(true));

let john = {
    name: "john"
};
let countmap = new Map();
countmap.set(john, 123);
console.log(countmap.get(john));

let map1 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

console.log( map1.get('1') );

let set = new Set();

let John = { name: "john" };
let peter = { name: "peter"};
let mary = { name: "mary"};

set.add(John);
set.add(peter);
set.add(mary);
set.add(John);
set.add(mary);

console.log(set.size);

for (let user of set) {
    console.log(user.name);
}

