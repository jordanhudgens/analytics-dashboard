import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import Navbar from "./components/Navbar";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container">
          <App />
        </div>
      </div>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
