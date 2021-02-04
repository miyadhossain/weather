const button = document.getElementById('button');
button.addEventListener('click', function () {
    const typedCity = document.getElementById('inputCity').value;
    getWeather(typedCity);
})

function getWeather(city) {
    const api = {
        key: "3fa75469de71ef07657c9f03a4959981",
        base: "https://api.openweathermap.org/data/2.5/"
    }
    const apiUrl = `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => getData(data))
        .catch(error => alert('Data not found'))
}
function getData(data) {
    const weatherIcon = data.weather[0].icon;
    const city = data.name;
    const temp = Math.round(data.main.temp);
    const weatherStatus = data.weather[0].main;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    document.getElementById('city').innerText = city;
    document.getElementById('temp').innerText = temp;
    document.getElementById('weather').innerText = weatherStatus;
    document.getElementById('inputCity').value = '';
}
getWeather('Dhaka');



// another method
// const api = '85fb64b8fcf62c05e7d26f409f9bb05d';

// const button = document.getElementById('button');
// button.addEventListener('click', ()=>{
//     const typedCity = document.getElementById('typedCity').value;
//     getWeather(typedCity);
// })

// const getWeather = (city) => {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const weatherIcon = data.weather[0].icon;
//             const city = data.name;
//             const temp = Math.round(data.main.temp - 273.15);
//             const weatherStatus = data.weather[0].main;
//             document.getElementById('icon').src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
//             document.getElementById('city').innerText = city;
//             document.getElementById('temp').innerText = temp;
//             document.getElementById('weather').innerText = weatherStatus;
//             document.getElementById('typedCity').value = '';
//         })
// }
// getWeather('Dhaka');