const apikey = "adea7235b97b8393e79408a8dfef1fc7";
const apiendpoint = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let img = document.querySelector(".weathericon");

async function checkweather(city){
    const response = await fetch(apiendpoint + city +`&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = data.main.temp+ "*C" ;
    document.querySelector(".Wind").innerHTML = data.wind.speed + " Kmph";

    if(data.weather[0].main == "Clouds"){
        img.src = "images/icons8-cloud-48.png";
    } else if(data.weather[0].main == "Mist"){
        img.src = "images/icons8-mist-48.png";
    } else if(data.weather[0].main == "clear" ){
        img.src = "images/icons8-sun-32.png";
    } else if( data.weather[0].main = "Rain"){
        img.src = "images/icons8-rain-32.png";
    } else if(data.weather[0].main = "Drizzle"){
        img.src = "images/icons8-rainbow-32.png";
    }

}

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

searchbtn.addEventListener("click" , ()=>{
    checkweather(searchbox.value);
})
