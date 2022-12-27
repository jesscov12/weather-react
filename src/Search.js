import React from "react";

export default function Search() {
  return (
    <form className="Search">
      <input
        type="search"
        placeholder="Type a city.."
        className="inputBtn col-3"
      />
      <input type="submit" value="Search" className="searchBtn" />
    </form>
  );
}
