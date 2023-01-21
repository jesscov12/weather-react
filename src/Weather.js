import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [load, setLoad] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });

    setLoad(true);
  }
  function search() {
    let apiKey = `1abc917551b1a4a6a106d16dc2865cf5`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityUpdate(event) {
    setCity(event.target.value);
  }

  if (load) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            className="inputBtn col-3"
            type="search"
            placeholder="Type a city.."
            onChange={cityUpdate}
          />
          <input type="submit" value="Search" className="searchBtn" />
        </form>
        <br />
        <WeatherInfo data={weatherData} />

        <hr />

        <WeatherForecast coord={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
