import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <h2>{Math.round(props.fahrenheit)}°F</h2>
        <span className="unit">
          <button onClick={convertToCelsius}> ℃ |</button>

          <button className="fs-6">
            <strong>℉</strong>{" "}
          </button>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <h2>{Math.round(celsius)}°C</h2>
        <span className="unit">
          <button className="fs-6">
            {" "}
            <strong>℃</strong> |
          </button>

          <button onClick={convertToFahrenheit}>℉ </button>
        </span>
      </div>
    );
  }
}
