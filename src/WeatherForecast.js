import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <div>
              <img
                className="WeatherForecast-img"
                src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
                alt={forecast[0].weather[0].description}
              />
            </div>
            <div className="WeatherForcast-temperature">
              {" "}
              <span className="WeatherForcast-temperature-max">
                {" "}
                {forecast[0].temp.max}°{" "}
              </span>
              <span className="WeatherForcast-temperature-min">
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiKey = `a5acb752426cd8188485c35694980e3a`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
