import React, { useState, useEffect } from "react";
import "./App.css";
import Conditions from "./Conditions.js";
import Greet from "./Greet.js";
import Time from "./Time.js";
import Forecast from "./Forecast.js";
import Needs from "./Needs.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Map from "./Map";
import Error from "./Error";
import axios from "axios";
import { DateTime } from "luxon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({
    temperature: null,
    condition: null,
    humidity: null,
    wind: null,
    city: null,
    dayNight: "day",
    time: null,
    minTemp: null,
    maxTemp: null,
    forecast: [],
  });

  useEffect(() => {
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  });

  async function getLocationData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed382637ed83e5508a8eed5925733c11&units=metric`;

    try {
      const response = await axios.get(url);

      return {
        city: response.data.name,
        latitude: response.data.coord.lat,
        longitude: response.data.coord.lon,
      };
    } catch (error) {
      handleApiError(error);
    }
  }

  async function setWeatherDataFromApi(locationData) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.latitude}&lon=${locationData.longitude}&exclude=minutely,hourly,alerts&units=metric&appid=ed382637ed83e5508a8eed5925733c11`;
    try {
      const response = await axios.get(url);

      const data = response.data;
      const zone = data.timezone;

      const currentDate = DateTime.fromSeconds(data.current.dt, {
        zone,
      });

      const dayNight = getDayNight(
        data.current.dt,
        data.current.sunrise,
        data.current.sunset
      );
      const forecast = data.daily.slice(1, 4).map((dailyData) => ({
        day: DateTime.fromSeconds(dailyData.dt, {
          zone,
        }),
        tempMin: dailyData.temp.min,
        tempMax: dailyData.temp.max,
        condition: dailyData.weather[0].main,
      }));

      setWeatherData({
        temperature: data.current.temp,
        condition: data.current.weather[0].main,
        feelsLike: data.current.feels_like,
        humidity: data.current.humidity,
        wind: data.current.wind_speed,
        time: currentDate,
        city: locationData.city,
        dayNight,
        minTemp: data.daily[0].temp.min,
        maxTemp: data.daily[0].temp.max,
        forecast,
      });
    } catch (error) {
      handleApiError(error);
    }
  }

  function getDayNight(date, sunrise, sunset) {
    if (date < sunrise || date > sunset) {
      return "night";
    } else {
      return "day";
    }
  }

  function handleApiError(error) {
    let message = error.message;
    if (error.response?.data?.cod === "404") {
      message = `Could not find weather at city "${city}". Please check your spelling.`;
    }

    toast.error(message);
    setCity("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    loadData();
  }

  async function loadData() {
    if (!city) {
      return;
    }

    const locationData = await getLocationData();

    if (!locationData) {
      return;
    }
    await setWeatherDataFromApi(locationData);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <ToastContainer />
      <div className="MainContainer">
        <div>
          <Greet />
          <div>
            <form action="#">
              <input
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

        <div>
          <Conditions
            condition={weatherData.condition}
            temperature={weatherData.temperature}
            maxTemp={weatherData.maxTemp}
            minTemp={weatherData.minTemp}
            feelsLike={weatherData.feelsLike}
            humidity={weatherData.humidity}
            wind={weatherData.wind}
          />
          <Time city={weatherData.city} time={weatherData.time} />
        </div>
        <div>
          <Forecast forecast={weatherData.forecast} />
          <Needs />
        </div>
      </div>
      <Map />
    </div>
  );
}

export default App;
