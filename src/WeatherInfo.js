import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <WeatherTemperature fahrenheit={props.data.temperature} />

          <img src={props.data.icon} id="icon" alt={props.data.description} />
        </div>
        <div className="col-6">
          <h3>Currently</h3>
          <ul>
            <li className="date">
              <FormattedDate date={props.data.date} />
            </li>
            <li className="description"> {props.data.description}</li>
            <li className="speed">{Math.round(props.data.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
