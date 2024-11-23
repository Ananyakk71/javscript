var number = 25;

(function () {
    var button = document.getElementById("hello");
    button.style.background = 'green';
    button.onclick = () => {
        console.log(button.innerHTML)
    }
})();

