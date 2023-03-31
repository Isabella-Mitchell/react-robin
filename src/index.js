import React from "react";
import ReactDOM from "react-dom/client";
import MoveBirdCards from "./MoveBirdCards";
import Image from "./Image";
import MakeBirds from "./MakeBirds";
import MoveImageTiles from "./MoveImageTiles";
import MakeBirdGame from "./MakeBirdGame";
import MoveImageTilesWrapper from "./MoveImageTilesWrapper";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <div>
    {/* <MoveBirdCards />
    <Image />
    <MakeBirds /> */}
    <MoveImageTilesWrapper />
    <MakeBirdGame />
  </div>
);
