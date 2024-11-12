table.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink';

    text.value += `over -> ${target.tagName}\n`;
    text.scrollTop = text.scrollHeight;
};

table.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';

    text.value += `out <- ${target.tagName}\n`;
    text.scrollTop = text.scrollHeight;
};

alert(form.elements.login);
let fieldset = form.elements.userFields;
alert(fieldset);

alert(fieldset.elements.login == form.elements.login);


select.selectedIndex = 2;

input.onblur = function() {
    if (!this.value.includes('@')) {
        this.classList.add("error");
        input.focus();
    } else {
        this.classList.remove("error");
    }
};

input.oninput = function() {
    result.innerHTML = input.value;
}

window.onload = function() {
    alert('page loaded')
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
}


let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});
observer.observe(elem, {
    childList: true,
    subtree: true,
    characterDataOldValue: true
});

button.onclick = () => {

let range = new Range();
range.setStart(p, start.value);
range.setEnd(p, end.value);
console.log(range);
document.getSelection().removeAllRanges();
document.getSelection().addRange(range);
}