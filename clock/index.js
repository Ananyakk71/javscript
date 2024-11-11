alert(document.body.className);
document.body.classList.add('article');
alert(document.body.className);

for (let name of document.body.classList) {
    alert(name);
}

document.body.style.backgroundColor = prompt('background color? ','green')
alert(document.body.style.backgroundColor)

let elem = document.body;
alert(getComputedStyle(elem).width)

function createMessageUnder(elem, html) {
    let message = document.createElement('div');
    message.style.cssText = "position:absolute; color: red";
    let coords = getCoords(elem);

    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";

    message.innerHTML = html;

    return message;
}

function countRabbits() {
    for(let i=1; i<=3; i++) {
        alert("rabbit number" + i);
    }
}

click.onclick = function() {
    alert('thank you');
};

function one() {
    alert('thanks');
};
function two() {
    alert('thanks again');
}
hi.onclick = () => alert("Hello");
hi.addEventListener("click", one);
hi.addEventListener("click", two);

/*class Menu {
    handleEvent(event) {
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }
    onMousedown() {
        btn.innerHTML = "mouse button pressed";
    }
    onMouseup() {
        btn.innerHTML += "...and released.";
    }
}
let menu = new Menu();
btn.addEventListener('mousedown', menu);
btn.addEventListener('mouseup', menu);*/


document.addEventListener('click', function(event) {
    if (event.target.dataset.counter != undefined) {
        event.target.value++;
    }
});

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;
    let mail = document.getElementById(id);
    mail.hidden = !mail.hidden;
});

function handler() {
    alert("...");
    return false;
}

