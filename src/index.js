import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./index.css";
import colorPalette from "./constants/colorPalette";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colorPalette.light.rgb()};
    font-family: "Inter", Arial, Helvetica, sans-serif;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </>
  ,
  document.getElementById("root")
);
