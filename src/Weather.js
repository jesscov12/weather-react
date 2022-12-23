import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather col-6">
      <h1>66°</h1>
      <span className="celsius">℃ |</span>

      <span className="fahrenheit"> ℉</span>
      <br />
      <img src="http://openweathermap.org/img/wn/50d@2x.png" id="icon" alt="" />
    </div>
  );
}
