/*const myObj = {
    a: 1,
    b:2,
    c: function() {
        console.log(this)
    }
}

myObj.c = myObj.c.bind(myObj);

var k = myObj.c;

const yourObj = {
    k: 12,
    j: 22
};

var aa = myObj.c;
aa();

aa.call(yourObj)

const myObj = {
    a: 1,
    b:2,
    c: function(a, b) {
        console.log(this, a, b);
    }
};
var k = myObj.c.bind(myObj);
k(4,5);

var k = myObj.c;
k.apply(myObj, [1, 2])

class myClass {
    myFunction = () => {
        console.log(this);
    }
}
const myc = new myClass();
//myc.myFunction()
const k = myc.myFunction;
k()

var obj = new myClass();
var a = obj.myFunction.bind(obj);
a(obj)

function one() {
    var a = {
        value:100
    };
    two(a);
    console.log('one',a.value);
}

function two(a) {
    a.value = a.value + 1;
    console.log('two', a.value);
}

one();

function one() {
    var a = {
        value: 100,
    }
    two(a);
    console.log('one', a.value);
}

function two(a) {
    a = {
        value: 400
    }
    console.log('two', a.value);
}

one();

function add(a, b) {
    function myAdd() {
    const c = a + b;
    return c;
}
return myAdd;
}

function main() {
    const res = add(3, 4);
    const val = res();     
    console.dir(res);
}

main();

function main(a) {
    [1,2,3,4,5]
    .forEach(function(i) {
        console.log(i, a);
    });
}

main(10);

var obj = [
    {
        name: 'one',
        msg: 'hello i am one'
    },
    {
        name: 'two',
        msg: 'hello i am two'
    },
    {
        name: 'three',
        msg: 'hello i am three'
    }
]

function main() {
    obj.forEach((item) => {
        const bt = document.createElement('button');
        bt.innerHTML = item.name;
        bt.onclick = myCallback;
        document.body.appendChild(bt);
    });
}

function getCallback(arg) {
    return function() {
        alert(arg)
    }
}


main();

var obj = {
    a: 1,
    b: 2,
    c: 'hello'
}

var obj2 = {
    ...obj
}
     console.log(obj);
 console.log(obj2);

var a = [1,2,3,4];

var b = [...a];

console.log(a);
console.log(b);

var objA = {
    a: 1,
    b: 2,
    c: 'hello'
}

var objB = {
    a1: 1,
    b1: 2,
    c: 'hello 2'
}

var obj2 = {
    ...objA,
    ...objB,
    z: 32
};

console.log(obj2);

var obj1 = {
    a: 1,
    b: 2,
    c: {
        name: 'ram',
        age: 28
    }
}

var obj2 = {...obj1};

obj1.d = 44;
obj1.c.name = 'krish';
console.log(obj1, obj2);*/

var arr = [1,2,33,49,15,6]
var a = Math.max(...arr);
console.log(a);





