import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App.js";

import { robots } from "./robots.js";
ReactDOM.render(
  <App robots={robots} />,

  document.getElementById("root")
);

reportWebVitals();
