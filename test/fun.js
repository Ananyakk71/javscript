const array = ["i", "love", "chocolate", "frogs"];
const string = array.join(" ");
console.log(string);
const anotherstring = array.join();
console.log(anotherstring);

function hello(name = "ann"){
    console.log(`hello ${name}`);
}
console.log(hello());
console.log(hello("anna"));

const originals = [1,2,3];
const doubled = originals.map(item => item * 2);
console.log(doubled);



