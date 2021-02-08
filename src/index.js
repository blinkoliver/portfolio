import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Preloader from "./Components/Preloader";
import "./i18n";

ReactDOM.render(
  <Suspense fallback={<Preloader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
registerServiceWorker();
