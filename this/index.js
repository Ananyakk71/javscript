/*const marks = [1,4,6];
var obj1 = {
    name: "code malayalam",
    place: 'kerala'
};

var obj2 = {
    name: "bob",
    place: "America"
}
function abc() {
    var {
        name,
        place
    } = obj1;
    var {
        name: name2,
        place: place2
    } = obj2;

    console.log(name,place,name2,place2);
}
abc();*/

const arr = [
    {
        name: "Alice",
        mark: 35,
        place: "Kannur"
    },
    {
        name: "Bob",
        mark: 28,
        place: "palakkad"
    },
    {
        name: "Ann",
        mark: 44,
        place: "kochi"
    },
    {
        name: "Dany",
        mark: 23,
        place: 'kollam'
    }
];

var value = arr.reduce((item) => {
   return {
    ...item,
    country:'India'
   }
});
console.log(value);








