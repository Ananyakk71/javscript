sayHi("john");
function sayHi(name){
    alert(`hello, ${name}`);
}


function sum(a, b){
    return a + b;
}

/*let age = prompt("what is your age? 18");
let welcome = (age < 18)?
function(){alert("hello");}:
function(){alert("greetings");};
welcome();*/

let age = prompt("what is your age? , 18");
let welcome;
if (age < 18){
    welcome = function(){
        alert("hello");
    };
} else {
    welcome = function(){
        alert("greetings");
    };
}
welcome()

let sum = (a, b) => {  //the curly brace opens a multiline function
    let result = a + b;
    return result;
};
console.log(sum(1, 2));


function ask(question, yes, no){
    if (confirm(question)) yes();
    else no();
}
ask(
    "do you agree",
    () => alert("you agreed"),
    () => alert("canceled")
);
