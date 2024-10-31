alert('hello')

/*switch(browser){
    case 'Edge':
       console.log("you've got the Edge");
       break;

    case 'chrome':
    case 'Firefox':
    case 'sefari':
    case 'opera':
        console.log('okay we support these browsers too');
        break;

    default:
        console.log('we hope that page looks ok');
}*/

/*let a = +prompt('a?','');
if (a == 0){
    alert(0);
}
if (a == 1){
    alert(1);
}
if (a == 2 || a == 3){
    alert('2,3');
}*/

let a = +prompt('a?','');
switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
}

let username = 'john';
function showMessage(){
    username = "bob";
    let message = 'hello ' + username;
    console.log(message);
}
showMessage();
console.log(username)

function show(from, text){
    from = '*' + from + '*';
    console.log(from + ':' + text);
}
let from = 'ann';
show(from, "hello");
console.log(from);

function showCount(count){
    console.log(count ?? "unknown");
}
showCount(0);
showCount(null);
showCount();

function sum(a, b){
    return a + b;
}
let result = sum(1, 2);
console.log(result);

function checkAge(age){
    if (age >= 18){
        return true;
    } else {
        return confirm('Do you have permission from your parents');
    }
}
let age = prompt('how old are you?', 18);
if (checkAge(age)){
    alert('acces granted');
} else {
    alert('access denied')
}

