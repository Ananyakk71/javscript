/*function readNumber() {
    let num;

    do {
        num = prompt("enter a number please", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;
    return +num;
}
alert(`Read: ${readNumber()}`);*/

let num = prompt("enter a number please", 0);
alert(`read: ${num}`)

let i = 0;
while (i <11 ) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert(i);
}

function random(min, max) {
    return min + Math.random() * (max - min);
}
alert( random(1, 5));

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
alert(randomInteger(1, 3));

function sum(a, b){
    return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`);

let guestList = `Guests:\n* John\n* Pete\n* Mary`;
console.log(guestList)


console.log( str[str.length - 1]);
console.log( str.at(-1) ); //last character

for (let char of "hello") {
    console.log(char);
}

let str = 'hi';
str = 'h' + str[1];
console.log(str);

console.log('interface'.toUpperCase());
console.log('Interface'.toLowerCase());

let Str = 'widget with id';
console.log(Str.indexOf('widget'));
console.log(Str.indexOf('id'));
console.log(Str.indexOf('id', 2));
if (Str.indexOf("widget") != 1) {
    console.log("we found it");
}

let STR = 'As sly as a fox, as strong as an ox';
let target = 'as';

let pos = -1;
while((pos = STR.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
}

console.log("widget with id".includes("widget"));
console.log("hello".includes("bye"));
console.log("widget".startsWith("wid"));
console.log("widget".endsWith("get"));
console.log("widget".includes("i",1));

let stri = "stringify";
console.log(stri.slice(0,5));
console.log(stri.slice(2));
console.log(stri.slice(-4, -1));

console.log('a' > 'Z');

console.log("Z".codePointAt(0)); 
console.log("z".codePointAt(0));
console.log("z".codePointAt(0).toString(16)); //hexadecimal
console.log(String.fromCodePoint(90));
console.log(String.fromCodePoint(0x5a));

let write = '';
for (let i = 65; i <= 220; i++) {
    write += String.fromCodePoint(i);
}
console.log(write);

function ucFirst(str) {
    if (!str) return str;
      
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));

function checkSpam(str) {
    let lowStr = str.toLowerCase();

    return lowStr.includes('viagra') || lowStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

let fruits = ["apple", "orange", "plum"];
console.log(fruits[0]);
console.log(fruits[1]);
fruits[2] = 'pear';
console.log(fruits);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);

console.log(fruits)
console.log(fruits.pop());
console.log(fruits);

fruits.push("lemon");
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

fruits.unshift("grape");
console.log(fruits);

let arr = ['Apple', {name: 'john'}, true, function() {console.log('hello');}]
console.log(arr[1].name);

arr[3]();

let fruit = [];
fruit[99999] = 5;
fruit.age = 25;

let ar =  ["apple", "orange", "pear"];

for (let i = 0; i < ar.length; i++) {
    console.log(ar[i])
}

for (let fruit of ar) { //iterates over array elements
    console.log(fruit);
}

let fruit = [];
fruit[123] = "apple";
console.log(fruit.length);

let aray = [1,2,3,4,5];
aray.length = 5;
console.log(aray);

console.log(aray[3]);

let arr = new Array(2); //will it create an array of [2]
console.log( arr[0]);
console.log(arr.length);

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[0][1]);           
console.log(matrix);

let aray = [1,2,3];
console.log(aray);
console.log( [1] + 1);
console.log( [1,2] + 1);
console.log( "" + 1);
console.log( "1" + 1);
console.log("1,2" + 1);
console.log('0' == [] );

let fruits = ["apple", "pear", "orange"];
let shoppingcart = fruits;
shoppingcart.push("banana");
console.log(fruits.length);
console.log(fruits)

let styles = ["jazz", "blues"];
styles.push("rock-n-roll");
console.log(styles);
styles[Math.floor((styles.length - 1)/2)] = "classics";
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("rap","raggae");
console.log(styles);

let arr = ["a", "b"];
arr.push(function() {
    console.log(this );
});
arr[2]();




