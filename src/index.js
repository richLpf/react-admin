import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import * as Sentry from "@sentry/react";
//import { Integrations } from "@sentry/tracing";
import * as serviceWorker from "./serviceWorker";
/*
Sentry.init({
  dsn: "http://87101aa7ae3b40e1b3bc9308e8663d07@106.75.233.206:9000/1",
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});*/

ReactDOM.render(
  /*<React.StrictMode>*/
  <App />,
  /*</React.StrictMode>,*/
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
