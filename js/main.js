let elForm = document.querySelector('.form');
let elInp = document.querySelector('.weather__inp');
let elWeatherHero = document.querySelector('.weather__hero');

let updateUi = (weatherCity) => {

    console.log(weatherCity);
    elWeatherHero.innerHTML =
        `
    <h2 class="title">${weatherCity.current.temp_c
        }</h2>
    <p class="sub__text">${weatherCity.location.name},${weatherCity.location.country}</p>


    `

    // <div class="temp__info">
    // <span class="temp__info-span">Kunduzi: 3°</span>
    // <span class="temp__info-span">Kechasi: -4°</span>
    // </div>
    // <div class="weather__info">
    // <span class="weather__info-span">66%</span>
    // <span class="weather__info-span">54%</span>
    // <span class="weather__info-span">19 km/h</span>
    // </div>
}

const getWeather = async (city) => {
    const data = await getData(city)
    return data
}

elForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const cityName = elInp.value.trim()
    elForm.reset()
    getWeather(cityName).then((data) => updateUi(data))

})



