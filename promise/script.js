console.log('requesting 1');

const pr = myFetch('https://jsonplaceholder.typicode.com/todos/1');

const pr2 = pr.then((data) => {
   // console.log(data);
});

pr2.then((data) => {
    console.log(data);
})



