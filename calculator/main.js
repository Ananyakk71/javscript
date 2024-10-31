/*const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");
btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", (event) => {
    event.stopPropagation();
    video.play();
});
box.addEventListener("click", () => box.classList.add("hidden"));*/

const person = {
    name: ["bob","lilly"],
    age: 32,
    bio: function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old. `);
    },
    introduce: function(){
        console.log(`hi! i'm ${this.name[0]}.`);
    },
};
  console.log(person.name);
  console.log(person.bio());

const person1 = {
    name: "chris",
    introduce(){
        console.log(`hi! i'm ${this.name}`)
    },
};
console.log(person1.introduce());

const myObject = {
    city: "Madrid",
    greet(){
        console.log(`greetings from ${this.city}`);
    },
};
console.log(myObject.greet());
console.log(myObject.toString());

//  const myDate = new Date();
    let object = myDate;

    do {
        object = Object.getPrototypeOf(object);
        console.log(object);
    } while (object);
console.log(myDate);

const myDate = new Date(1995, 11, 17);
console.log(myDate.getTime());

myDate.getTime = function (){
    console.log("somthing else!");
};

myDate.getTime();

const personPrototype = {
    greet(){
        console.log("hello!");
    },
};
const carl = Object.create(personPrototype);
console.log(carl.greet());