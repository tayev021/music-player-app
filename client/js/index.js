import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "./components/error/error-boundary";
import App from "./components/app";

import '../scss/main.scss';

ReactDOM.render(
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>
  , document.getElementById('app')
);
