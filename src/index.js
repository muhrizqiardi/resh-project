import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import "./index.css";
import colorPalette from "./variables/colorPalette";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const app = initializeApp({
  apiKey: "AIzaSyAVRNrvVbNspDkWcUHburOk3oDjZN5p0qg",
  authDomain: "resh-project-301cf.firebaseapp.com",
  projectId: "resh-project-301cf",
  storageBucket: "resh-project-301cf.appspot.com",
  appId: "1:102175724190:web:4efecffce647f691cda18f",
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colorPalette.light.rgb()};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
