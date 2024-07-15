import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import image from "./assets/93088.jpg";
import image from "./assets/pattern.svg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <img className="some" src={image} alt="" />
    <App />
  </React.StrictMode>
);
("");
