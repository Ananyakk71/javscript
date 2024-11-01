let username = prompt("your name", "ann");
let want = confirm("do you want some tea");
alert("visitor: "+ username);
alert("Tea wanted: ",want);

console.log( 1 == false);    

let age = prompt('your age', 18);
switch(age){
    case 18:
        alert("won't work"); // the result of prompt is a string, not a number
        break;
    case "18":
        alert("this work");
        break;
    default:
        alert("not equal");
}

function hello(name){
    let phrase = `Hello, ${name}!`;
    debugger; // the debugger sops here
   say(phrase);
}

for (let i = 0; i <5; i++){
    console.log("value,",i);
}

function pow(x, n){
    let result = 1;

    for (let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

let x = prompt ("x?", ''); 
let n = prompt("n?", '');
if (n <= 0){
    alert(`power ${n} is not supported, 
        please enter an integer number greater then zero`);
} else {
    alert( pow(x,n) );
}

function showPrimes(n){
    nextPrime:
    for (let i = 2; i < n; i++){
        for (let j = 2; j < i; j++){
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}
showPrimes(10);

function showPrimes(n){
    for (let i = 2; i < n; i++){
        if (!isPrime(i)) continue;
        console.log(i);
    }
    function isPrime(n){
        for (let i = 2; i < n; i++){
            if (n % i == 0) return false;
        }
        
        return true;
    }
}
showPrimes(10);

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

describe("pow", function() {
    function makeText(x) {
        let expected = x * x* x;
        it(`${x} in the power 3 is ${expected}`, function(){
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++){
        makeText(x);
    }
});

/*let use = {
    name: "john",
    age: 30
};
console.log(use.name);
console.log(use);
console.log(use.age);
delete use.age;
console.log(use);*/

let user = {};
user["likes birds"] = true;
console.log(user["likes birds"]);
delete user["likes birds"];
console.log(user);

let key = "likes birds";
user[key] = true;
console.log(user);

let fruit = prompt("which fruit to buy?", "apple");

let bag = {
    [fruit]: 5,
};
alert (bag.apple);

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}
let use = makeUser("jhon",23);
console.log(use.name); 
console.log("name" in use) // true, use.age exists

function makeUser(name, age) {
    return {
        name,
        age,
    };
}
//let use = makeUser("jhon",23);
console.log(use.name);

let obj = {
    for: 1,
    let: 2,
    return: 3,
    0: "test"
};
console.log(obj.for + obj.let + obj.return);
console.log( obj["0"]);

let obj = {};
obj._proto_ = 5;
console.log(obj._proto_);

let user = {};
console.log(user.noSuchProperty === undefined);

let obj = {
    test: undefined
};
console.log(obj.test);
console.log("test" in obj); // the property exist

let user = {
    name: "john",
    age: 30,
    isAdmin: true
};
 for (let key in user) {
    console.log( key);
    console.log(user[key]);
 }

let codes = {
    "49": "germany",
    "41": "switzerland",
    "44": "great Britain",
    "1": "USA"
};

for (let code in codes) {
    console.log( +code );
}

let user = {
    name: "john",
    surname: "smith"
};
user.age = 25;

for (let prop in user) {
    console.log(prop);
}

let user = {};
user.name = "john";
user.surname = "smith";
user.name = "pete";
delete user.name;

function isEmpty(obj){
    for (let key in obj) {
        return false;
    }
    return true;
}

let salaries = {
    john: 100,
    ann: 160,
    pete: 130
}
sum = salaries.john + salaries.ann + salaries.pete
console.log(sum);

let menu = {
    width: 200,
    height: 300,
    title: "my menu"
};

multipleNumeric(menu)

function multipleNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

let a = {};
let b = a;

console.log(a === b);

let user = {
    name: "john",
    age: 30
};

let clone = {};

for (let key in user) {
    clone[key] = user[key];
}
clone.name = "pete";
console.log(user.name);
console.log(clone.name);

let user = {
    name: "john"
};
let permission1 = {
    canView: true
};
let permission2 = {
    canEdit: true
};  // copies all properties from permission1 & 2 into user
Object.assign(user,permission1, permission2);
console.log(user.name);
console.log(user.canView);
console.log(user.canEdit);

let user = {
    name: "john"
};
Object.assign(user, {name: "pete"});
console.log(user.name);


let user = {
    name: "john",
    age: 30
};

let clone = Object.assign({}, user);
console.log(clone.name);

let user = {
    name: "john",
    sizes: {
        height: 182,
        width: 50
    }
};
console.log(user.sizes.height);
let clone = Object.assign({}, user);
console.log(user.sizes === clone.sizes );
console.log(clone.sizes.width);

let user = {};
user.me = user;

let clone = structuredClone(user);
console.log(clone.me === clone);

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

user = {
    sayHi: function() {
        console.log("hello");
    }
};

user = {
    sayHi() {
        console.log("hello")
    }
}

let user = {
    name: "john",
    age: 30,

    sayHi() {
        console.log(user.name);
    }
};
user.sayHi()

let admin = user;
user = null;
admin.sayHi();


let user = {
    name: "john",
    sizes: {
        height: 182,
        width: 50
    }
};
let clone = structuredClone(user)
console.log(user.sizes === clone.sizes); // false, different objects

user.sizes.width = 60;  //user and clone are totally unrelated
console.log(user.sizes.width);
console.log(clone.sizes.width);

let user = { name: "john"};
let admin = { name: "admin" };
function sayHi() {
    console.log(this.name);
}
user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
admin['f']();

let user = {
    first: "ilya",
    sayHi(){
        let arrow = () => console.log(this.first);
        arrow();
    }
};
user.sayHi();

function makeUser(){
    return {
        name: "john",
        ref() {
            return this;
        }
    };
}
let user = makeUser();
console.log(user.ref() .name);






