import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Image from "./Image";
import MakeBirds from "./MakeBirds";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <div>
    <App />
    <Image />
    <MakeBirds />
  </div>
);
