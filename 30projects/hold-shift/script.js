const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handlecheck(e) {
    if(e.shiftkey && this.checked) {

    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener("click",handlcheck));