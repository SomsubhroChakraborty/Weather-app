const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

function getWeather(city) {
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '422eb8192fmsh4e2e79fa8c889d8p17e4a1jsn470490898246',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById('city').innerHTML = data.location.name;
      document.getElementById('temp').innerHTML = data.current.temp_c + '°C';
      document.getElementById('humidity').innerHTML =
        data.current.humidity + '%';
      document.getElementById('precipitationtxt').innerHTML =
        data.current.precip_in + '%';
      document.getElementById('windtxt').innerHTML =
        data.current.wind_kph + 'Kmph';
    })
    .catch((error) => console.error(error));
}

searchBtn.addEventListener('click', () => {
  const city = searchBox.value;
  getWeather(city);
});
