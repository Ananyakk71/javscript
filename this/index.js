var obj = {
    name: 'Alice',
    mark: 35,
    place: 'Kannur',
    subject: {
        teacher: 'Ann'
    }
}

var arr = [
    {
        name: 'Alice',
        mark: 35,
        place: 'Kannur',
        subject: {
            teacher: 'Ann'
        }
    }
    ,22,33];
var [{
   subject: {
    teacher
   }
}] = arr;

console.log(teacher);


class Student {
    name;
    yob;
    place;

    constructor(name,yob) {
        this.name = name;
        this.yob = yob;
    }
    static printmin = function(...args) {
        var arr = args.map((item => item.yob));
        console.log(Math.min(...arr));
    }
    getAge() {
        return new Date().getFullYear()-this.yob;
    };
    getName() {
        return this.name;
    }
}


var student1 = new Student('Ann', 1990);

var student2 = new Student();
student2.name = 'bob';
student2.yob = 1995;

var student3 = new Student('Cook', 1980);

console.log(student1);
console.log(student2);
console.log(student3);

Student.printmin(student1, student2, student3)
//printmin(student1, student2, student3);

/*class Button {
constructor(name) {
    this.button = document.createElement('button');
    this.button.innerHTML = name;
    document.body.appendChild(this.button);
}
set width(width) {
    this.button.style.width = width + 'px';
}
set height(height) {
    this.button.style.height = height + 'px';
}
}


var b1 = new Button('Click me')
b1.width = 100;
b1.height = 100;
console.log(b1);
//b1.setwidth(100);
//b1.setHeight(100);
class Button {
    constructor(name) {
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }
    set width(width) {
        this.button.style.width = width + 'px';
    }
    set height(height) {
        this.button.style.height = height + 'px';
    }
    get width() {
        return this.button.style.width;
    }
    get height() {
        return this.button.style.height;
    }
    }

    
    var b1 = new Button('Click me')
    b1.width = 100;
    b1.height = 100;
    console.log(b1);
    console.log(b1.width, b1.height);*/

var b1 = {
    init(name) {
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    },
    set width(width) {
        this.button.style.width = width + 'px';
    },
    set height(height) {
        this.button.style.height = height + 'px';
    },
    get width() {
        return this.button.style.width;
    },
    get height() {
        return this.button.style.height;
    } 
}

b1.init('click');
b1.width = 100;
b1.height = 100;


class Button {
    constructor(name) {
        console.log('constructor')

        this.button = document.createElement('button');
        this.button.innerHTML = name;

        document.body.appendChild(this.button);
    }

    onClick(fn) {
        this.button.onclick = fn;
    }
}

class greenButton extends Button{

    onClick(fn) {
        super.onClick(function() {
            this.button.style.background = 'green';
            fn();
        }.bind(this));
    }
    printme() {
        console.log('me')
    }
}

/*class greenButton {
    constructor(name) {
        this.button = document.createElement('button');
        this.button.innerHTML = name;

        document.body.appendChild(this.button)
    }

    onClick(fn) {
        this.button.onclick = function() {
            this.button.style.background = 'green';
            fn();
        }.bind(this);
    }
}*/

var b1 = new greenButton('gbutton');
b1.onClick(function() {
    console.log('Clicked')
})

b1.printme();












