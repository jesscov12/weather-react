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
      <ul>
        <li className="date">{date}</li>
        <li className="time">{time}</li>
        <li className="description"> {description}</li>
        <li className="speed">{speed}</li>
      </ul>
    </div>
  );
}
