alert(p.outerHTML)
alert(news.textContent)

let name = prompt("What is your name?", "ann");
elem1.innerHTML = name;
elem2.textContent = "my name " + name
elem2.hidden = true

alert(eleph.getAttribute('About'));
eleph.setAttribute('test', 123);
alert(eleph.outerHTML);

for (let attr of eleph.attributes) {
    alert(`${attr.name} = ${attr.value}`);
}


alert(div.getAttribute('style'));

let date = document.querySelector('[data-widget-name]');
alert(date.getAttribute('data-widget-name'));

let link = document.querySelector('a');
link.style.color = 'orange';

function getListContent() {
    let result = [];

    for(let i=1; i<=4; i++) {
        let li = document.createElement('li');
        li.append(i);
        result.push(li);
    }
    return result;
}
ul.append(...getListContent());



