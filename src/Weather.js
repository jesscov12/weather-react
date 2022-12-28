import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h2>66°</h2>
          <span className="celsius">
            <button> ℃ |</button>
          </span>
          <span className="fahrenheit">
            <button>℉ </button>
          </span>
          <br />
          <img
            src="http://openweathermap.org/img/wn/50d@2x.png"
            id="icon"
            alt=""
          />
        </div>
        <div className="col-6">
          <h3>Currently</h3>
          <ul>
            <li className="date">12/2/2022</li>
            <li className="time">11:25 am</li>
            <li className="description"> Mist</li>
            <li className="speed">4 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
