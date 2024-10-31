const name = "zaptec";
function greeting(){
    alert(`our company is called ${name}.`)
}
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgcolor,textcolor){
    html.style.backgroundColor = bgcolor;
    html.style.color=textcolor;
}
select.addEventListener("change", () =>
    select.value === "black" ? update("black", "white"): 
    select.value === "purple" ? update("purple","white"):
    select.value === "yellow" ? update("yellow","black"):
update("white", "black",));

/*const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", ()=>{
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});
 function random(number) {
    return Math.floor(Math.random() * number);
 }
 function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i<100; i++){
        ctx.beginPath();
        ctx.fillStyle = "rgb(255 0 0 / 50%)";
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),
            0,
            2 * Math.PI,
        );
        ctx.fill();
    }
 }
 btn.addEventListener("click",draw);

 /*const cats = ["leopard", "serval", "jaguar", "Tiger", "Lion"];

 for (const cat of cats){
    console.log(cat);
 }
 const cats = ["leopard", "serval", "jaguar", "Tiger", "Lion"];
 function toUpper(string){
    return string.toUpperCase();
 }
const uppercats = cats.map(toUpper);
console.log(uppercats);

const cats = ["leopard", "serval", "jaguar", "Tiger", "Lion"];
const filter = cats.filter((cat) => cat.startsWith("L"));
console.log(filter);

//for(initializer; condition; final-expression{})  standared for loop
*/
const results = document.querySelector("#results");

function calculate(){
    for(let i = 1; i < 10; i++){
        const newResult = `${i} x ${i} = ${i*i}`;
        results.textContent += `${newResult}\n`;
    }
    results.textContent += "\nFinished!"
}
const calculatebtn = document.querySelector("#calculate");
const clearbtn = document.querySelector("#clear");
calculatebtn.addEventListener("click", calculate);
clearbtn.addEventListener("click", () => (results.textContent = ""));

const cats = ["pete", "biggles", "jasmine"];
let myfavour = "my cats are called";

for (let i = 0; i <cats.length; i++){
    if (i === cats.length - 1){
       myfavour += `and ${cats[i]}.`; 
    } else {
        myfavour += ` ${cats[i]},`;
    }
}  
console.log(myfavour);
//another method
for (const cat of cats){
    myfavour += ` ${cat}, `;
}
console.log(myfavour);
// another method while
//const cats = ["pete", "biggles", "jasmine"];
//let myfavour = "my cats are called";
//let i = 0;
while (i < cats.length){
    if (i === cats.length - 1){
        myfavour += `and ${cats[i]}.`;
    } else {
        myfavour += `${cats[i]},`;
    }
    i++;
}
console.log(myfavour);

//const cats = ["pete", "biggles", "jasmine"];
//let myfavour = "my cats are called";
//let i = 0
do {
    if (i === cats.length -1){
        myfavour += `and ${cats[i]}.`;
    } else {
        myfavour += `${cats[i]}, `;
    }
    i++;
} while (i < cats.length);
console.log(myfavour);

const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
  ];
  const para = document.querySelector("p");
  const input = document.querySelector("input");
  const btn = document.getElementById("searchbtn");
  btn.addEventListener("click", () =>{
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts){
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() == searchName){
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }
    if (para.textContent === ""){
        para.textContent = "contact not found.";
    }
  });

  /*<label for="number">Enter number: </label>
  <input id="number" type="number" />
  <button id="numbtn">Generate integer squares</button>
  <p id="numpara">Output:</p>*/

  const paragraph = document.getElementById("numpara");
  const inputno = document.getElementById("number");
  const numBtn = document.getElementById("numbtn");

  numBtn.addEventListener("click", () => {
    paragraph.textContent = "output: ";
    const num = inputno.value;
    inputno.value = "";
    inputno.focus();
    for (let i = 1; i <= num; i++){
        let sqroot = Math.sqrt(i)
        if (Math.floor(sqroot) !== sqroot){
            continue;
        }
        paragraph.textContent += `${i}`;
    }
  });

  const textbox = document.getElementById("textbox");
  const output = document.getElementById("output");
  textbox.addEventListener("keydown", (event) => {
    output.textContent = `you pressed "${event.key}".`
  })





