/*let user = {
    name: "john",
    age: 30
};
function count(obj) {
    return Object.keys(obj).length;
}
console.log(count(user));

for (let value of Object.values(user)) {
    console.log(value);
}*/


let salaries = {
    "john": 100,
    "pete": 300,
    "mary": 250
};

function topSalaries(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}
console.log(topSalaries(salaries));

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary
    }

    return sum;
}
console.log(sumSalaries(salaries));

/*let user = new Map();
user.set("name", "john");
user.set("age", "30");

for (let [key, value] of user) {
    console.log(`${key}:${value}`);
}

let [name = "guest", surname = "anonymous"] = ["julius"];

console.log(name);
console.log(surname);*/

/*let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["cake", "donut"],
    extra: true
};

let {
    size: {
        width,
        height
    },
    items: [item1, item2],
    title = "menu"
} = options;

console.log(title);*/

let options = {
    title: "my menu",
    items: ["item1", "item2"]
};

function showMenu({
    title = "untitled",
    width: w = 200, 
    height: h = 100, 
    items: [item1, item2]
}) {
    console.log(`${title} ${w} ${h}`);
    console.log( item1 );
    console.log( item2 );
}


showMenu(options);

/*let user = {
    name: "john",
    year: 30
};

let {name, year: age, isAdmin = false} = user;

console.log( name );
console.log( age );
console.log( isAdmin );*/

let now = new Date();
console.log(now);

let jan01_1970 = new Date(0);
console.log(jan01_1970);

let jan02_1970 = new Date(24 * 3600 * 1000);
console.log(jan02_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

//let date = new Date("2027-01-26");
//console.log(date);

//let date = new Date(2011, 0, 1, 2, 3, 4, 567);
//console.log(date);

//let date = new Date();
console.log(date.getHours());
console.log(date.getUTCHours());

let today = new Date();
today.setHours(0);
console.log(today);

today.setHours(0, 0, 0, 0);
console.log(today);

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log( date );

/*let start = new Date();

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = new Date();

console.log(`The loop took ${end - start} ms`);*/

let start = Date.now();

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = Date.now();
console.log(`the loop took ${end - start} ms`);

function diffSubtract(date1, date2) {
    return date2 - date1;
}

function difGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}
let time1 = 0;
let time2 = 0;

for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(difGetTime);
}

console.log( 'time of diffSubtract: '  + time1);
console.log('time of diiGetTime: ' + time2);

let d1 = new Date(2012, 1,20, 3, 12);
console.log(d1);

let d2 = new Date("2012-02-20T03:12");
console.log(d2);

/*let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };*/
  
  console.log(user);

  let student = {
    name: 'john',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  let json = JSON.stringify(student);
  console.log(typeof json);
  console.log(json);

  console.log(JSON.stringify(1));

  console.log(JSON.stringify('test'));

  console.log(JSON.stringify(true));

  console.log(JSON.stringify([1,2,3]));

 /* let user = {
    sayHi() {
        console.log("hello");
    },
    [Symbol("id")]: 123,
    something: undefined
  };

  console.log(JSON.stringify(user));

  let meetup = {
    title: "conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

console.log( JSON.stringify(meetup));

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room 
  };
  
  room.occupiedBy = meetup; 
  
 console.log( JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
 }) );*/



 console.log(JSON.stringify(user, null, 2));

 /*let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
 };

 let meetup = {
    title: "conference",
    room
 };

 console.log( JSON.stringify(room) );
 console.log( JSON.stringify(meetup) );*/

let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log(numbers[1]);

//let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meet = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

console.log( meet.date.getDate() );

let room = {
    number: 23
};

let meetup = {
    title: "confernece",
    occupiedBy: [{name: "john"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log( pow(2,4) );    

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2,3));

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    } 
}

console.log( pow(2,3) );

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let company = {
    sales: [{name: 'john', salary: 1000}, {name: 'alice', salary: 1600}],
    development: {
        sites: [{name: 'peter', salary: 2000}, {name: 'alex', salary:1800}],
        internals: [{name: 'jack', salary: 1300}]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}
console.log(sumSalaries(company));

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log( sumTo(100) );

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) );

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) );

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log( fib(3));
console.log( fib(7) );


function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log( fib(3) );
console.log( fib(7) );
console.log( fib(77) );

function showName() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
}

showName("julius", "caesar");
showName("ilya");

console.log(Math.max(3,5,1));


let str = "hello";
console.log(Array.from(str));

arr.push(4);
console.log(arr);
console.log(arrCopy);

let obj = { a: 1, b:2, c:3 };
let objCopy = {...obj};

console.log(JSON.stringify(obj) === JSON.stringify(objCopy));
console.log(obj === objCopy);

obj.d = 4;
console.log(JSON.stringify(obj));
console.log(JSON.stringify(objCopy));

{
    let message = "hello";
    console.log(message);
}

{
    let message = "goodbye";
    console.log(message);
}

if (true) {
    let phrase = "hello";
    console.log(phrase);
}

for (let i = 0; i < 3; i++) {
    console.log(i);
}
 
function sayBye(firstName, lastName) {
    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log("hello, " + getFullName());
    console.log("bye " + getFullName());
}

let name = "john";

function sayHi() {
    console.log("Hi, " + name);
}

