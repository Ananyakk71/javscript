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

 let user = {
    name: "john",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
 };

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

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1,...arr2) );

let str = "hello";
console.log(Array.from(str));

let arr = [1,2,3];
let arrCopy = [...arr]; //put the list into new array
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));
console.log(arr === arrCopy);

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
  
  let counter = new Counter();
  
  console.log( counter.up() );  
  console.log( counter.up() ); 
  console.log( counter.down() );

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

