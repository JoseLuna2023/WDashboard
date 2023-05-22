const key =  'b9b6473a9278d7b2a79b1934480d6bb0'
//'418728c450a32729b9e1137c276e830a'
const citySearchBar = document.querySelector(".citySearchBar")
const searchBtn = document.querySelector(".searchBtn")
const searchHistory = document.querySelector(".searchHistory")
const weatherCard = document.querySelector(".weatherCard")
const forecastCard = document.querySelectorAll(".forecastCard")

searchBtn.addEventListener("click", function(event) {
    event.preventDefault()
    const cityToSearch = citySearchBar.value;
    searchCurrent(cityToSearch)
    searchForcast(cityToSearch)
});

function searchCurrent(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key + '&units=imperial')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        weatherCard.innerHTML = ""
        const cityName = document.createElement("h1");
        cityName.innerHTML = data.name;
        weatherCard.append(cityName);
        const icon = document.createElement("img");
        icon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png")
        weatherCard.append(icon)
        const temp = document.createElement("h4")
        temp.innerHTML = "Temp: " + Math.floor(data.main.temp) + "&#176F"
        weatherCard.append(temp)
        const humidity = document.createElement("h4")
        humidity.innerHTML = "Humidity: " + Math.floor(data.main.humidity) + "%"
        weatherCard.append(humidity)
        const wind = document.createElement("h4")
        wind.innerHTML = "Wind: " + Math.floor(data.wind.speed) + "mph"
        weatherCard.append(wind)
    })
};

function searchForcast(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key + '&units=imperial')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        for(let i = 0; i < forecastCard.length; i++) {
            forecastCard.innerHTML = ""
        }
    })
}