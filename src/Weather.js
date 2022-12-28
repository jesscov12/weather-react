import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [load, setLoad] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });

    setLoad(true);
  }

  if (load) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <h2>{Math.round(weatherData.temperature)}°</h2>
            <span className="celsius">
              <button> ℃ |</button>
            </span>
            <span className="fahrenheit">
              <button>℉ </button>
            </span>
            <br />
            <img
              src={weatherData.icon}
              id="icon"
              alt={weatherData.description}
            />
          </div>
          <div className="col-6">
            <h3>Currently</h3>
            <ul>
              <li className="date">
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="description"> {weatherData.description}</li>
              <li className="speed">{Math.round(weatherData.wind)}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `1abc917551b1a4a6a106d16dc2865cf5`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
