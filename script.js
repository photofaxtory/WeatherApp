const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "da3bea4987msh12cc0c1fa06e00bp149049jsn61915a150681",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => ConstantSourceNode.error(err));
};

submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
})

var mumbai = document.querySelector("#Mumbai")
mumbai.addEventListener('click', (e) => {
  e.preventDefault()
  getWeather("Mumbai")
  
})
var delhi = document.querySelector("#Delhi")
delhi.addEventListener('click', (e) => {
  e.preventDefault()
  getWeather("Delhi")
  
})
var bhopal = document.querySelector("#Bhopal")
bhopal.addEventListener('click', (e) => {
  e.preventDefault()
  getWeather("Bhopal")
  
})


getWeather("Gwalior")