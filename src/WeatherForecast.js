import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  console.log(props);
  let latitude = props.coord.lon;
  let longitude = props.coord.lat;
  let apiKey = `a5acb752426cd8188485c35694980e3a`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div>
            <img
              className="WeatherForecast-img"
              src=" http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
            ></img>
          </div>
          <div className="WeatherForcast-temperature">
            {" "}
            <span className="WeatherForcast-temperature-max"> 67° </span>
            <span className="WeatherForcast-temperature-min">45°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
