import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">
        <strong>{day()}</strong>
      </div>
      <div>
        <img
          className="WeatherForecast-img"
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={props.data.weather[0].description}
        />
      </div>

      <div className="WeatherForcast-temperature">
        {" "}
        <span className="WeatherForcast-temperature-max"> {maxTemp()} | </span>
        <span className="WeatherForcast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
