input.oninput = function() {
    result.innerHTML = input.value;
};

button1.onclick = () => {
    input1.setRangeText("HELLO", input1.selectionStart, input1.selectionEnd, "end");
    input1.focus();
  };

let i = 0;

function count() {
    do {
        i++;
        progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e7) {
        setTimeout(count);
    }
}

count();

setTimeout(() => alert("timeout"));
Promise.resolve()
.then(() => alert("promise"));

alert("code");

