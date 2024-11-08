alert(document.body.className);
document.body.classList.add('article');
alert(document.body.className);

for (let name of document.body.classList) {
    alert(name);
}

document.body.style.backgroundColor = prompt('background color? ','green')
alert(document.body.style.backgroundColor)

getComputedStyles