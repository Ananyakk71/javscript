const select = document.querySelector("select");
const para = document.querySelector("p");
select.addEventListener("change",setWeather);

/*function setWeather(){
    const choice = select.value;
    if (choice === "sunny"){
        para.textContent = "it is  nice and sunny outside today. Wear shorts! Go tothe beach,, ar yhe park and get an ice cream.";
    } else if (choice === "rainy"){
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and dont stay out for too long.";
    } else if (choice === "snowing"){
        para.textContent = "The snow is coming down it id freezing Best to stay in with a cup of hot chocolate, or go build a snowman.";
    } else if (choice === "overcast") {
        para.textContent =
          "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    } else {
        para.textContent = "";
    }
}*/ // another way by use switch

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

if (choice === "sunny"){
    if (temperature < 86){
        para.textContent = `it is ${temperature} degree outside-nice sunny.`; 
    } else if (temperature >= 86){
        para.textContent = `it is ${temperature} -really hot`;
    }
} //same in logical operature and
if (choice === "sunny" && temperature <86){
    para.textContent = `it is ${temperature} degree outside-nice sunny.`; 
} else if(choice === "sunny" && temperature >= 86){
    para.textContent = `it is ${temperature} -really hot`;
}

if (icecreamoutside || housestatus === "onfire"){ //logical operature or
   console.log("you should leave the house");
} else {
    console.log ("stay");
}

if ((x===5 || y > 3 || z<=10) && (loggedin || username === "steve")){

}

