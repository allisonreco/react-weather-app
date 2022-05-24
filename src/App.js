import React, { useState } from "react";
import "./App.css";
import Conditions from "./Conditions.js";
import Greet from "./Greet.js";
import Time from "./Time.js";
import Forecast from "./Forecast.js";
import DogNeeds from "./DogNeeds.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RightBar from "./RightBar";
import axios from "axios";

/**
 *
 * TODOs
 * * Pass values to components as props
 */

function App() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({
    temperature: null,
    condition: null,
    humidity: null,
    wind: null,
    dayNight: "day",
    time: null,
    city: null,
    minTemp: null,
    maxTemp: null,
    forecast: [],
  });

  function handleWeatherDataResponse(response) {
    console.log(response);
    const timezoneOffset = new Date().getTimezoneOffset() * 60;
    const currentDate = new Date(
      (response.data.dt + response.data.timezone + timezoneOffset) * 1000
    );
    const dayNight = getDayNight(
      response.data.dt,
      response.data.sys.sunrise,
      response.data.sys.sunset
    );

    setWeatherData({
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      time: currentDate,
      dayNight,
      city: response.data.name,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      forecast: [],
    });
  }

  function getDayNight(date, sunrise, sunset) {
    if (date < sunrise || date > sunset) {
      return "night";
    } else {
      return "day";
    }
  }

  function handleError() {
    alert("Please enter a valid city");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed382637ed83e5508a8eed5925733c11&units=metric`;

    axios.get(url).then(handleWeatherDataResponse).catch(handleError);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="MainContainer">
        <div className="GreetSearch">
          <Greet />

          <div className="Search">
            <form action="#">
              <input
                className="SearchBar"
                type="text"
                placeholder="Search city..."
                onChange={changeCity}
              />
              <button type="submit" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>

        <div className="ConditionsTime">
          <Conditions
            condition={weatherData.condition}
            temperature={weatherData.temperature}
            maxTemp={weatherData.maxTemp}
            minTemp={weatherData.minTemp}
          />
          <Time city={weatherData.city} time={weatherData.time} />
        </div>

        <div className="ForecastNeeds">
          <Forecast />
          <DogNeeds />
        </div>
      </div>
      <RightBar />
    </div>
  );
}

export default App;
