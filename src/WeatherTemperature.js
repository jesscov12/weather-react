import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h2>{Math.round(props.fahrenheit)}°F</h2>
    </div>
  );
}
