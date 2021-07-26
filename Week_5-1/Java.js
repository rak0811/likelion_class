const key = 'bb718e7e7731be5ae2d334f4169510f0'
let searchBox = document.querySelector('.search-box')
let city = document.querySelector('.city')
let date = document.querySelector('.date')
let weather = document.querySelector('.weather')
let temperature = document.querySelector('.temperature')
let highLow = document.querySelector('.high-low')
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

searchBox.addEventListener('keydown', getCity)

function getCity(event) {
    if(event.key === 'Enter') {
        getResponse(searchBox.value)
    }
}

function getResponse(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`)
    .then(function (response) {
        return response.json()
    }).then(showResults)
}

function showResults(object) {
    console.log(object)

    let today = new Date()

    city.textContent = `${object.name}, ${object.sys.country}`
    date.textContent = today.toLocaleDateString('en-us', options)
    weather.textContent = `${object.weather[0].main}`
    temperature.textContent = `${Math.round( object.main.temp)}`
    highLow.textContent = `
        ${Math.round(object.main.temp_min)}°C /
        ${Math.round(object.main.temp_max)}°C 
    `
}