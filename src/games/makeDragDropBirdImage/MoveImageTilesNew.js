import React from "react";
import { SortableContext, rectSwappingStrategy } from "@dnd-kit/sortable";
import { SortableImages } from "./SortableImages";

function MoveImageTilesNew(props) {
  console.log("I'm making your image tiles!");
  console.log(props.myArrayBeingPassedIn);
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
console.log("I've made your image tiles");

export default MoveImageTilesNew;
