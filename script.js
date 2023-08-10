"use strict";

const apiKey = "86f9d2ad3489c07886b1f6ed970f748d";

const checkWeather = async function (city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();

  console.log(data);
};
checkWeather("tbilisi");
checkWeather("naples");
