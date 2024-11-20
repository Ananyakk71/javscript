var objs =[
    {
        name: 'one',
        msg: 'i am one'
    },
    {
        name: 'two',
        msg: 'i am two'
    },
    {
        name: 'three',
        msg: 'hello i am three'
    },
];

function main() {
    objs.forEach((item) => {
        const bt = document.createElement('button');
        bt.innerHTML = item.name;
        bt.onclick = getcallback(item.msg);
        document.body.appendChild(bt);
    });
}

function getcallback(arg) {
    return function() {
        alert(arg)
    }
}

main()

var obj = {
    a: 1,
    b: 2,
    c: {
        name: 'ram',
        age: 23
    }
}
var obj2 = {
    ...obj
};
obj.d = 44
obj.c.name = 'ann'
console.log(obj);
console.log(obj2);


const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "goodday";
} else {
    greeting = "good evening";
}
document.getElementById('day').innerHTML = greeting;

let text = "";

for (let i = 0; i < 5; i++) {
    text += "the number is " + i + "<br>"
}
document.getElementById("loop").innerHTML = text;


const obj1 = {
    name: "Ann",
    place: 'Kerala',
    rank: 1000
};


function myFunction() {
    const {
        name,
        place,
        rank,
        status = false
    } = obj1

    console.log(name, place, rank, status);
}
myFunction();

const marks = [2,5,6,12];

function myfunction() {
    const [a,b,c,d,e=false]=marks;
    console.log(a,b,c,d,e);
}
myfunction()

var obj3 = {
    name: "Jack",
    place: "Kerala"
}

var obj4 = {
    name: "Bob",
    place: "America"
}

function abc() {
    var {
        name,
        place
    } = obj3;

    var {
        name: name2,
        place: place2,
    } = obj4;

    console.log(name, place, name2, place2);
}

abc();

function outset(){
    var c = 20;
    function outer(b) {
        
        function inner(){
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
    var close = outset()("hello");
    close();

    function counter(){
        var count = 0;
        return function incrementCounter(){
            count++;
            console.log(count);
        }
    }

    var counter1 = counter()
    counter1();
    counter1();

   function a() {
    var a = 0;
     return function b() {
        console.log(a);
     }
   } 
   a();