import React from "react";

export default function FormattedDate(props) {
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let month = months[props.date.getMonth()];
  let day = props.date.getDate();
  let year = props.date.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = days[props.date.getDay()];
  let timeString = props.date.toLocaleTimeString(`en-US`, {
    hour: "2-digit",
    minute: "2-digit",
  });
  if (day < 10) {
    day = `0${day}`;
  }

  return (
    <div>
      {date}
      <br />
      {month}/{day}/{year}
      <br />
      {timeString}
    </div>
  );
}
