"use strict";

const apiKey = "86f9d2ad3489c07886b1f6ed970f748d";
const btnSubmit = document.querySelector("#submitBtn");
const inputSearch = document.querySelector("#search");
const cityCard = document.querySelector(".cityInfo");
// const citySearch = inputSearch.value.toLowerCase();
const weatherPicture = document.querySelector("#weatherPic");
const temperature = document.querySelector("#temperature");
const cityName = document.querySelector("#city");
const humidityPercentage = document.querySelector("#humidityPerc");
const windPercentage = document.querySelector("#windPerc");
let loading = false;

const checkWeather = async function (city) {
  try {
    // loading = true;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    let weatherInfo = data.weather[0].main.toLowerCase();
    weatherPicture.alt = weatherInfo;
    weatherPicture.src = `./img/${weatherInfo}.png`;

    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    cityName.innerHTML = data.name;
    humidityPercentage.innerHTML = data.main.humidity + "%";

    // windPercentage.innerHTML = loading
    //   ? `loading... `
    //   : `${data.wind.speed} km/h`;
    windPercentage.innerHTML = data.wind.speed + " km/h";

    console.log(data);
  } catch (err) {
    console.log("Error occured..");
  }
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let citySearch = inputSearch.value.toLowerCase();

  checkWeather(citySearch);
  cityCard.style.opacity = 1;

  inputSearch.value = "";
});
