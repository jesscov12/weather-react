import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Current from "./Current";

import "./App.css";
import "./Weather.css";
import "./Current.css";
import "./Search.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <h1>Austin</h1>
        <div className="row">
          <Weather />
          <Current />
        </div>
      </div>
      <a className="link" href="https://github.com/jesscov12/weather-react.git">
        Open-Source Code by Jessica Covarrubias
      </a>
    </div>
  );
}
