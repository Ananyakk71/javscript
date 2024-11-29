const select = document.querySelector("select");
const para = document.getElementById("point");
select.addEventListener("change",setWeather);


function setWeather(){
    const choice = select.value;
    switch (choice){
        case "sunny":
        para.textContent = "it is  nice and sunny outside today. Wear shorts! Go tothe beach,, ar yhe park and get an ice cream.";
        break;
        case "rainy":
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and dont stay out for too long.";
        break;
        case "snowing":
        para.textContent = "The snow is coming down it id freezing Best to stay in with a cup of hot chocolate, or go build a snowman.";
        break
        case "overcast":
        para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";  
        break
        default:
            para.textContent = "";  

    }
}
const selects = document.querySelector()

function time() {
    document.getElementById("Time").innerHTML = Date();
}

const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.push("Lemon");
  document.getElementById("demo").innerHTML = fruits;
}

const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatMap(x => [x, x*10]);
document.getElementById("map").innerHTML = newArr;



