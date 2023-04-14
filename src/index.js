import React from "react";
import ReactDOM from "react-dom/client";
import MoveBirdCards from "./games/birdDragAndDropGames/index";
import Image from "./games/makeStaticBirdImage/index";
import MakeBirds from "./games/birdCardGenerator/index";
import MoveImageTilesWrapper from "./games/makeDragDropBirdImage/MoveImageTilesWrapper";
import ColourList from "./games/experiments/Colours";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <div>
    <MoveBirdCards />
    <Image />
    <MakeBirds />
    <MoveImageTilesWrapper />
    <ColourList />
  </div>
);
