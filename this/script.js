var button = document.getElementById("mybutton");
button.onclick = () => {
    console.log('started click event');
    var arr = [];
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        success: (data) => {
            console.log('ajax1 started', data.title);
            arr.push(data.title);
            console.log('ajax1 ended');
        },
        async: true
    });

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        success: (data) => {
            console.log('ajax2 started', data.title);
            arr.push(data.title);
            console.log('ajax2 ended');
        },
        async: true
    });

    document.getElementById('mytext').value=arr.join('\n');
    console.log('ended click event');
}








