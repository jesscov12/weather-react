import React from "react";
import Search from "./Search";
import Weather from "./Weather";

import "./App.css";
import "./Weather.css";
import "./Search.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />

        <div>
          <Weather />
        </div>
        <hr />
      </div>
      <footer>
        This app is an {""}
        <a
          className="link"
          href="https://github.com/jesscov12/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          open-source code
        </a>{" "}
        by Jessica Covarrubias
      </footer>
    </div>
  );
}
