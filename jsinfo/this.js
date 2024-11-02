function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('How much to add?', 0);
    };
}
let accumulator = new Accumulator(1); //initial value 1
accumulator.read();
alert(accumulator.value);

let user = {};
alert( user?.address?.street ); 

let html = document.querySelector('elem')?.innerHTML;

let users = null;
alert( users?.address );
alert( users?.address.street );

let a = null;
let x = 0;
a?.sayHi(x++);
alert(x);

let userAdmin = {
    admin() {
        alert("I am admin");
    }
};
userAdmin.admin?.();

let key = "firstName";

let user1 = {
    firstName: "john"
};

let user2 = null;

alert( user1?.[key] );  //john
alert( user2?.[key] ); //undefined

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);

let use = {
    name: "john"
};
//let id = Symbol("id");
use[id] = 1;

console.log(use[id]); // we can access the data using the symbol as the key

let id = Symbol("id");
let userr= {
    name: "john",
    age: 30,
    [id]: 123
};

for (let key in userr)
    console.log(key);

console.log("direct: ", userr[id]);

let clone = Object.assign({}, userr);
console.log( clone[id])

let sym = Symbol.for("name"); //get symbol by name
let sym2 = Symbol.for("id");
console.log(Symbol.keyFor(sym)); // get name by symbol
console.log(Symbol.keyFor(sym2));

let globalsymbol = Symbol.for("name");
let localsymbol = Symbol("name");
console.log(Symbol.keyFor(globalsymbol));
console.log(Symbol.keyFor(localsymbol));
console.log(localsymbol.description);

/*let user = {
    name: "john",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};
console.log(user);
console.log(+user);
console.log(user + 500);*/

/*let user = {
    name: "john",
    money: 1000,

    toString(){  // for hint = "string"
        return this.name;
    },
    valueOf() {  //for hint = "number" or "default"
        return this.money;
    }
};*/
console.log(user)
console.log(+user);
console.log(user + 500);

let obj = {
    toString() {  //to strings handles all conversations in the absence of other methods
        return "2";
    }
};
console.log(obj + 2); 

let john = {
    name: "john",
    sayHi: function() {
        console.log("hi buddy!");
    }
};

john.sayHi();
console.log(john.name);

let str = "hello";
console.log(str.toUpperCase());

let n = 1.2589487897;
console.log(n.toFixed(2));

console.log(typeof 0);
console.log(typeof new Number(0));

//let str = "hello";
str.test = 5;
console.log(str.test);

console.log(7.3e9);
console.log(1e-6);
console.log(0xff)

let num = 255;

console.log(num.toString(16)); //hex
console.log(num.toString(2)); //bi

//let num = 1.234456;
console.log(Math.round(num * 100) / 100 );

//let num = 12.38;
console.log(num.toFixed(1));

//let num = 12.34;
console.log(num.toFixed(5));

console.log(1e500);

console.log(0.1 + 0.2 == 0.3);  
console.log(0.1 + 0.2);

console.log(0.1.toString(2));
console.log(0.2.toString(2));
console.log((0.1 + 0.2).toString(2));

console.log(0.1.toFixed(20));

let sum = 0.1 + 0.2;
console.log(sum.toFixed(2));
console.log( +sum.toFixed(2));

console.log( (0.1 * 10 + 0.2 * 10) / 10);
console.log( (0.28 * 100 + 0.14 * 100) / 100);

console.log( isNaN(NaN));
console.log(isNaN("str"));

console.log( isFinite("15"));

let Num = +prompt("enter a number", '');
alert( isFinite(Num));

console.log(Number.isFinite(2 / 0));

console.log(+"100px");

console.log(parseInt('100px'));

console.log(Math.floor( Math.random() * 100));

console.log(Math.min(3,5,3,-3,0));

console.log(Math.pow(2,10));

console.log(1.35.toFixed(1));
console.log(Math.round(6.35));
console.log(Math.floor(6.34));
















