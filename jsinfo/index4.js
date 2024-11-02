let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/*function calculate() {

     this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
     };

     this.sum = function() {
        return this.a + this.b;
     };

     this.mul = function() {
        return this.a * this.b;
     };
}

let calculate = new calculate();
calculate.read();

alert( "sum=" + calculate.sum() );
alert( "mul=" + calculate.mul());*/



let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
};
ladder.up().up().down().showStep().down().showStep();

function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = {
    name: "jack",
    isAdmin: false
};
console.log(user.name);
console.log(user.isAdmin); // otherwise
/*let user = new User("jack");
console.log(user.name);
console.log(user.isAdmin);*/

function User(name) {
    if (!new.target) {
        return new User(name);
    }

    this.name = name;
}

//let john = User("John");
console.log(john.name);

function bigUser() {
    this.name = "john";
    return { name: "Godzilla" }; 
}

console.log( new bigUser().name ); 

function User(name) {
    this.name = name;

    this.sayHi = function() {
        console.log( "my name is: " + this.name );
    };
}

let john = new User("john");
john.sayHi();

let obj = {};

function A() {
   return obj;
}
function B(){
   return obj;
}

console.log(new(A) == new(B));

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('How much to add?', 0);
    };
}
let accumulator = new Accumulator(1); //initial value 1
accumulator.read();
accumulator.read();
alert(accumulator.value);

