alert("i'm javascript");

let admin, name; //can declare two variable at once
name = "john";
admin = name;
alert(admin);

//let age = prompt('how old are you',100);
//alert(`you are ${age} year old`);

let isBoss = confirm("Are you the boss");
alert(isBoss);

let Name = prompt ("what is your name", "");
alert(Name);


/*let a = prompt("first", 1);
let b = prompt("second", 2);
alert(a+b);*/

console.log(5 < 4);


let year = prompt("year", "");

if (year == 2025){
    alert("it is right");
} else {
    alert("wrong")
}

let accessAllowed;
let age = prompt('how old are you', '');
if (age > 18){
    accessAllowed = true;
} else {
    accessAllowed = false
}

let value = prompt('what is the original name of js?');
if (value == "ECMAScript"){
    alert("right")
} else {
    alert("wrong")
}

let num = prompt("number", 0);
if (num > 0){
    alert(1)
} else if (num < 0){
     alert(-1)
} else {
    alert(0)
}


console.log(null || 2 || undefined);
console.log(1 && null && 2);

if (!(age >=14 && age <= 90));

let user = prompt("who's ther?", '');
if (user === 'admin'){
    let pass = prompt('password', '');

    if (pass === 'the master'){
        alert('welcome');
    } else if (pass === '' || pass === null){
        alert('cancelled');
    } else {
        alert ('wrong password');
    }
} else if (user === '' || user === null){
    alert ('canceled');
} else {
    alert("i dont know");
}

//let i = 0;
while (i < 3){
    console.log(i);
     i++;
}

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

for (let i = 0; i < 10; i++){ // it true ,skip the remaining part
    if (i % 2 == 0) continue;
    console.log(i);
}

//let i = 3;
while (i){
    console.log(i-- );
}

//let i = 0;
while (++i < 5)
    console.log(i);

for (let i = 0; i<5; ++i)
    console.log(i);

//let i = 0;
while(i <3){
    console.log(`number ${i}`);
    i++;
}

let n = 100;
nextPrime:
for (let i = 2; i <= n; i++){
    for (let j = 2; j < i; j++){
        if (i % j == 0) continue nextPrime;
    }
    console.log(i)
}

//let a = 2+2;
switch(a){
    case 3:
        console.log('too small');
        break;
    case 4:
        console.log('exactly');
        break;
    case 5:
        console.log('too big');
        break;
    default:
        console.log("i don't know")    
}

let a = 1;
let b = 0;
switch (+a) {
    case b + 1:
        console.log("this runs, because +a is 1");
        break;

        default:
            console.log("this does'nt run")
}

let c = 3;
switch (c){
    case 4:
        console.log('right');
        break;
    case 3:
    case 5:
        console.log('wrong');
        console.log("why don't you take math class");
        break;
    
    default:
        console.log('the result is strange');
}

let arg = prompt("enter a value");
switch (arg) {
    case '0':
    case '1':
        alert('one or zero');
        break;

    case '2':
        alert('two');
        break;

    case 3:
        alert('never executes');
        break;
    default:
        alert('an unknown value');
}



