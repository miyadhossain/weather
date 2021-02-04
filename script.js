const button = document.getElementById('button');
button.addEventListener('click', function() {
  const city = document.getElementById(inputCity);
  getWeather(city);
})

  function getWeather() {
    const api = {
      key: "3fa75469de71ef07657c9f03a4959981",
      base: "https://api.openweathermap.org/data/2.5/"
    }
    fetch(`${api.base}weather?q=${inputCity.value}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(data => getData(data))
      .catch(error => alert('Data not found'))
  }

function getData(data) {
  document.getElementById('inputCity').value = '';
      const city = data.name;
      const temp = data.main.temp;
      const round = Math.round(temp);
      const weatherIcon = data.weather[0].icon;
      const weatherStatus = data.weather[0].main;
      document.getElementById('city').innerText = city;
      document.getElementById('temp').innerText = round;
      document.getElementById('weather').innerText = weatherStatus;
      document.getElementById('icon').src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
}
