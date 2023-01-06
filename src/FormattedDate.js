import React from "react";

export default function FormattedDate(props) {
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let month = months[props.date.getMonth()];
  let day = props.date.getDate();
  let year = props.date.getFullYear();
  let timeString = props.date.toLocaleTimeString(`en-US`);
  if (day < 10) {
    day = `0${day}`;
  }

  return (
    <div>
      {month}/{day}/{year}
      <br />
      {timeString}
    </div>
  );
}
