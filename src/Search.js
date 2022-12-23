import React from "react";

export default function Search() {
  return (
    <form className="Search">
      <input type="text" placeholder="Type a city.." className="inputBtn" />
      <input type="submit" value="Search" className="searchBtn" />
    </form>
  );
}
