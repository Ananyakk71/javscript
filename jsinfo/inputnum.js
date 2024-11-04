function sumInput() {
    let numbers = [];
    while (true){
    let value = prompt("A number please?", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(sumInput());

//let arr = ["i", "go", "home"];
console.log(arr);
delete arr[1];
console.log(arr[1]);
console.log(arr.length);

//let arr = ["i", "study", "javascript", "right", "now"]
arr.splice(1, 1);  //from index1 remove 1 element
console.log(arr);
arr.splice(0,3,"let's", "dance") //remove 3 first elements and replae them with another
console.log(arr);

let a = [1,2,5];
a.splice(2,0,3,4);
console.log(a);

let b = [1, 2];
console.log( b.concat([3, 4]));
console.log(b.concat([3,4], [5,6]));
console.log(b.concat([3,4],5,6));

let aray = [1, 2];

let araylike = {
    0: "something",
    length: 1
};

console.log(aray.concat(araylike));

let array = [1,2];
let arraylike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};
console.log(array.concat(arraylike));

let ar = [1, 0, false];
console.log(ar.indexOf(0));
console.log(ar.indexOf(false));
console.log(ar.indexOf(null));
console.log(ar.includes(1));

let users = [
    {id: 1, name: "john"},
    {id: 2, name: "pete"},
    {id: 3, name: "mary"},
    {id: 4, name: "john"}
];
console.log(users.findIndex(user => user.name == 'john')); // index of first john
console.log(users.findLastIndex(user => user.name == 'john')); // index of last john
let someUser = users.filter(item => item.id < 3); //return array of the first two users
console.log(someUser.length);

let lengths = ["bilbo", "gandalf", "nazgul"].map(item => item.length);
console.log(lengths);

let arr = [1,2,15];
arr.sort();
console.log(arr); // the items are sorted as string 


function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

//let arr = [1,2,15];
arr.sort(compareNumeric);
console.log(arr);

[1, -2, 15, 2, 0,8].sort(function(a, b) {
    console.log( a + " <> " + b );
    return a - b;
});

let Arr = [1,2,15];
Arr.sort(function(a, b) { return a - b});
console.log(Arr);

//let Arr = [1,2,15];
Arr.sort( (a, b) => a - b);
console.log(Arr);

let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort( (a, b) => a > b ? 1 : -1));
console.log( countries.sort( (a, b) => a.localeCompare(b) ) );

let aa = [1,2,3,4,5];
aa.reverse();
console.log(aa);
let result = aa.reduce((sum, current) => sum + current);
console.log(result);


let names = 'bilbo, gandalf, nazgul';
let arr = names.split(', ');
let str = arr.join(';');
console.log( str);

for (let name of arr) {
    console.log( `A message to ${name}`)
}

console.log(typeof {});
console.log(Array.isArray({}));

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

let soldier = users.filter(army.canJoin, army);

console.log(soldier.length);
console.log(soldier[0].age);
console.log(soldier[1].age);

function camelize(str) {
    return str
    .split('-')
    .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

function filterRange(x, a, b) {
    return x.filter(item => (a <= item && item <= b));
}

let x = [5,3,8,1];

let filtered = filterRange(x, 2, 4);
console.log(filtered);
console.log(x);

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i <arr.length; i++) {
        let val = arr[i]
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5,3,8,1];

filterRangeInPlace(arr, 1, 4);
console.log( arr ); 

let y = [5,2,1,-10,8];
y.sort((a,b) => b-a); //decreasing order
console.log(y);

function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "Javascript", "CSS"];

let sorted =copySorted(arr);

console.log( sorted );
console.log( arr );

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(''),
        a = +split[0],
        op = split[1],
        b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}


let john = { name: "john", surname: "smit", id: 1 };
let pete = { name: "pete", surname: "Hunt", id: 2 };
let mary = { name: "mary", surname: "key", id: 3 };
let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullname: `${user.name} ${user.surname}`,
    id: user.id
}));

console.log( usersMapped[0].id);
console.log(usersMapped[0].fullname);

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
let john ={ name: "john", age: 25 };
let pete = { name: "pete", age: 30 };
let mary = { name: "mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i =0; i < 1000000; i++) {
    let array = [1,2,3];
    shuffle(array);
    count[array.join('')]++;
}

for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}



function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  console.log(unique(strings));



["bilbo", "gandalf", "nazgul"].forEach(console.log);

["bilbo", "gandalf", "nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

let users = [
    {id: 1, name: "john"},
    {id: 1, name: "pete"},
    {id: 3, name: "mary"},
    {id: 4, name: "john"}
];

let  someUser = users.filter(item => item.id < 4);
console.log(someUser.length);

console.log(users.findIndex(user => user.name == "john"));
console.log(users.findLastIndex(user => user.name == "john"));

let user = users.find(item => item.id == 1);
console.log(user.name);

[1,-2,15,2,0,8].sort(function(a,b) {
    console.log( a + "<>" +b);
    return a - b;
});

let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log( countries.sort( (a, b) => a > b ? 1 : -1))

console.log( countries.sort( (a,b) => a.localeCompare(b)));

let arr = [1,2,3,4,5];
arr.reverse();

console.log( arr );



