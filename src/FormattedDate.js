import React from "react";

export default function FormattedDate(props) {
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let month = months[props.date.getMonth()];
  let day = props.date.getDate();
  let year = props.date.getFullYear();
  let hours = props.date.getHours() % 12 || 12;
  let minutes = props.date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";

  if (day < 10) {
    day = `0${day}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div>
      {month}/{day}/{year}
      <br />
      {hours}:{minutes}
      {ampm}
    </div>
  );
}
