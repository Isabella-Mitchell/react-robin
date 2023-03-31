import React from "react";
import { SortableContext, rectSwappingStrategy } from "@dnd-kit/sortable";
import { SortableImages } from "./SortableImages";

function MoveImageTilesNew(props) {
  return (
    <SortableContext
      items={props.myArrayBeingPassedIn}
      strategy={rectSwappingStrategy}
    >
      {props.myArrayBeingPassedIn.map((imagePiece) => (
        <SortableImages key={imagePiece} id={imagePiece}></SortableImages>
      ))}
    </SortableContext>
  );
}
console.log("I'm happening new new");

export default MoveImageTilesNew;