name = "pete";

sayHi();

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

//let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() );
console.log( counter() );
console.log( counter2() );
console.log( counter2() );

function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }

let phrase = "hello";

if (true) {
    let user = "john";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi();

function sum(a) {
    return function(b) {
        return a + b;
    };
}

console.log( sum(1)(2) );
console.log( sum(5)(-1) );

let x = 1;
function func() {
    console.log(x);
}
func();

function makeArmy() {
    let shooters = [];

    for(let i =0; i < 10; i++) {
        let shooter = function() {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();

if (true) {
    var test = true;
}

console.log(test)

function sayHi() {
        var phrase;
        console.log(phrase);
}
sayHi();

let sayHi = function func(who) {
    if (who) {
        console.log(`hello, ${who}`);
    } else {
        func("guest");
    }
};

let welcome = sayHi;
sayHi = null;
welcome();

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

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

console.log( sum(1)(2) );
console.log( sum(5)(-1)(2) );
console.log( sum(6)(-1)(-2)(-3) );

let sum = new Function('a', 'b', 'return a + b');
console.log( sum(1, 2) );

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(100));

function factorial(n) {
    return (n != 1) ? n *factorial(n - 1) : 1;
}

console.log(factorial(4));

let arr1 = [3,5,1];
let arr2 = [8, 3, -8]
console.log(Math.max(...arr1,...arr2));

let arr = [1,2,3];
let arrCopy = [...arr];

console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));
console.log(arr === arrCopy);

let counter = makeCounter();

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

if (true) {
    var test = true;
}

console.log(test);

function sayHi() {
    phrase = "hello"
    console.log(phrase);
    var phrase;
}
sayHi();


/*let user = {
    firstName: "john"
  };
  function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
  }
  let funcUser = func.bind(user);
  funcUser("hello");

  let user = {
    firstName: "john",
    sayHi() {
      console.log(`hello, ${this.firstName}!`);
    }
  };
  let sayHi = user.sayHi.bind(user);
  
  sayHi();
  setTimeout(sayHi, 1000);
  
  user = {
    sayHi() { console.log("another user in setTimeout!");}
  };  */

function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2); //fixed 2 as first argument

console.log( double(3) );
console.log( double(5) );

function f() {
    console.log(this.name);
}

f = f.bind( {name: "john"}).bind( {name: "ann" });
f();


function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "john"
});

console.log( bound.test );

let group = {
    title: "our group",
    students: ["john", "pete", "alice"],

    showList() {
        this.students.forEach(function(student) {
          console.log(this.title + ': ' + student)
    });
    }
};

group.showList();

function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }
  
  function sayHi(who) {
    console.log('Hello, ' + who);
  }
  
  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John");

  let user = {
    name: "john"
  };
 Object.defineProperty(user, "name", {
   writable: false
 });
let des = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(des, null, 2));

let user = {
    name: "john",
    toString() {
        return this.name;
    }
};

Object.defineProperty(user, "toString", {
    enumerable: false
});
for (let key in user) console.log(key);
console.log(Object.keys(user));

let descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(JSON.stringify(descripter, null, 2));

Object.defineProperties(user, {
    name: { value: "john", writable: false },
    surname: { value: "smith", writable: false },
});

let user = {
    name: "john",
    surname: "smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

set fullName(value) {
    [this.name, this.surname] = value.split(" ");
}
};
user.fullName = "Alice cooper";
console.log(user.name);
console.log(user.surname);

let user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("name is too short, need at least 4 character");
            return;
        }
        this._name = value;
    }
};

user.name = "pete";
console.log(user.name);

function User(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let john = new User("John", 25);
  
 console.log( john.age );

  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }
  let john1 = new User("john", new Date(1992,6,1));
  console.log(john1.birthday);

  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
  }

  let john2 = new User("john", new Date(1992,6,1));

  console.log(john2.birthday);
  console.log(john2.age);

/*let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;
console.log(rabbit.eats);
console.log(rabbit.jumps);*/

let user = {
    name: "john",
    surname: "smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);
console.log(user.fullName);

let animal = {
    jumps: null
};
/*let rabbit = {
    jumps: true,
    __proto__: animal
};
console.log(rabbit.jumps);
delete rabbit.jumps;
console.log(rabbit.jumps);
delete animal.jumps;
console.log(rabbit.jumps);

for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnOroperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`);
    } else {
        console.log(`inherited: ${prop}`);
    }
}
*/
let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pocket = {
    money: 2000,
    __proto__: bed
};

console.log(pocket.pen);
console.log(bed.glasses);
console.log(table.money);

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};
let speedy = {
    __proto__: hamster,
    stomach: []
};
let lazy = {
    __proto__: hamster,
    stomach: []
};
speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);

class User {
    constructor(name) { this.name = name; }
    sayHi() { console.log(this.name); }
}
console.log(typeof User);
console.log(User == User.prototype.constructor);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyDescriptor(User.prototype));

class User {
    name = "ann";    
}
let user = new User();
console.log(user.name);
console.log(User.prototype.name);

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
     stop() {
        super.stop();
        this.hide();
     }
}
let rabbit = new Rabbit("white Rabbit");
rabbit.run(5);
rabbit.stop();

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
        .replace('s', secs)
    }
}


