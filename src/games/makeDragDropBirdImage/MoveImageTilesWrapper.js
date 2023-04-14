import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { getCutUpImage } from "./cutUpImage";
import MoveImageTilesNew from "./MoveImageTilesNew";

function MoveImageTilesWrapper() {
  // const cutUpImageArray = createCutUpImage();
  console.log("I'm the start of the wrapper being rendered!");

  const [imagePieces, setImagePieces] = useState([]);
  // const [imagePieces, setImagePieces] = useState(cutUpImageArray);

  // TODO - fix useEffect so that it renders in the correct order
  useEffect(() => {
    (async () => {
      setImagePieces(await getCutUpImage());
      console.log("using effect");
    })();
  }, []);

  const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 550px;
  `;

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Drag and Drop Image</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <MoveImageTilesNew
          myArrayBeingPassedIn={imagePieces}
        ></MoveImageTilesNew>
      </DndContext>
    </Container>
  );

  function handleDragEnd(event) {
    console.log("I'm happening 3");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER: " + over.id);

    if (active.id !== over.id) {
      setImagePieces((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}
console.log("I'm the end of the wrapper being rendered");

export default MoveImageTilesWrapper;
