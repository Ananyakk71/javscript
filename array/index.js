const arr = [
    {
        name: 'Alice',
        mark: 35,
        Place: 'Kannur'
    },
    {
        name: 'bob',
        mark: 28,
        Place: 'Pala'
    },
    {
        name: "Catherine",
        mark: 23,
        Place: 'thirur'
    },
    {
        name: "Den",
        mark: 22,
        place: 'Kollam' 
    }
];

var found = arr.map((item) => {
    return {
        ...item,
        country: 'India'
    }
});
console.log(found);


var ar =[
     {
    name: 'Alice',
    mark: 35,
    place: 'Kannur',
} 
, 22, 23];

var [val1,val2] = ar
console.log(val2);


class Button {
    constructor(name) {
        this.button = document.createElement('button');
        this.button.innerHTML = name;

        document.body.appendChild(this.button);
    }

    onClick(fn) {
        this.button.onclick = fn;
    }
}

class greenButton extends Button {
    constructor(name) {
        super(name)
    }
    onClick(fn) {
       super.onClick(function() {
            this.button.style.background = 'green';
            fn();
        }.bind(this));
    }
    printme() {
        console.log('me');
    }
}

var b1 = new greenButton('my Button')
b1.onClick(function() {
    console.log('Clicked');
});

