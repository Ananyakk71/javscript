let array = [];
for (let i = 1; i <= 10; i++) {
    array.push(i);
}
console.log(array);

let next = array[array.length - 1] + 1;
array.push(next);
console.log(array);


