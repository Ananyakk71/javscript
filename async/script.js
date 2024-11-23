/*async function getValue() {
    await
    //return fetch('https://jsonplaceholder.typicode.com/todos/1');
}

const result = getValue();
result.then((data) => {
    console.log(data);
})*/

console.log('started');
var aa = getValue();
aa.then((data) => {
    console.log(data);
});
console.log('ended');

async function getValue() {
    //fetch('https://jsonplaceholder.typicode.com/todos/1')
    //.then((data) => {
    //    return data.json();
    //})
    //.then((data) => {
    //    console.log(data);
    //});
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const jsonData = await data.json()
        return jsonData;
    } catch(e) {
        console.log('handled');
        return{};
    }
}



