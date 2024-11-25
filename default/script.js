function average(a, b = a + 100) {
    console.log(a, b);
    const avg = (a + b)/2;
    return avg;
}

function getDefault() {
    return 100;
}

const avg = average(10);
console.log(avg);

function test() {
    const arr = [11,33,43,22];
    const [a,b,c,d,...rest] = arr;

    console.log(a, rest)
}
test();


function test1(...total) {
    console.log(total);
    const a = total.reduce((sum, current) => sum + current)
    console.log(a);
}

const a = [11,44,64,22,66,3,100];
test1(...a);

function test2({ name, age}) {
    console.log(name, age);
}

const obj = {
    name: 'Code Malayalam',
    age: 1
}

test2(obj);


