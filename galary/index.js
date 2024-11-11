function changeImage(src) {
    document.getElementById("mainImage").src = src;
}

menu.onclick = function() {
    alert(1);

    setTimeout(() => menu.dispatchEvent(new CustomEvent("menu-open", {
        bubbles: true
    })));
    alert(2);
};
document.addEventListener('menu-open', ()=> alert('nested'));

container.onmouseover = container.onmouseout = handler;

function handler(event) {
    function str(el) {
        if (!el) return "null"
        return el.className || el.tagName;
    }

    log.value += event.type + ': ' +
    'target=' + str(event.target) +
    ', relatedTarget=' + str(event.relatedTarget) + "\n";
    log.scrollTop = log.scrollHeight;

    if (event.type == 'mouseover') {
        event.target.style.background = 'pink'
    }
    if (event.type == 'mouseout') {
        event.target.style.background = ''
      }
}


