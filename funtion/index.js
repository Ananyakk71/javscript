function a() {
    console.log("a called");
}

//function expression

var b = function (para1){
    return function xyz() {

    }
}
 console.log(b());

 setTimeout(function(){
    console.log("timer")
 }, 5000);
 function x(y){
    console.log("x");
    y();
 }
 x(function y(){
    console.log("y")
 });

 function attachEventListners() {
    let count = 0
    document.getElementById("clickme").addEventListener("click", function xyz(){
      console.log("button clicked", ++count);
    });
 }
 attachEventListners();

 function a() {
    console.log("a");
 }
 a();
 console.log("end");

 console.log("started");

 setTimeout(function cb() {
    console.log("callback");
 },5000);

 console.log("ended");

 console.log("Start");
 document.getElementById("btn").addEventListener("click", function cb() {
    console.log("Callback fn");
 });
 console.log("ended");



let text;
switch (new Date().getDay()) {
    default:
        text = "looking forward to the weekend";
        break;
    case 6:
        text = "today is saturday";
        break;
    case 0:
        text = "today is sunday";
}
document.getElementById("switch").innerHTML = text;

let text1;
switch (new Date().getDay()) {
    case 4:
    case 5:
        text1 = "soon it is weekend";
        break;
    case 0:
    case 6:
        text1 = "looking forward to the weekend";
}
document.getElementById("switch1").innerHTML = text1;

let language = "Javascript";

let text2 = "";
for (let x of language) {
    text2 += x + "<br>";
}

document.getElementById("loop").innerHTML = text2;




