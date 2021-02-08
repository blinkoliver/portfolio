import React from "react";
import preloader from "../assets/images/preloader.svg";

const Preloader = () => (
  <div className="App">
    <img src={preloader} className="App-logo" alt="preloader" />
    <div>loading...</div>
  </div>
);
export default Preloader;
