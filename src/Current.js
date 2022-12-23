import React from "react";
import "./Current.css";

export default function Current() {
  let date = "12/2/2022";
  let time = "11:25 am";
  let description = "Mist";
  let speed = "Wind Speed: 4pmh";
  return (
    <div className="Current col-6">
      <h3>Currently</h3>
      <p className="date">{date}</p>
      <p className="time">{time}</p>
      <p className="description"> {description}</p>
      <p className="speed">{speed}</p>
    </div>
  );
}
