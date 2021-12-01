import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AuthContext from "./contexts/AuthContext";
import App from "./App";
import "./index.css";
import colorPalette from "./variables/colorPalette";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colorPalette.light.rgb()};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </AuthContext>
  </React.StrictMode>,
  document.getElementById("root")
);
