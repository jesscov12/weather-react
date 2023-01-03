import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <h2>{Math.round(props.data.temperature)}°</h2>
          <span className="celsius">
            <button> ℃ |</button>
          </span>
          <span className="fahrenheit">
            <button>℉ </button>
          </span>
          <br />
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
