const name ="ann";
function greeting(){
    alert(`Hello ${name}: welcome to our company. `);
}

const body = document.body;
const panel = document.createElement("div");
panel.setAttribute("class", "msgbox");
body.appendChild(panel);

const msg = document.createElement("p");
msg.textContent = "this is a message box";
panel.appendChild(msg);

const closebtn = document.createElement("button");
closebtn.textContent = "x";
panel.appendChild(closebtn);

closebtn.addEventListener("click", () =>
panel.parentNode.removeChild(panel),
);

